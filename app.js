require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const router = require("./routes");
const port = process.env.Port || 8000

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.listen(port,()=>console.log('running',port))

module.exports = app;