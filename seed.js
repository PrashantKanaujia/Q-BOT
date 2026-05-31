const mongoose=require("mongoose");
const sha256=require("js-sha256")
require("dotenv").config();
// mongoose.connect("mongodb://127.0.0.1:27017/DataBase",{
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




const studentsPassword = [
  { userid: 2, password: "020" },
  { userid: 1, password: "010" },
  { userid: 3, password: "030" },
  { userid: 4, password: "040" },
  { userid: 5, password: "050" },
  { userid: 6, password: "060" },
  { userid: 7, password: "070" },
  { userid: 8, password: "080" },
  { userid: 9, password: "090" },
  { userid: 10, password: "0100" },
  { userid: 11, password: "0110" },
  { userid: 12, password: "0120" },
  { userid: 13, password: "0130" },
  { userid: 14, password: "0140" },
  { userid: 15, password: "0150" },
  { userid: 16, password: "0160" },
  { userid: 17, password: "0170" },
  { userid: 18, password: "0180" },
  { userid: 19, password: "0190" },
  { userid: 20, password: "0200" },
];


const students = [
  { userid: 1, name: "Amit Kumar", attendance: 90, ct1_marks: 85, age: 20, dob: "15 May 2004", address: "123 MG Road, Bangalore, Karnataka"},
  { userid: 2, name: "Rajesh Singh", attendance: 88, ct1_marks: 78, age: 22, dob: "22 Jul 2002",  address: "456 Green Park, New Delhi"},
  { userid: 3, name: "Priya Sharma", attendance: 95, ct1_marks: 92, age: 21, dob: "10 Oct 2003", address: "789 Colaba, Mumbai, Maharashtra"},
  { userid: 4, name: "Vikas Reddy", attendance: 80, ct1_marks: 70, age: 23, dob: "17 Mar 2001",  address: "101 Park Street, Kolkata, West Bengal"},
  { userid: 5, name: "Neha Patel", attendance: 87, ct1_marks: 81, age: 19, dob: "25 Jun 2005", address: "202 Lane No 5, Hyderabad, Telangana" },
  { userid: 6, name: "Sandeep Gupta", attendance: 91, ct1_marks: 84, age: 22, dob: "30 Jan 2002", address: "303 Main Road, Pune, Maharashtra"},
  { userid: 7, name: "Ananya Desai", attendance: 93, ct1_marks: 89, age: 20, dob: "5 Nov 2004", address: "404 Mohali, Punjab"},
  { userid: 8, name: "Arun Sharma", attendance: 85, ct1_marks: 76, age: 21, dob: "12 Apr 2003",  address: "505 Gandhi Nagar, Ahmedabad, Gujarat"},
  { userid: 9, name: "Sunil Yadav", attendance: 82, ct1_marks: 73, age: 24, dob: "18 Sep 2000", address: "606 Banjara Hills, Hyderabad"},
  { userid: 10, name: "Suman Verma", attendance: 78, ct1_marks: 68, age: 23, dob: "1 Dec 2001",  address: "707 Elgin Road, Kolkata, West Bengal"},
  { userid: 11, name: "Kiran Kumar", attendance: 92, ct1_marks: 87, age: 22, dob: "23 Feb 2002",  address: "808 Shivaji Nagar, Pune, Maharashtra"},
  { userid: 12, name: "Deepika Joshi", attendance: 90, ct1_marks: 85, age: 21, dob: "8 Aug 2003",   address: "909 Mall Road, Chandigarh"},
  { userid: 13, name: "Manoj Gupta", attendance: 94, ct1_marks: 91, age: 20, dob: "13 Jan 2004",  address: "1010 Nungambakkam, Chennai, Tamil Nadu" },
  { userid: 14, name: "Ravi Kumar", attendance: 88, ct1_marks: 78, age: 23, dob: "20 Nov 2001",   address: "1111 Punaikadai, Madurai, Tamil Nadu",},
  { userid: 15, name: "Anjali Rani", attendance: 96, ct1_marks: 94, age: 19, dob: "18 Feb 2005",  address: "1212 Mansarovar, Jaipur, Rajasthan"},
  { userid: 16, name: "Siddharth Patel", attendance: 86, ct1_marks: 79, age: 22, dob: "30 Apr 2002",  address: "1313 Lokhandwala, Mumbai, Maharashtra"},
  { userid: 17, name: "Rohit Mehra", attendance: 89, ct1_marks: 83, age: 21, dob: "9 Dec 2003",  address: "1414 Sector 17, Noida, Uttar Pradesh"},
  { userid: 18, name: "Divya Singh", attendance: 77, ct1_marks: 72, age: 24, dob: "25 Oct 2000",  address: "1515 BTM Layout, Bangalore, Karnataka"},
  { userid: 19, name: "Kavita Gupta", attendance: 84, ct1_marks: 75, age: 23, dob: "5 Jun 2001",  address: "1616 Kothapet, Chennai, Tamil Nadu"},
  { userid: 20, name: "Tina Sharma", attendance: 91, ct1_marks: 88, age: 20, dob: "17 Sep 2004",   address: "1717 R K Puram, New Delhi"},
];

async function seed() {
    await userModel.insertMany(students);

    studentsPassword.forEach(student => {
    student.password = sha256(student.password);
    });

    await passModel.insertMany(studentsPassword)

    console.log("Seed complete");
    process.exit();
}

seed()
