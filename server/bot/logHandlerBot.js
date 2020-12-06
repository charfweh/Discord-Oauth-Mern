const discord = require("discord.js")
const bot = new discord.Client()
const {token, bot_prefix, webhookid, webhooktoken} = require("../config.json")
bot.on("ready",()=>{
  console.log("im ready")
})
function userhit(userResponse){
  //this channel id is of the server im in, please replace with channel id of your server
  bot.channels.cache.get('730731531428954172').send(`User authorize with ${userResponse}`)
}
function checkguild(member_id,guilds){
  owner_guilds = []
  bot_guilds = []
  invitebot_guilds = []
  guilds.forEach((item, i) => {
    if(item.owner == true){
      owner_guilds.push({"name":item.name,"id":item.id})
      if(bot.guilds.cache.get(item.id)){
        bot_guilds.push({"name":item.name,"id":item.id})
      }
      if(!bot.guilds.cache.get(item.id)){
        invitebot_guilds.push({"name":item.name,"id":item.id})
      }
    }
  });
  return {
    bot_guilds,
    invitebot_guilds
  }
}

// return info for GUILD_ID
function manageguild(g_id){
  let guild = bot.guilds.cache.get(g_id)
  if(guild){
    let memberCount = guild.memberCount
    let guildname = guild.name
    let iconurl = guild.iconURL()
    let id = guild.id
    return {
      memberCount,
      guildname,
      iconurl,
      id
    }
  }
  return "ERR_INVALID_GUILD"
}

//parse the channels from POST request
async function modifyguild(channels, g_id, webuser){
    let c = channels[0].split(',')
    editguild = bot.guilds.cache.get(g_id)
    if(!editguild.channels.cache.find(c=>c.name == 'dashboard-logs')) return "Error"
    else{
      let logs = await editguild.channels.cache.find(c => c.name == 'dashboard-logs')
      logs.send(`User initiated edit guild ${webuser.tag}`)
      c.forEach((item, i) => {
        editguild.channels.create(item,"text").then(()=>{
          console.log("Channel created",item)
        }).catch((e)=>{
          editguild.channels.cache.find(c => c.name == 'dashboard-logs').send(`[-] Error: ${e}`)
        })
      });
    }
    return "OK"
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
  if(message.channel.name == 'irc'){
  	console.log(message.content)
    
  }
})

bot.on("guildCreate",async()=>{
  await message.systemChannel.send('Thanks for inviting me in here\n Use ``g!setup`` to start the setup!')
})

//i'd def want something nice?
bot.login(token)
module.exports =  { userhit, manageguild, checkguild, modifyguild};
