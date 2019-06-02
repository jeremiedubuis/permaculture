export const secret = 'mysecretstring';

const host = process && process.env && process.env.SQL_HOST ? process.env.SQL_HOST : 'localhost';
const user = process && process.env && process.env.SQL_USER ? process.env.SQL_USER : 'root';
const password = process && process.env && process.env.SQL_PASSWORD ? process.env.SQL_PASSWORD : '';
export const mysql = {
    host,
    db: 'permaculture',
    user,
    password
};
export const salt = 'permaculture';
