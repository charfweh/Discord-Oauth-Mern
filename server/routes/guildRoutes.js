const { checkguild } = require("../bot/logHandlerBot");
const router = require("express").Router();


router.get("/getGuildData",(req, res)=>{
    if(req.session.userdata){
        memberid = req.session.userdata
        guilds = req.session.guilds
        returnObject = checkguild(memberid, guilds)
        mutualGuilds = returnObject.owner_guilds
        inviteGuilds = returnObject.invite_guilds
        res.json({
            mutualGuilds : mutualGuilds,
            inviteGuilds : inviteGuilds
        })
        return;
    }
    if(!req.session.userdata){
        res.status(403).json({
            authError:"User not authenticated"
        })
    }
})

module.exports = router;