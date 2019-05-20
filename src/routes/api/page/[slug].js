import db from '../../../api/db';


export function get(req, res, next) {

    const { slug } = req.params;
    db.models.Page.getFromSlug(slug, function(page) {
        if (page) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(page));
        } else {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                message: `Not found`
            }));
        }
    });
}
