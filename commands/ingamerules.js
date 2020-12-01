const Discord = require("discord.js");
module.exports = {
    name: 'ingamerules',
    description: "Show all of rules to respect in game",
    execute(message, args){
        const membersInServer = message.guild.memberCount;
       embed = new Discord.MessageEmbed()
       .setTitle("▬▬▬▬▬▬▬▬▬▬ Scrims infos ▬▬▬▬▬▬▬▬▬▬")
       .setURL("")
       .setDescription("*Scrim awarding system.*\n \n✦ KOS = 10\n✦ Solo BOX Scrim = 12\n✦ Duo BOX scrim = 8 each*\n\n\n**Scrim rules.**\n\n✦ Do not bounce of the map purposely during scrims.\n✦ Do not go on the side of the map during scrims. (solo/duo)\n✦ Do not hide in trees, bushes, or anything that is walk through.\n✦ Do not shoot before round starts in solo/duo scrims, or you will be kicked.\n✦ Do not argue or ignore the host when they are talking to you.\n✦ Do not be toxic towards other members while you are in a scrim, you will be kicked.\n✦ Do not use glitches to your benefit, such as doing no recoil glitches with a __Heavy AR__, or using glitches to go higher than usual with bouncers.\n \n ✦ No LVL 999 Weapons.\n ✦ No Semi-Auto Sniper.\n✦ No Smg 101.\n ✦ No Heavy Sniper. \n✦ No Drum gun. \n✦ No Hunting Rifle. \n✦ No Burst AR. \n✦ No RPG. \n✦ No Tactical SMG. \n✦ No Burst SMG. \n✦ No Drum Shotgun. \n✦ No Burst Aug.\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
       .setImage("")
       .setFooter(`For any reports, you are allowed to DM a Manager, or create a ticket.`)
       .setColor("#fdaa64")


       message.channel.send(embed)
    }
}

