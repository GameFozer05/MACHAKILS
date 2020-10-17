const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://speedfozer.glitch.me/`);
}, 280000);
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss") 
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const daily = Math.floor(Math.random() * 350) + 10;
const moment = require("moment");
const fs = require('fs');   
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');



 
 let spread = JSON.parse(fs.readFileSync('./spread.json' , 'utf8'));
client.on('message', message => {
    if(message.content ==(prefix + "antilink off")) {
        if(!message.channel.guild) return message.reply('**هدا الأامر لسيرفرات**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**ليس لديك الصلاحية** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**:x:   تم الغاء التفعيل**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        client.on('message', message => {
    if(message.content ==(prefix + "antilink on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**ليس لديك الصلاحية** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**:white_check_mark: تم التفعيل سيتم منع نشر الروابط**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.gmail.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
 
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
 
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا **`)
    }
 
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
 
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('//https://www.mediafire.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
 
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('//https://mega.nz/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**:rage:  لا يمكنك نشر الروابط هنا**`)
    }
});





  let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => {
    if(message.content ==(prefix + "antihack off")) {
        if(!message.channel.guild) return message.reply('**هدا الأامر لسيرفرات**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**ليس لديك الصلاحية** `MANAGE_GUILD`' );
antihack[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`** تم الغاء التفعيل**`)
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        client.on('message', message => {
    if(message.content ==(prefix + "antihack on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**ليس لديك الصلاحية** `MANAGE_GUILD`' );
antihack[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`** تم التفعيل الحماية**`)
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 4 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 3, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 4, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 4, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 5, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 3, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  if(!antihack[limit.guild.id]) antihack[limit.guild.id] = {
        onoff: 'Off'
            }
        if(antihack[limit.guild.id].onoff === 'Off') return;
  let log = limit.guild.channels.find( channel => channel.name === "log");
  log.send(limit.user.username+"** تحذير شخص يحاول `\اختراق`\ السيرفر ستتم ازلة الرتبة منه اسمه**");
  limit.guild.owner.send(limit.user.username+"** تحذير شخص يحاول `\اختراق`\ السيرفر ستتم ازلة الرتبة منه اسمه**");
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});



client.on("guildMemberAdd", member => {
        var embed = new Discord.RichEmbed()
     .addField('**Name**', `**${member.guild.name}**`,true)
    .addField('**__انت العضو رقم__**',`**${member.guild.memberCount}**`)
  .setColor('#FFFF00') // 
    var channel =member.guild.channels.find('name', '↪┃𝗪elcome-👋')
    if (!channel) return;
    channel.send({embed : embed});
    })
  



client.on('message', message => {
  if (message.author.bot) return;

  let args = message.content.split(" ");
  
  let command = args[0];
  
  let messagecount = args[1];
  
    if(command == prefix + "clear") {
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermissions(0x2000)){ if (!args[1]) {//Texo
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagecount = messages.array().length; 
    message.channel.sendMessage(' '+ "** تم حدف `" + messagecount + "`" +  ': من الرسائل' + "**").then(m => m.delete(5000));
    })
    } else {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
		message.channel.send("**ليس لديك الصلاحية**")
	} else if (!messagecount) {
		message.channel.send("**قم بكتابة عدد الرسائل لحدفها**")
	}else {
		message.channel.bulkDelete(messagecount);
             moment.locale('ar-ly');        
        message.channel.send("**تم حدف `" + messagecount +  " من الرسائل`**").then(mes => 
		mes.delete(3000)
		);    
	 }
   }
}}
});

client.on('message' , message => {
 if(message.content ==(prefix + "ping")) {
let msgping1 = new Date();
  let botping = new Date() - message.createdAt;
  let msgping2 = new Date() - msgping1;
  let pingembed = new Discord.RichEmbed()
                      .setColor('#000000')
.addField(`**\`سرعة الأتصال\`**`,`
**| __Message Taken__** **\`${Math.floor(botping)}\`** **ms.**
**| __Discord API__** **\`${Math.floor(client.ping)}\`** **ms.**
**| __Average__** **\`${Math.round(msgping2)}\`** **ms.**`)
  return message.channel.send(pingembed); //Texo
}
});




let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));
client.on('message', message => {
    if(message.content ==(prefix + "antibots on")) {
           if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**ليس لديك الصلاحية** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ تم التفعيل سيتم منع دخول البوتات**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
        

client.on('message', message => {
    if(message.content ==(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**ليس لديك الصلاحية** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ تم الغاء التفعيل**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })



console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");



