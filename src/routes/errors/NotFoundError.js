import httpStatus from "http-status-codes";

import HttpStatusError from "./HttpStatusError";

export default class NotFoundError extends HttpStatusError {
    constructor(message) {
        super(message);
        this.httpStatut = httpStatus.NOT_FOUND;
    }
};