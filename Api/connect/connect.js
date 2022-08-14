const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.URI;

const connect = mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB connected..."));

module.exports = { connect };