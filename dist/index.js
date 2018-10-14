"use strict";

require('dotenv').config();

var express = require('express');

var morgan = require('morgan');

var cors = require('cors');

var PORT = process.env.PORT || 8000;
var app = express();
app.use(cors());
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'tiny' : ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms'));
app.use('/api', require("./routes")); // error handler

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json(err);
}); // 404 hanlder

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
app.listen(PORT, 'test', function () {
  return console.log("server listening on port ".concat(PORT));
});