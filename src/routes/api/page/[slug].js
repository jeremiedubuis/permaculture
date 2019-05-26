import page from '../../../api/models/Page';

export async function get(req, res, next) {

    const { slug } = req.params;
    const { results } = await page.get({ where: { slug } });
    if (results && results[0]) {
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
