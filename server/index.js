const express = require("express");
const server = express();
const port = require("./config.json").port;
// more to add later

server.use("/",require("./routes/discordOauth"))
server.listen(port, ()=> console.log(`Listening to port ${port}`));