const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
var prefix = "$"

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});


client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  áÇ íæÌÏ áÏíß ÕáÇÍíÉ áãÓÍ ÇáÔÇÊ**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``ÊÜÜã ãÓÍ ÇáÔÇÊ ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});

client.login('NTEyMzIwMDI0NzUzNDcxNDg5.Dtr4XQ.pXXA2nLHSwIIiPihn6sf-jLqFRg');