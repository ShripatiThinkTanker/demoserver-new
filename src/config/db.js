

import mongoose from 'mongoose'



const db = () => {
    mongoose.connect(
        'mongodb://localhost:27017/mydemo',
        { useNewUrlParser: true,useUnifiedTopology: true}
      ).then((res) => {
        console.log("connected successfully")
      });
}

export default db

