import Sequelize from 'sequelize';
import sequelizeFixtures from 'sequelize-fixtures';
import {mysql} from './config';

import Article from './models/Article';
import Page from './models/Page';
import User from './models/User';

const sequelize = new Sequelize(mysql.db, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: 'mysql',
    sync: { force: true }
});
const db = {
    sequelize,
    models: {
        Article: sequelize.import('Article', Article),
        Page: sequelize.import('Page', Page),
        User: sequelize.import('User', User)
    }
};

sequelize.authenticate().then(() => {
    console.log('MySql - Authentication success');
    sequelizeFixtures.loadFile('static/fixtures/users.json', db.models);
    sequelizeFixtures.loadFile('static/fixtures/pages.json', db.models);
}).catch((err) => {
    console.log('MySql - Authentication failure');
    console.log('======================================');
    console.log(mysql);
    console.log('======================================');
    console.log(err);
});


export default db;
