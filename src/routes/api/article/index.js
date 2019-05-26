import Article from '../../../api/models/Article'

export async function get(req, res) {
    const { results } = await Article.get();

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(results));
}

export async function post() {

}
