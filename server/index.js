const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const usersRouter = require("./routes/users.js")
const exercisesRouter = require("./routes/exercises.js");

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS
mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open',() => {
    console.log("Mongoose Database connected")
})

app.get("/",(req,res) => {
    console.log("Hello World")
})
app.use("/users",usersRouter)
app.use("/exercises",exercisesRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log("Server Started on "+port)})