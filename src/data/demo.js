const demoModel = require("../model/demoDB.js");

const dataFunctions = {
    "uploadData" : (payload) => {
        const pdf_base64 = payload.data;
        const name = payload.name;
        const is_printed = false;

        demoModel.create({"pdf_base64" : pdf_base64, "name" : name, "isPrinted" : is_printed}).then(res => {console.log(res)}).catch((err) => {console.log(err)});
        return {"message" : "success"}
    },
    "getAllDocuments" : async () => {
        var data = []
        data = await demoModel.find({});
        return data
    }
}

module.exports = dataFunctions;