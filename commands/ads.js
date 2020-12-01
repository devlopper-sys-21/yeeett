const Discord = require("discord.js");
module.exports = {
    name: 'ads',
    description: "Inform users about ads and prices",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("▬▬▬▬▬▬▬▬▬▬ Ads informations ▬▬▬▬▬▬▬▬▬▬")
       .setURL("")
       .setDescription(":money_with_wings:  50 Robux For @Here Ad\n:moneybag:  150 For @Everyone \n \n**Also price will go up everytime we grow!**")
       .setFooter(`If you want to buy ads please contact Oxzify#0093`)
       .setColor("#FF0000")

       message.channel.send(embed)
    }
}