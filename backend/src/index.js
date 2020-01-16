const express = require('express');
const mongoose = require('mongoose');
const mongooseKey = require('../credentials/mongoose.json');
const routes = require('./routes');

const app = express();

mongoose.connect(mongooseKey.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);

