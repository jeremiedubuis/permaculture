const ERROR_EMPTY = 'EMPTY';

export const EMAIL = 'EMAIL';
export const NUMBER = 'NUMBER';
export const STRING = 'STRING';

const ERROR_FORMAT_EMAIL = `FORMAT_${EMAIL}`;
const ERROR_FORMAT_NUMBER = `FORMAT_${NUMBER}`;
const ERROR_FORMAT_STRING = `FORMAT_${STRING}`;
const ERROR_REGEX = `REGEX`;

const REGEX = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

class Field {

    constructor({
        isPrivate,
        isRequired,
        name,
        regex,
        type
    }) {
        this.name = name;
        this.type = type;
        this.isPrivate = isPrivate;
        this.isRequired = isRequired;
        this.regex = regex;
    }

    getError(value) {
        if (this.isRequired && !value) return { name: this.name, error: ERROR_EMPTY };
        const typeError = this.getTypeError(value);
        if (typeError) return typeError;
        return this.getRegexError(value);
    }

    getTypeError(value) {
        switch(this.type) {
            case EMAIL:
                if (!REGEX.EMAIL.test(value)) return { name: this.name, error: ERROR_FORMAT_EMAIL };
                break;
            case NUMBER:
                if (isNaN(value)) return { name: this.name, error: ERROR_FORMAT_NUMBER };
                break;
            case STRING:
                if (!typeof value === 'string') return { name: this.name, error: ERROR_FORMAT_STRING };
                break;
        }
        return null;
    }

    getRegexError(value) {
        if (this.regex && !this.regex.test(value)) return { name: this.name, error: ERROR_REGEX };
        return null;
    }

}

export default Field;
