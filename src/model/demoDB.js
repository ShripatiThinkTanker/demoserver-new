import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
    "pdf_base64" : String,
    "name" : String,
    "isPrinted" : Boolean
})

const demoModel = mongoose.model("demo", demoSchema);

export default demoModel;
