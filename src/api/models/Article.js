import Model from './classes/Model';
import {STRING} from './classes/Field';

const article = new Model('articles', [
    {
        name: 'slug',
        type: STRING,
        isRequired: true
    },
    {
        name: 'title',
        type: STRING,
        isRequired: true
    },
    {
        name: 'content',
        type: STRING
    }
]);

export default article;
