const express = require("express");
const {demoInsert,demoGet, demoGetByID}  = require('../controller/demoController.js')
const indexRouter = express.Router();

indexRouter.get('/', demoGet)
indexRouter.post('/insert', demoInsert)
indexRouter.get('/:id', demoGetByID)

module.exports = indexRouter