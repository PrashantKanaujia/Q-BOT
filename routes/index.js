const { GoogleGenerativeAI } = require('@google/generative-ai');
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
const {initializeNlp}=require("../public/javascripts/nlp")
const {processes}=require("../public/javascripts/nlp")

initializeNlp()

var express = require('express');
var router = express.Router();
const session = require('express-session');
const sha256=require("js-sha256")

const {userModel,passModel}=require("./users");



let prompt = `You are a chatbot named 'Q-Bot' for IMS Engineering College, Ghaziabad. Respond to user queries by generating 
random(mock data by yourself), relevant data based on the college, such as attendance, assignments, deadlines, timetable, exam dates, etc. Provide 
the response in short, clear points. Make sure to maintain a helpful and friendly tone.don't tell any thing unless asked If you don't have data answer a question, say:
 'Sorry, I can't help you with that. Please contact support: [XXXXXXXXX].`;

router.use(express.static("./public"));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/about",async function(req,res,next){
  res.render("about");
});

router.get("/hom",async function(req,res,next){
  res.render("home",{title: "Express"});
});

router.get("/contact",async function(req,res,next){
  res.render("contact");
});

router.post("/nlp",async function(req,res,next){
  const userMessage=req.body.um
  let int= await processes(userMessage)
  // console.log(int)
  res.json(int)
});


router.get("/data",async function(req,res,next){

try{
let studData=await userModel.findOne({userid:req.session.uid});

res.json({studData});
}
catch(err){
  console.log(err);
  next(err)
}

});

/* GET home page. */
router.get('/', async function(req, res, next) {
  
   res.render("form1");
});

router.post("/home", async function(req,res,next){
 
  const {email,password}=req.body;
  req.session.uid=email;
  console.log((req.session.uid))
  const passw=await passModel.findOne({userid:email}).select("password")
  console.log(password,passw)
  if(sha256(password)== passw.password){
  res.render("home",{title: "J.A.R.V.I.S"});
  
//  console.log(email,password)
  }
  else{
   res.render("form1");
  }
});

router.post("/api", async (req,res,next)=>{
  
  let query =req.body.query;
  
  const prom=prompt+query;
  // console.log(prom)
  query="";
  result=`The AI-powered response feature is currently unavailable due to API rate limits.

You can still test the chatbot using ERP-related queries such as:
• Attendance
• CT Scores / Marks
• Name
• Age
• Date of Birth (DOB)
• Address

These features are fetched directly from the student database and remain fully functional.
`
  try{
  // const result= await model.generateContent(prom);
  // console.log(result.response.text())
  res.json({ message: 'Work completed successfully!', receivedData: result });
  }
  catch(err){
    console.log("errorrrrrrrrr")
    console.log(err)
    res.render("error");
    next();
  }
});

module.exports = router;
