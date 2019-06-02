import article from '../../../api/models/Article'

export async function get(req, res) {
    const { idOrSlug } = req.params;
    const { results } = await article.get({ where: { slug: idOrSlug }});
    if (results[0]) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(results[0]));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}

export async function update(req, res) {

}

export async function del(req, res) {

}
