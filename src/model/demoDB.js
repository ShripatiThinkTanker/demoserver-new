const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
    "pdf_base64" : String,
    "name" : String,
    "isPrinted" : Boolean
})

const demoModel = mongoose.model("demo", demoSchema);

module.exports = demoModel;
