const express = require('express');
var dataRouter = require('./dataRoutes.js')


const app = express();
app.use('/api', dataRouter);

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send(200);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});