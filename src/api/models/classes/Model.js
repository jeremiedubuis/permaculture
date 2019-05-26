import { query } from '../../db.js';
import Fields from './Fields';

const whereClause = (w) => {
    if (!w) return '';
    const keys = Object.keys(w);
    if (!keys.length) return '';
    return `WHERE ${keys.map(key => `${key}="${w[key]}"`).join(' AND')}`;
};

const sortClause = ({ key, order } = {}) => key ? `SORT by ${key} ${order}` : '';

class Model {

    constructor(table, fields) {
        this.table = table;
        this.fields = new Fields(fields);
    }

    async get({ where, sort } = {}, includePrivate) {
        let fields = this.fields;
        if (!includePrivate) fields = fields.filter(({ isPrivate }) => !isPrivate );

        fields = fields.map(({ name }) => name ).join(', ');
        return await query(
            `SELECT ${fields} FROM ${this.table} ${whereClause(where)} ${sortClause(sort)}`);

    }

    async post(values) {
        const errors = this.fields.validateAllValues(values);
        if (errors) throw(erros);
        return await query(
        `INSERT INTO ${this.table} 
                    (${Object.keys(values).join(', ')} 
                VALUES 
                    (${Object.values(values).map(v => `'${v}'`).join(', ')}))`);
    }

    async update(values) {
        const errors = this.fields.validateProvidedValues(values);
        if (errors) throw(erros);
        return await query(
        `UPDATE ${this.table} 
                SET ${Object.keys(values).map(key => `${key} = '${values[key]}'`).join(', ')}`);
    }

    async delete(where) {
        return await query(
            `DELETE FROM ${this.table} ${whereClause(where)} `);
    }

}

export default Model;
