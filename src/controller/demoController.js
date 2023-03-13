var Shell = require('node-powershell');
const dataFunctions = require("../data/demo.js")
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runCommand(command) {
  const { stdout, stderr, error } = await exec(command);
  if(stderr){console.error('stderr:', stderr);}
  if(error){console.error('error:', error);}
  return stdout;
}


const  demoInsert =  async (req, res) => {
    try {
      const response = dataFunctions.uploadData(req.body)
      return res.render('home',{message:response.message})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error" + error
          })
    }
  }

  
const demoGet =  async (req, res) => {
    try {
      const listingData = await dataFunctions.getAllDocuments()
      const data = await runCommand('wmic printer get name')
      const listOfPrinters = data.replace("\r\r", " ").split("\n")
      var newList = [];
      console.log(listOfPrinters)
      for(let i = 0; i < listOfPrinters.length; i++){
        if(listOfPrinters[i].trim() != "Name"){
            newList.push(listOfPrinters[i])
        }
      }
      return res.render('list',{message:listingData, listOfPrinters:newList})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error"+ error
          })
    }
  }
  
const demoGetByID =  async (req, res) => {
    try {
        console.log("CALLED");
      return res.render('home',{message:"success"})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error" + error
          })
    }
  }

module.exports = {demoInsert,demoGet,demoGetByID}