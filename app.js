const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and runnning on port: ${port}`);
});
