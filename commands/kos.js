const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');


module.exports = {
    name: 'kos',
    description: "Kos",
    execute(message, args){
        const scrimMessage = args.join(' ');
        message.delete().catch(err => console.log(err));
       embed = new Discord.MessageEmbed()
       .setTitle("Kos")
       .setURL("")
       .setDescription(`** Before joining make sure to read the rules for Kos scrims here #📘│𝙨𝙘𝙧𝙞𝙢𝙨-𝙞𝙣𝙛𝙤𝙨 .**\n \n**Hosted by** ${message.member} \n \n**Time to join : 2 minutes**\n \n**Winning points : 12**\n \n**Url :** ` + scrimMessage  )
       .setFooter(`new scrim created ✅`)
       .setColor("#FF0000")
       .setImage("https://media.discordapp.net/attachments/780146136370774056/780434486479421470/kos.png")

       message.channel.send(embed)
    }
}