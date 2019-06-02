import crypto from 'crypto';
import { salt } from '../../api/config';
export default function(password, s){
    var hash = crypto.createHmac('sha512', s || salt); /** Hashing algorithm sha512 */
    hash.update(password);
    return hash.digest('hex');
};
