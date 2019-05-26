import mysql from 'mysql';
import {mysql as config} from './config';

const db = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.db,
    port : config.port,
});

db.connect(function(err) {
    if (err) return console.log('Error', err);
    console.log('Connected');

});

export const query = (...params) => {

    return new Promise(function(resolve, reject) {
        db.query(...params, function(error, results, fields) {
            if(error) return reject(error, results, fields);
            resolve({ results, fields });
        });
    });
};

export default db;
