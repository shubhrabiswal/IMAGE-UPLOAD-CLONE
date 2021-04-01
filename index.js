const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { Todo } =  require("./models/todo");
const todos = require("./routes/todos");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");

require("dotenv").config();

//mongodb+srv://shubhra08:<password>@cluster0.56ii0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(cors());
app.use(express.json());

app.use("/api/todos", todos);
app.use("/api/signup", signUp);
app.use("/api/signin", signIn);

app.get("/", (req,res) => {
    res.send("To do application...");
})

console.log(module);

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(() =>
console.log("MongoDB connected successfully")
).catch((error) => 
console.error("MongoDB connection failed: ", error.message))

