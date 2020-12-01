const Discord = require("discord.js");
module.exports = {
    name: 'membercount',
    description: "Show amount of users in the server",
    execute(message, args){
        const membersInServer = message.guild.memberCount;
       embed = new Discord.MessageEmbed()
       .setTitle("Membercount")
       .setURL("")
       .setDescription(membersInServer)
       .setImage("")
       .setFooter(``)
       .setColor("#b505f7")


       message.channel.send(embed)
    }
}