import httpStatus from "http-status-codes";

import HttpStatusError from "../errors/HttpStatusError";

const requestHandler = async (req, res, process, isPost = false) => {
    try {
        // Get the result
        const result = await process();

        // Set status code and headers
        if (isPost) {
            res.status(httpStatus.CREATED)
                .header('Location', req.baseUrl + '/' + result._id); // FIXME wrong Location for tasks
        } else {
            res.status(httpStatus.OK);
        }

        //Send the response
        res.json(result);

    } catch (err) {
        console.error(err);

        if (err instanceof HttpStatusError) {
            // Manage known errors
            res.status(err.httpStatut).json({error: err.message});
        } else if (err.name === 'ValidationError') {
            // Manage validation errors
            res.status(httpStatus.BAD_REQUEST).json({error: err.toString()});
        } else {
            // Default error
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: 'An error occured.'});
        }
    }
};

export default requestHandler