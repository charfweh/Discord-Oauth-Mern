const express = require("express");
const server = express();
const port = require("./config.json").port;
const session = require("express-session")
// more to add later

// json
server.use(express.json())
// session
server.use(session({
    secret: 'abigmassivesecret',
    resave: false,
    saveUninitialized: false,
    name:'ohtellme',
    cookie:{
        expires:1000000,
    }
}))

server.use("/authorize",require("./routes/discordOauth"))
// listen
server.listen(port, ()=> console.log(`Listening to port ${port}`));