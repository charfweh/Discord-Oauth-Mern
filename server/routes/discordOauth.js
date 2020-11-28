const router = require("express").Router();
const {clientId, clientSecret , scopes, redirectUri}  = require("../config.json")
const formData = require("form-data")
const fetch = require("node-fetch")
let username
// setting cors to proxy
router.get("/login",(req,res)=>{
  // if(!req.session.userdata) return res.send("Login please")
  console.log(`In backend ${req.session.userdata}`)
  res.json({
    username : username 
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
        res.redirect("http://localhost:3000")
      })
    })
  }
})

module.exports = router