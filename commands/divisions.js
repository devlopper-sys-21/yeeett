const Discord = require("discord.js");
module.exports = {
    name: 'divisions',
    description: "theses are divisions",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Divisions")
       .setURL("")
       .setDescription("")
       .setFooter(``)
       .setColor("#FF0000")

       message.channel.send(embed)
    }
}