const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
   try {
    const r= await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "395784f2-0b84-4612-9940-aa422b8f5ff0"}}
    )
    return res.status(r.status).json(r.data);
  } catch (error) {
    // return res.status(error.response.status).json(error.response.data);
    console.log(error);
  } 
});

app.listen(3001);