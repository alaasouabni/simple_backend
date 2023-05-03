const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
const UserRouter = require("./controllers/User") //import User Routes
const TodoRouter = require("./controllers/Todo") // import Todo Routes
const cors = require("cors") // import cors


//Connect mongoDB database
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database=mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () =>{
    console.log('Database connected');
})

//Setting up the server
const app = express();
app.use(cors()) // add cors headers
app.use(express.json());

app.use('/api', routes);
app.use("/user", UserRouter) // send all "/user" requests to UserRouter for routing
app.use("/todos", TodoRouter) // send all "/todos" request to TodoROuter


app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})