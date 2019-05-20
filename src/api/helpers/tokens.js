import jwt from 'jsonwebtoken';
import { secret } from '../config';

export async function getToken(req) {

    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (!token) return false;
    try {
        return !!jwt.verify(token, secret);
    } catch(err) {
        return false;
    }
}
