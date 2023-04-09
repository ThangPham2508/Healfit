const express = require('express');

const {
  httpAddInfo,
} = require("./diet.controller");

const dietRouter = express.Router();

dietRouter.post('/', httpAddInfo);

module.exports = dietRouter;