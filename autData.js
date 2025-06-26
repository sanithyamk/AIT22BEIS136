const axios = require('axios');

const authData = {
  email: "sanithyak.22.beis@acharya.ac.in",      
  name: "Sanithya mk",                 
  rollNo: "AIT22BEIS136",                   
  accessCode: "xtBSqM",                 
  clientID: "3183a73c-de4a-43b2-acb0-7ecfc9d81862",      
  clientSecret: "eVtNUGFmFWPEwdAq"        
};

axios.post("http://20.244.56.144/evaluation-service/auth", authData)
  .then(res => {
    console.log("Token:", res.data.access_token);
  })
  .catch(err => {
    console.error("Error Response:", err.response?.data || err.message);
  });
