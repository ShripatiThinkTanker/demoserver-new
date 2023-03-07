import express from "express";
import {demoInsert,demoGet, demoGetByID} from '../controller/demoController.js'
const indexRouter = express.Router();

indexRouter.get('/', demoGet)
indexRouter.post('/insert', demoInsert)
indexRouter.get('/:id', demoGetByID)

export default indexRouter