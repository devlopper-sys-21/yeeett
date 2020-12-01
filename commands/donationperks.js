const Discord = require("discord.js");
module.exports = {
    name: 'donationperks',
    description: "perks",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Donating Perks")
       .setURL("")
       .setDescription("▬▬▬▬▬▬▬▬▬▬ Donation perks ▬▬▬▬▬▬▬▬▬▬\nThe following are the perks you would receive for small donations (5 to 199 robux)!\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n \n✦ Get the donator role.\n \n✦ Get pictures perm and reaction perms in general. \n \n✦ Bypass giveaway requirements. (50 robux +)\n \n✦ Access to donators giveaways. (100 robux +)\n \n✦ @ partnershipPing ping (100 robux +)\n \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nThe following are the perks you would receive for Big donations (200 + robux)!\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n \n✦ Get all the perks for small donations above. \n \n✦ Get the respect role. \n \n✦ Get **More** money with the daily command. \n \n✦")
       .setImage("https://images-ext-1.discordapp.net/external/Y_A_jHnbR1Q6VMRUjheur5YlZy9jie1KIJqxie3-qSQ/%3Fitemid%3D14289229/https/media1.tenor.com/images/c1ee5ae3e9db6a5a3536f4232e946155/tenor.gif?width=500&height=282")
       .setFooter(`Perks for boosting the server.`)
       .setColor("#FF0000")


       message.channel.send(embed)
    }
}