const Discord = require("discord.js");

module.exports = {
    name: 'partner',
    description: "Partnerships Requirements",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("▬▬▬▬▬▬▬▬ Partnerships requirements ▬▬▬▬▬▬▬▬")
       .setURL("")
       .setDescription(`*We are always actively looking for partnerships in order to grow our Community. We have requirements that you'll need to meet in order to partner with us.*\n \n✦ *__Active__ server.*\n✦ *Something related to __Strucid__, or ROBLOX.*\n✦ *Almost, higher, or about our Server Members.*\n✦ *No toxicity, and no raiding history.* \n \n~ **We'll be actually fairly accepting our partnerships, if you have a huge server, but a huge raiding history, then we simply won't accept your partnership.**`)
       .setImage("")
       .setFooter("You are advised to DM a Management+ to partner with us.")
       .setColor("#be6744")

       message.channel.send(embed)
    }
}