require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const router = require("./routes")
const port = process.env.Port || 5000

const app = express();
app.use(bodyParser.json());
app.use('/', router);
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
  next(console.log(111));
});

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.send('error');
// });
app.listen(port,()=>console.log('running',port))



module.exports = app;
