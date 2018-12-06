const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "9";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("519966225321820179");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**w̷e̷l̷c̷o̷m̷e̷  I̷n̷  S̷k̷u̷l̷l̷  N̷e̷t̷w̷o̷r̷k̷#:**
`), 4000)        
}
});


client.login(process.env.BOT_TOKEN);
