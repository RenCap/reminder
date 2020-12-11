const httpStatus = require('http-status-codes');
const HttpStatusError = require("./HttpStatusError");

const NotFoundError = class NotFoundError extends HttpStatusError {
    constructor(message) {
        super(message);
        this.httpStatut = httpStatus.NOT_FOUND;
    }
};

module.exports = NotFoundError;