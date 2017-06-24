const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send(200);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});