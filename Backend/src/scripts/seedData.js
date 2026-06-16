import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";

import College from "../models/College.js";
import Question from "../models/Questions.js"

dotenv.config();

await connectDB();

try {

await College.deleteMany();
await Question.deleteMany();

const colleges=[

{
name:"IIT Bombay",
location:"Mumbai",
state:"Maharashtra",
fees:240000,
rating:4.9,

overview:
"Premier engineering institute known for world class education and placements.",

courses:[
{
name:"B.Tech Computer Science",
duration:"4 Years",
fees:240000
},
{
name:"M.Tech AI",
duration:"2 Years",
fees:150000
}
],

placements:{
averagePackage:28,
highestPackage:220,

topRecruiters:[
"Google",
"Microsoft",
"Uber",
"Goldman Sachs"
]
},

examCutoffs:{
JEE:68
}

},

{
name:"IIT Delhi",
location:"Delhi",
state:"Delhi",
fees:235000,
rating:4.8,

overview:
"Top ranked engineering institution with exceptional research culture.",

courses:[
{
name:"B.Tech Electronics",
duration:"4 Years",
fees:235000
}
],

placements:{
averagePackage:26,
highestPackage:200,

topRecruiters:[
"Amazon",
"Adobe",
"Google"
]
},

examCutoffs:{
JEE:115
}
},

{
name:"AIIMS Delhi",
location:"Delhi",
state:"Delhi",
fees:6000,
rating:4.9,

overview:
"India's most prestigious medical college.",

courses:[
{
name:"MBBS",
duration:"5.5 Years",
fees:6000
}
],

placements:{
averagePackage:15,
highestPackage:35,

topRecruiters:[
"Apollo",
"Fortis",
"Max Healthcare"
]
},

examCutoffs:{
NEET:50
}

},

{
name:"IIM Ahmedabad",
location:"Ahmedabad",
state:"Gujarat",
fees:2500000,
rating:4.9,

overview:
"Premier business school in India.",

courses:[
{
name:"MBA",
duration:"2 Years",
fees:2500000
}
],

placements:{
averagePackage:35,
highestPackage:115
,

topRecruiters:[
"BCG",
"McKinsey",
"Deloitte"
]
},

examCutoffs:{
CAT:99
}

},

{
name:"BITS Pilani",
location:"Pilani",
state:"Rajasthan",
fees:550000,
rating:4.7,

overview:
"Top private engineering institution.",

courses:[
{
name:"B.Tech CSE",
duration:"4 Years",
fees:550000
}
],

placements:{
averagePackage:22,
highestPackage:60,

topRecruiters:[
"Oracle",
"Nvidia",
"Amazon"
]
},

examCutoffs:{
BITSAT:320
}

},

{
name:"NIT Trichy",
location:"Tiruchirappalli",
state:"Tamil Nadu",
fees:180000,
rating:4.7,

overview:
"One of India's highest ranked NITs.",

courses:[
{
name:"B.Tech Mechanical",
duration:"4 Years",
fees:180000
}
],

placements:{
averagePackage:16,
highestPackage:52,

topRecruiters:[
"TCS",
"Accenture",
"Infosys"
]
},

examCutoffs:{
JEE:8700
}

},

{
name:"VIT Vellore",
location:"Vellore",
state:"Tamil Nadu",
fees:210000,
rating:4.5,

overview:
"Popular private engineering college.",

courses:[
{
name:"B.Tech AI & ML",
duration:"4 Years",
fees:210000
}
],

placements:{
averagePackage:10,
highestPackage:45,

topRecruiters:[
"Microsoft",
"TCS",
"Wipro"
]
},

examCutoffs:{
VITEEE:7000
}

},

{
name:"Manipal Institute of Technology",
location:"Manipal",
state:"Karnataka",
fees:320000,
rating:4.5,

overview:
"Strong industry-driven curriculum.",

courses:[
{
name:"B.Tech IT",
duration:"4 Years",
fees:320000
}
],

placements:{
averagePackage:11,
highestPackage:51,

topRecruiters:[
"Oracle",
"Dell",
"IBM"
]
},

examCutoffs:{
MET:5500
}

},

{
name:"SRM University",
location:"Chennai",
state:"Tamil Nadu",
fees:275000,
rating:4.3,

overview:
"Large multidisciplinary private institution.",

courses:[
{
name:"B.Tech CSE",
duration:"4 Years",
fees:275000
}
],

placements:{
averagePackage:8,
highestPackage:41,

topRecruiters:[
"Cognizant",
"Infosys",
"TCS"
]
},

examCutoffs:{
SRMJEEE:12000
}

},

{
name:"Delhi University",
location:"Delhi",
state:"Delhi",
fees:25000,
rating:4.4,

overview:
"One of India's leading universities offering diverse programs.",

courses:[
{
name:"BCA",
duration:"3 Years",
fees:25000
},
{
name:"B.Sc Computer Science",
duration:"3 Years",
fees:30000
}
],

placements:{
averagePackage:7,
highestPackage:24,

topRecruiters:[
"Deloitte",
"KPMG",
"EY"
]
},

examCutoffs:{
CUET:650
}

}

];

await College.insertMany(colleges);

const questions=[

{
questionText:
"Which college has the best placements for CSE?",

answers:[

{
answerText:
"IIT Bombay and IIT Delhi consistently top placement statistics."
},

{
answerText:
"BITS Pilani is also excellent for software roles."
}

]

},

{
questionText:
"Which is better for MBA: IIM Ahmedabad or IIM Bangalore?",

answers:[
{
answerText:
"IIM Ahmedabad usually has stronger consulting placements."
}
]

},

{
questionText:
"Is VIT worth joining for Computer Science?"
}

];


await Question.insertMany(
questions
);

console.log(
"Seed Data Inserted Successfully"
);

process.exit();

} catch(error){

console.log(error);

process.exit(1);

}