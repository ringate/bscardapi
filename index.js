const express = require('express');
const cors = require('cors');
const cardRouter = require('./card');

const SERVER_PORT = 3333;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/card', cardRouter);
app.get('/', (req, res) => res.send('OK'));

var server = app.listen(SERVER_PORT, () => {
  console.log(`BS Card API port is ${SERVER_PORT}`);
});

module.exports = app;
