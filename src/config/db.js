

import mongoose from 'mongoose'



const db = () => {
    mongoose.connect(
        'mongodb://localhost:27017/mydemo',
        { useNewUrlParser: true,useUnifiedTopology: true},
        function (err, db) {
          if (err) {
            console.log("MongoDB Database Connection Error", err);
          } else {
            console.log("MongoDB Connection Done!!");
          }
        }
      );
}

export default db

