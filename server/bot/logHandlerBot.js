const discord = require("discord.js")
const bot = new discord.Client()
const {token, bot_prefix} = require("../config.json")

bot.on("ready",()=>{
  console.log("im ready")
})
function userhit(userResponse){
  //this channel id is of the server im in, please replace with channel id of your server
  bot.channels.cache.get('730731531428954172').send(`User authorize with ${userResponse}`)
}

// WEB API
function checkguild(member_id, guilds){
  owner_guilds = [] // the owner guild
  invite_guilds = [] // bot and the guild user share mutual guilds
  bot_guilds = [] // mutual ids
  guilds.forEach(element => {
    if(element.owner == true){
      if(bot.guilds.cache.get(element.id)) owner_guilds.push({"name":element.name, "id":element.id})
      if(!bot.guilds.cache.get(element.id)) invite_guilds.push({"name":element.name, "id":element.id})
    }
  });
  // console.log(invite_guilds, owner_guilds)
  return {invite_guilds, owner_guilds}
}

//setup function for dashboard logging
bot.on("message",async message=>{
  if(message.author == message.author.bot) return;
  if(message.content.startsWith(bot_prefix+"setup")){
    await message.channel.send("[OK] starting the setup")
    if(message.member.hasPermission('ADMINISTRATOR')){
      await message.guild.channels.create("dashboard-logs","text").then(()=>{
        message.channel.send("[+] Channel created!")
      }).catch((e)=>{
        message.channel.send(`[-] Error: ${e}`)
      })
    }else return message.channel.send("[-] You do not have correct permission to run this command")
  }
})

bot.on("guildCreate",async()=>{
  await message.systemChannel.send('Thanks for inviting me in here\n Use ``g!setup`` to start the setup!')
})

//i'd def want something nice?
bot.login(token)
module.exports =  { userhit, checkguild };
