import Field from './Field';

class Fields {

    constructor(fields)  {
        this.fields = fields.map(f => new Field(f));
    }

    filter(f) {
        return this.fields.filter(f);
    }

    validateAllValues(values) {
        return this.validateFields(this.fields, values);
    }

    validateProvidedValues(values) {
        return this.validateFields(this.fields.filter(({ name }) => values.hasOwnProperty(name)), values);
    }

    validateFields(fields, values) {
        const errors = [];
        fields.forEach(requiredField => {
            let error = requiredField.getError(values[requiredField.name]);
            if (error) errors.push(error);
        });
        return errors.length ? errors : null;
    }

}

export default Fields;
