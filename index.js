// Import MongoDB module
const mongoose = require("mongoose");

// Connection String to MongoDB
const dbURI =
  "mongodb+srv://admin:1234@cluster0.jyac4.mongodb.net/nucalchallenge?retryWrites=true&w=majority";

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const projectRoutes = require('./routes/projectRoutes');
const bodyParser = require("body-parser");
 
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function (result) {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));

// Apply CORS policy
app.use(cors());

// "Hello from homepage" is shown  when visiting http://localhost:8080/
app.get("/", (req, res) => res.send("Hello from homepage."));

// Assign the PORT to our app
app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

/**bodyParser.json(options)
* Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());

// project routes
app.use('/projects', projectRoutes);