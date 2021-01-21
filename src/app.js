import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import {connect} from "mongoose";
import httpStatus from "http-status-codes";
import router from "./routes";
import cors from "cors";

const app = express();

// Connect to MongoDB
(async () => {
    const uri = `mongodb://${process.env.MONGO_HOST || 'localhost'}:${process.env.MONGO_PORT || '27017'}/reminder`;
    await connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
})();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/api', router);

app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).json({error: 'Not found'});
});

export default app;
