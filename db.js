const mongoose=require("mongoose");





// const mongoURL='mongodb://localhost:27017/hotels'


// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });




// const db=mongoose.connection;




// db.on('connected',()=>{
//     console.log("Connected to MongoDB server");
// });

// db.on('error',(err)=>{
//     console.log("Mongodb Connection error ",err);
// });


// db.on('disconnected',()=>{
//     console.log("Disconneted to MongoDB Server");
// });

// module.exports=db;
mongoose.connect('mongodb://localhost:27017/hotelsh')
  .then(() => console.log("Connected to MongoDB server"))
  .catch(err => console.log(err));



 



