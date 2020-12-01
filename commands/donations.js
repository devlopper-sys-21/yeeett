const Discord = require("discord.js");
module.exports = {
    name: 'donations',
    description: "Give informations about donations",
    execute(message, args){
        const membersInServer = message.guild.memberCount;
       embed = new Discord.MessageEmbed()
       .setTitle("▬▬▬▬▬▬▬▬▬ Donations informations ▬▬▬▬▬▬▬▬▬")
       .setURL("")
       .setDescription(`*Here are some informations to take care of before donating!*\n \n If you want to donate us it should be with robux.\nTheres is 2 type of donations in our server:\n \n✦ *Donating for the server.*\n✦ *Donating for the team.*\n \n \nIf you donate for the server, all the robux that you donate will be used for tournaments, cash cups, giveways, etc.**No personal needs!**\nIf you want to donate for the team the money will go for our staff members and everybody that works in the server.\n \n You can donate us in the channel #💸│donate`)
       .setImage("")
       .setFooter(`You can also get perks by donating to have more informations go in #🚀│donations-perks`)
       .setColor("#b505f7")


       message.channel.send(embed)
    }
}