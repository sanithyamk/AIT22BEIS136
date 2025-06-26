const axios = require('axios');

const registrationData = {
  email: "sanithyak.22.beis@acharya.ac.in",       
  name: "sanithya mk",                
  mobileNo: "8660635446",                
  githubUsername: "sanithya",  
  rollNo: "AIT22BEIS136",              
  accessCode: "xtBSqM"
           
};

axios.post("http://20.244.56.144/evaluation-service/register", registrationData)
  .then(response => {
    console.log(" Registered Successfully!");
    console.log("Response:", response.data);
    console.log(" Save your clientID and clientSecret securely!");
  })
  .catch(error => {
    if (error.response) {
      console.error(" Error Response:", error.response.data);
    } else {
      console.error(" Error:", error.message);
    }
  });
