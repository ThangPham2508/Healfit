const express = require('express');

const dietRouter = require('./diet/diet.router');
const foodRouter = require('./food/food.router');

const api = express.Router();

api.use('/diet', dietRouter);
api.use('/food', foodRouter);

module.exports = api;