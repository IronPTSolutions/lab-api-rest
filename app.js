
require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');


require ('./config/db.config');

const app = express();

app.use(express.json());

const api = require('./config/routes.config');
app.use('/v1', api);

const port = process.env.PORT || 3000;

app.listen(port, () => console.info(`App listen in port ${port}`));