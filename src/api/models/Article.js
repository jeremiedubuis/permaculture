export default (sequelize, DataTypes) => {

    const Article = sequelize.define('Article', {
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING
        }
    });

    Article.getFromSlug = (slug, cb) =>
        Page.findOne({ where: { slug } }).then(project => cb(project));

    return Article;
};

