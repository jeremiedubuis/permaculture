import Model from './classes/Model';
import {STRING} from './classes/Field';

const page = new Model('pages', [
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

export default page;
