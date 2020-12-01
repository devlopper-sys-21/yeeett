const Discord = require("discord.js");
module.exports = {
    name: 'nitroperks',
    description: "perks",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Boosting Perks")
       .setURL("")
       .setDescription("▬▬▬▬▬▬▬▬▬▬ Booster perks ▬▬▬▬▬▬▬▬▬▬\nThe following are the perks you would receive for boosting the server!\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n \n✦ @ here ping advertisement.\n \n✦ Bypass giveaway requirements.\n \n✦ Access to booster giveaways.\n \n✦ Get Server booster role (Higher chance to be a staff in the next staff apps).\n \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
       .setImage("https://images-ext-1.discordapp.net/external/Y_A_jHnbR1Q6VMRUjheur5YlZy9jie1KIJqxie3-qSQ/%3Fitemid%3D14289229/https/media1.tenor.com/images/c1ee5ae3e9db6a5a3536f4232e946155/tenor.gif?width=500&height=282")
       .setFooter(`Perks for boosting the server.`)
       .setColor("#b505f7")


       message.channel.send(embed)
    }
}