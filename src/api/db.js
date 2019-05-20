import Sequelize from 'sequelize';
import sequelizeFixtures  from 'sequelize-fixtures';
import { mysql } from './config';

import Article from './models/Article';
import Page from './models/Page';
import User from './models/User';

const sequelize = new Sequelize(mysql.db, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: 'mysql'
});
const db = {
    sequelize,
    models: {
        Article: sequelize.import('Article', Article),
        Page: sequelize.import('Page', Page),
        User: sequelize.import('User', User)
    }
};

db.sequelize.sync({ force: true }).then(() => {
    sequelizeFixtures.loadFile('static/fixtures/users.json', db.models);
});
export default db;
