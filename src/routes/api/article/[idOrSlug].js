import db from '../../../api/db';

export async function get(req, res) {
    const { slug } = req.params;
    db.models.Article.findOne({ where: { slug }}).then(function(page) {
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

export async function update(req, res) {

}

export async function del(req, res) {

}
