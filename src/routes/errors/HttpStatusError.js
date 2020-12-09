const httpStatus = require('http-status-codes');

const HttpStatusError = class HttpStatusError extends Error {
    constructor(message, httpStatus) {
        super(message);
        if (this.constructor === HttpStatusError) {
            throw new TypeError('Abstract class "HttpStatusError" cannot be instantiated directly');
        }
        this.httpStatus = httpStatus;
    }
}

module.exports = HttpStatusError;