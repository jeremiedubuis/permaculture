import jwt from 'jsonwebtoken';
import { salt } from '../config';
import cookie from 'cookie';

export async function getToken(req) {

    if (!req.headers['cookie']) return false;
    let token = cookie.parse(req.headers['cookie']).token;
    if (!token) return false;
    try {
        return jwt.verify(token, salt);
    } catch(err) {
        return false;
    }
}
