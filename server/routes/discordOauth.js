const router = require("express").Router();
const {clientId, clientSecret , scopes, redirectUri, proxyUrl}  = require("../config.json")
const formData = require("form-data")
const fetch = require("node-fetch")
const {userhit} = require("../bot/logHandlerBot");
let username;

// Model Import
const userModel = require("../database/schemaModel");


router.get("/callback",(req,res)=>{
  const accessCode = req.query.code
  if(!accessCode){
    res.send("No access code returned from discord")
  }else{
    // making form data 
    const data = new formData();
    data.append("client_id", clientId)
    data.append("client_secret", clientSecret)
    data.append("grant_type", "authorization_code")
    data.append("redirect_uri", redirectUri)
    data.append("scopes",scopes.join(" "))
    data.append("code",accessCode)
    
    //fetching data
    fetch("https://discordapp.com/api/oauth2/token",{
      method: 'POST',
      body: data
    })
    .then(res =>res.json())
    .then(response =>{
      fetch("https://discordapp.com/api/users/@me",{
        method: 'GET',
        headers:{
          authorization: `${response.token_type} ${response.access_token}`
        }
      })
      .then(res2 => res2.json())
      .then(userResponse =>{
        username = `${userResponse.username}#${userResponse.discriminator}`
        req.session.userdata = userResponse
        userhit(username)
      })
      fetch('https://discordapp.com/api/users/@me/guilds', {
        method: 'GET',
        headers: {
          authorization: `${response.token_type} ${response.access_token}`
        },
      })
      .then(res2 => res2.json())
      .then(gResponse => {
        req.session.guilds = gResponse;
        res.redirect(proxyUrl)
        });
    })
  }
})


// GET logout route from **AuthComponent** logout button

router.get("/logout",(req,res)=>{
  if(req.session.userdata){
    req.session.destroy((err)=>{
      if(err) return console.log(err)
      console.log("Session destroyed")
    })
    res.redirect(proxyUrl)
  }else res.redirect(proxyUrl)
})


// GET userData router from **ComponentDidMount** 
router.get("/getUserData",(req, res)=>{
  if(!req.session.userdata){
      res.json({
      login : false,
    })
  }
  else{
    res.json({
      login : true,
      username : username,
    })
  }
})



// Mongoose TEST ROUTES
// Mongo DB test routes for tables
router.get("/test", async (req, res)=>{
    const user = new userModel({user:"testusername2",userId:"09090123456789"})
    try {
      console.log(user)
      await user.save()
      res.send(user)
    } catch (error) {
      console.log(error)
    }
})
module.exports = router