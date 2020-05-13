const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Initializing app
const app = express();
// allow to send json data to the app
app.use(express.json());
// allow Cross-Origin Resource Sharing
app.use(cors());

// Connecting to mongo database
mongoose.connect("mongodb://172.20.20.99:27017/nodeapi",
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

app.listen(3001);
