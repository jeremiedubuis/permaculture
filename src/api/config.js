export const secret = 'mysecretstring';

const host = process && process.env && process.env.SQL_SERVER ? `${process.env.SQL_SERVER}:${process.env.SQL_PORT}` : 'localhost';
export const mysql = {
    host,
    db: 'permaculture',
    user: 'root',
    password: ''
};
export const salt = 'permaculture';
