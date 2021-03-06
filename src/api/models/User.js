import bcrypt from 'bcrypt';
import { secret } from '../config';
import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.prototype.authorize = function() {
        const user = this;
        const token = jwt.sign({
                id: user.id,
                email: user.email
            },
            secret,
            { expiresIn: '24h' }
        );
        return { user, token }
    };

    User.authenticate = async (email, password) => {

        const user = await User.findOne({ where: { email } });

        if (bcrypt.compareSync(password, user.password)) {
            return user.authorize();
        }

        throw new Error('invalid password');
    };

    return User;

};
