import User from '../../../api/models/User';
import hash from '../../../api/helpers/hash';
import db from '../../../api/db';

export const get = (req, res) => {

};

export async function post(req, res) {
    try {
        const password = hash(req.body.password);
        await User.post({ ...req.body, password});
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

