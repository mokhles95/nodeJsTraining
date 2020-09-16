const mongoose=require('mongoose')

// connection to database
mongoose.connect('mongodb://localhost:27017/nodeJsTraining', {useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
    console.log("connected to database");
}).catch(err => {
    console.log(err);
  }); 