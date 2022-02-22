const express = require('express');
const app = express();
const cors = require('cors');
const formRoutes = require('./routes/form.routes')
const dotenv = require('dotenv').config();
const dbApp = require('../data-base/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use('/', formRoutes)
app.use('/test', dbApp)
module.exports = app

