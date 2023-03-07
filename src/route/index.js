import indexRouter from "./indexRouter.js"
export const route = (app) =>{
    app.use("/", indexRouter)
}

export default route