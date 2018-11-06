var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONDODB_URI);

module.exports = { mongoose };
