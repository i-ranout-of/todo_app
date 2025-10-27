require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();
const connectDB = require("./database");
const { MongoDBCollectionNamespace } = require('mongodb');

// middlewares
app.use(express.json()); //response to json
app.use(express.urlencoded({ extended: true })); // response to form

// database connection
connectDB();

// import routes
app.use(routes)

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});


// progress 

// --- connected to MongoDBCollection
// --- created app in dotenv
// --- need to insert task and then retrieve