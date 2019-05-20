import db from '../../api/db';
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
        const user = await db.models.User.authenticate(email, password);
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        console.log('authenticated')
        return res.end(JSON.stringify(user));

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
