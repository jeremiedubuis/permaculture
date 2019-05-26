import hash from '../helpers/hash';
import { secret } from '../config';
import jwt from 'jsonwebtoken';
import Model from './classes/Model';
import {EMAIL, STRING} from './classes/Field';

class User extends Model {
    async authenticate(email, password) {
        const { results, fields } = await this.get({ where: { email } });
        if (hash(password, results[0].password))
            return User.authorize(results[0].id, results[0].email);
        throw new Error('invalid password');
    }

    static authorize(id, email) {
        return jwt.sign({
                id: id,
                email: email
            },
            secret,
            { expiresIn: '24h' }
        );
    }
}

const user = new User('users', [
    {
        name: 'email',
        type: EMAIL,
        isRequired: true
    },
    {
        name: 'username',
        type: STRING,
        isRequired: true
    },
    {
        name: 'password',
        type: STRING,
        isRequired: true,
        isPrivate: true
    }
]);

export default user;
