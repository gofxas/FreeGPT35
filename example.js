const axios = require("axios");

const API_URL = "http://localhost:3000/v1/chat/completions";

const prompt = "Hello, how are you?";

const data = {
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.7,
  utoken: "free-gpt35",
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios
  .post(API_URL, data, config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
