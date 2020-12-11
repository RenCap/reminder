const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const httpStatus = require('http-status-codes');

const router = require('./routes');

const app = express();

// Connect to MongoDB
(async () => {
    // TODO parametrize the mongo URI
    const uri = 'mongodb://localhost:27017/reminder';
    await mongoose.connect(uri, {
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

app.use('/api', router);

app.use((req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({error: 'Not found'});
});

module.exports = app;
