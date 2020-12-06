const router = require("express").Router();
const {clientId, clientSecret , scopes, redirectUri}  = require("../config.json")
const formData = require("form-data")
const fetch = require("node-fetch")
const cors = require("cors")
const {userhit} = require("../bot/logHandlerBot");
let username
// setting cors to proxy
router.get("/login",(req,res)=>{
  if(!req.session.userdata) return res.status(401)
  res.json({
    username : username,
  })
})

router.get("/callback",(req,res)=>{
  const accessCode = req.query.code
  if(!accessCode){
    res.send("No access code returned from discord")
    // replace all the redirect in a config file
  }else{
    console.log(accessCode)
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
    .then(res => res.json())
    .then(response =>{
      console.log(`Response object ${response.token_type} and code ${response.access_token}`)
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
        console.log(`username ${username}`)
        userhit(username)
        res.redirect("http://localhost:3000")
      })
    })
  }
})


// logout route

router.get("/logout",(req,res)=>{
  if(req.session.userdata){
    req.session.destroy((err)=>{
      if(err) return console.log(err)
      console.log("Destroyed")
    })
    res.redirect("http://localhost:3000")
  }else{
    res.redirect("http://locahost:3000")
  }
})


// TEST ROUTES
router.get("/testdata",(req, res)=>{
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
module.exports = router