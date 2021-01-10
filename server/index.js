const express = require("express");
const server = express();
const port = require("./config.json").port;
const session = require("express-session")
const mongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose")
require("dotenv").config()
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@testcluster.s4hn4.mongodb.net/userDb?retryWrites=true&w=majority`;

// mongoose connection URI
mongoose.connect(url, {useNewUrlParser :true, useUnifiedTopology: true }).then(console.log("we're connected")).catch(err=>console.log(err))

// json
server.use(express.json())
// session
server.use(session({
    secret: 'abigmassivesecret',
    resave: false,
    saveUninitialized: false,
    name:'cookieName',
    cookie:{
        expires:1000000,
    },
}))
//setting express app to use /authorize middleware
server.use("/authorize",require("./routes/discordOauth"))
// listen
server.listen(port, ()=> console.log(`Listening to port ${port}`));