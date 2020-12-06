const express = require("express");
const server = express();
const port = require("./config.json").port;
const session = require("express-session")

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
    }
}))
//setting express app to use /authorize middleware
server.use("/authorize",require("./routes/discordOauth"))
// listen
server.listen(port, ()=> console.log(`Listening to port ${port}`));