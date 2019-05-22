import db from '../../../api/db';

export async function get(req, res) {
    db.models.Article.findAll().then(function(articles) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(articles));
    });
}

export async function post() {

}
