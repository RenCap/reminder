const httpStatus = require('http-status-codes');
const HttpStatusError = require("../errors/HttpStatusError");

const requestHandler = async (req, res, process, isPost = false) => {
    try {
        // Get the result
        const result = await process();

        // Set status code and headers
        if (isPost) {
            res.status(httpStatus.CREATED)
                .header('Location', req.baseUrl + '/' + result._id);
        } else {
            res.status(httpStatus.OK);
        }

        //Send the response
        res.json(result);
    } catch (err) {
        // Manage known errors
        if (err instanceof HttpStatusError) {
            res.status(err.httpStatut).json({error: err.message});
        }

        // Default error
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: 'An error occured.'});
    }
};

module.exports = requestHandler;