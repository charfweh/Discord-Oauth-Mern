const server = require("express");
const port = require("./config.json").port;
// more to add later


server.listen(port, ()=> console.log(`Listening to port ${port}`));