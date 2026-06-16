const states = [
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Karnataka",
  "Maharashtra",
  "Delhi",
  "Kerala",
  "Rajasthan",
  "West Bengal",
  "Uttar Pradesh"
];

const recruiters = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Infosys",
  "Accenture",
  "Wipro",
  "Deloitte"
];

const collegeNames = [
  "IIT Bombay",
  "IIT Delhi",
  "IIT Madras",
  "IIT Kanpur",
  "IIT Kharagpur",
  "NIT Trichy",
  "NIT Warangal",
  "NIT Surathkal",
  "NIT Calicut",
  "NIT Rourkela",
  "IIIT Hyderabad",
  "IIIT Bangalore",
  "IIIT Delhi",
  "BITS Pilani",
  "BITS Goa",
  "BITS Hyderabad",
  "VIT Vellore",
  "VIT Chennai",
  "SRM KTR",
  "Manipal Institute of Technology",
  "JNTU Hyderabad",
  "Osmania University",
  "Andhra University",
  "Jadavpur University",
  "DTU",
  "NSUT",
  "COEP Pune",
  "Thapar Institute",
  "PSG College",
  "Amrita University",
  "AIIMS Delhi",
  "CMC Vellore",
  "JIPMER",
  "KGMU",
  "AFMC",
  "IIM Ahmedabad",
  "IIM Bangalore",
  "IIM Calcutta",
  "IIM Lucknow",
  "XLRI",
  "FMS Delhi",
  "SPJIMR",
  "University of Delhi",
  "BHU",
  "AMU",
  "University of Hyderabad",
  "Jamia Millia Islamia",
  "Christ University",
  "Loyola College",
  "St Xavier's College"
];

const collegesData = collegeNames.map((name, index) => ({
  name,
  location: `City ${index + 1}`,
  state: states[index % states.length],

  fees: 50000 + index * 15000,

  rating: Number(
    (4 + (index % 10) * 0.1).toFixed(1)
  ),

  nirfRank: index + 1,

  image: `https://picsum.photos/seed/${index}/800/600`,

  overview: `${name} is one of India's reputed institutions known for academics, placements, research, and student development.`,

  courses: [
    {
      name: "B.Tech",
      duration: "4 Years",
      fees: 120000 + index * 1000
    },
    {
      name: "MBA",
      duration: "2 Years",
      fees: 200000 + index * 1000
    },
    {
      name: "MBBS",
      duration: "5.5 Years",
      fees: 300000 + index * 1000
    }
  ],

  placements: {
    averagePackage: 600000 + index * 50000,
    highestPackage: 2000000 + index * 100000,
    topRecruiters: recruiters
  },

  examCutoffs: {
    JEE: 5000 - index * 50,
    NEET: 15000 - index * 100,
    CAT: 90 + (index % 10)
  }
}));

export default collegesData;