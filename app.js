const express = require('express');
const app = express();
const cors = require('cors');
const data = require("./data/data.json");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/data', (req,res)=> {
  res.status(200).send(data.name);
}) 

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});