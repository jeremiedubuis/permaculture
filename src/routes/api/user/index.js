import bcrypt from 'bcrypt';
import db from '../../../api/db';

export const get = (req, res) => {

};

export async function post(req, res) {
    console.log(req.body)
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.models.User.create({ ...req.body, password});
        const data = await user.authorize();
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end();
    } catch(error) {
        res.writeHead(400, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: error
        }));
    }
};

