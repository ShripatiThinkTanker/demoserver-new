import dataFunctions from "../data/demo.js"
export const  demoInsert =  async (req, res) => {
    try {
      const response = dataFunctions.uploadData(req.body)
      return res.render('home',{message:response.message})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error" + error
          })
    }
  }

  
export const demoGet =  async (req, res) => {
    try {
      const listingData = await dataFunctions.getAllDocuments()
      console.log(listingData)
      return res.render('list',{message:listingData})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error"
          })
    }
  }
  
export const demoGetByID =  async (req, res) => {
    try {
        console.log("CALLED");
      return res.render('home',{message:"success"})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error"
          })
    }
  }

//export default demoInsert