import db from '../../../api/db';
import { getToken } from '../../../api/helpers/tokens';

const error = (res, message) => {
    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        message
    }));
};

export const get = (req, res) => {

    const { id } = req.params;
    const tokenData = getToken(req);
    if(tokenData && tokenData.id === id) {
        db.models.User.get(id, function(page) {
            if (page) {
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify(page));
            } else {
                error(res, 'Not found');
            }
        });
    } else {
        error(res, 'Forbidden');
    }
};

export const update = (req, res) => {

};

export const del = (req, res) => {

};

