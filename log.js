const axios = require("axios");

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYW5pdGh5YWsuMjIuYmVpc0BhY2hhcnlhLmFjLmluIiwiZXhwIjoxNzUwOTI1MzMwLCJpYXQiOjE3NTA5MjQ0MzAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI0MzM4YWQ1NC03N2VmLTRlM2YtYjdhNC03NGE0ZDhlMWIwN2MiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzYW5pdGh5YSBtayIsInN1YiI6IjMxODNhNzNjLWRlNGEtNDNiMi1hY2IwLTdlY2ZjOWQ4MTg2MiJ9LCJlbWFpbCI6InNhbml0aHlhay4yMi5iZWlzQGFjaGFyeWEuYWMuaW4iLCJuYW1lIjoic2FuaXRoeWEgbWsiLCJyb2xsTm8iOiJhaXQyMmJlaXMxMzYiLCJhY2Nlc3NDb2RlIjoieHRCU3FNIiwiY2xpZW50SUQiOiIzMTgzYTczYy1kZTRhLTQzYjItYWNiMC03ZWNmYzlkODE4NjIiLCJjbGllbnRTZWNyZXQiOiJlVnROVUdGbUZXUEV3ZEFxIn0.sdhUYz9QkzkRxeWrdq5CRxReQRLJ1tUADfCoe0A5THM";
function Log(stack, level, packageName, message) {
  axios.post("http://20.244.56.144/evaluation-service/logs", {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message
  }, {
    headers: {
      Authorization: `sanithya ${accessToken}`
    }
  })
    .then(res => {
      console.log("", res.data.message);
      console.log(" Log ID:", res.data.logID);
    })
    .catch(err => {
      console.error(" Log failed:", err.response?.data || err.message);
    });
}

Log("backend", "error", "handler", "received string, expected bool");
