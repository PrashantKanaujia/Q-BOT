const mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected successfully");
}).catch(err => {
  console.log("Database connection failed:", err);
});
const studentsschema= mongoose.Schema({
  userid: Number,
  name:String,
  attendance:Number,
  ct1_marks:Number,
  age:Number,
  dob:String,
  fine:Number,
  address:String,
  hosteler:Boolean,
  password:String
})

const passschema = mongoose.Schema({
  userid:Number,
  password:String
})

 const passModel=mongoose.model("studentspassword",passschema);
const userModel=mongoose.model("students",studentsschema)

module.exports.userModel = userModel;
module.exports.passModel = passModel;

