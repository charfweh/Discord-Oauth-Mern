const router = require("express").Router();
const {clientId}  = require("../config.json").clientId
router.get("/login",(req,res)=>{
    const authorizeUrl = `https://google.com`;
    res.redirect(authorizeUrl);
})

router.get("/callback",(req,res)=>{
    console.log(res)
})

module.exports = router