const Discord = require("discord.js");
module.exports = {
    name: 'help',
    description: "Helping the user",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Help")
       .setURL("")
       .setDescription("")
       .setFooter(`Help command`)
       .setColor("#FF0000")

       message.channel.send(embed)
    }
}