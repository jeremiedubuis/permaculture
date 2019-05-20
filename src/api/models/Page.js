export default (sequelize, DataTypes) => {

    const Page = sequelize.define('Page', {
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

    Page.getFromSlug = (slug, cb) =>
        Page.findOne({ where: { slug } }).then(project => cb(project));

    return Page;
};

