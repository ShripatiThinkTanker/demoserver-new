const indexRouter = require("./indexRouter.js")
const route = (app) =>{
    app.use("/", indexRouter)
}
module.exports = route;