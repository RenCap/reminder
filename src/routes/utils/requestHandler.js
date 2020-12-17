import httpStatus from "http-status-codes";

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
        const errorHandlers = {
            'HttpStatusError': (res, err) => res.status(err.httpStatut).json({error: `${err.type}: ${err.message}`}),
            'ValidationError': (res, err) => res.status(httpStatus.BAD_REQUEST).json({error: err.toString()})
        };
        const defaultExceptionHandler = (res) => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: 'An error occurred.'});

        let errorHandler = errorHandlers[err.name] || defaultExceptionHandler;
        errorHandler(res, err);
    }
};

export default requestHandler;