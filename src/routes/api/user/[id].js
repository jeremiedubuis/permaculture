import User from '../../../api/models/User';
import { getToken } from '../../../api/helpers/tokens';

function error (res, message) {
    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        message
    }));
}

export async function get(req, res) {
    const { id } = req.params;
    const tokenData = getToken(req);
    if(tokenData && tokenData.id === id) {
        const user = await User.get({ where: { id }});
        if (user) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(user));
        } else {
            error(res, 'Not found');
        }
    } else {
        error(res, 'Forbidden');
    }
}

export function update(req, res) {

}

export function del(req, res) {

}

