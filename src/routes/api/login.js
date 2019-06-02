import User from '../../api/models/User';
import hash from '../../api/helpers/hash';

export async function post(req, res) {
    const { email, password } = req.body;
    // if the username / password is missing, we use status code 400
    // indicating a bad request was made and send back a message
    if (!email || !password) {
        res.writeHead(400, {
            'Content-Type': 'application/json'
        });

        return res.end(JSON.stringify({
            message: 'Request missing email or password param'
        }));
    }
    try {
        const token = await User.authenticate(email, password);
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Set-Cookie': `token=${token}; HttpOnly=true;`
        });
        return res.end(JSON.stringify(token));

    } catch (err) {
        res.writeHead(400, {
            'Content-Type': 'application/json'
        });

        return res.end(JSON.stringify({
            message: 'Invalid email or password param',
            stack: err
        }));
    }

}
