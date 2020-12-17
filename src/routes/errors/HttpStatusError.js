export default class HttpStatusError extends Error {
    constructor(message, httpStatus) {
        super(message);
        // Make this class abstract
        if (this.constructor === HttpStatusError) {
            throw new TypeError('Abstract class "HttpStatusError" cannot be instantiated directly');
        }
        this.httpStatus = httpStatus;

        this.name = 'HttpStatusError';
        this.type = this.constructor.name;
    }
};