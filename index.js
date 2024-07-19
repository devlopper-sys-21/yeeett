//Variables
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const prefix = "+";
const bot = new Discord.Client({DisableEveryone: true});
const Canvas = require("canvas")
const jsonfile = require("jsonfile");
const { Server } = require("http");
const random = require("random");
const canvacord = require("canvacord");
const Levels = require("discord-xp");
const mongoose = require("mongoose");

/*
//embed of level up message
LevelUpembed = new Discord.MessageEmbed()
       .setTitle("Level Up!")
       .setURL("")
       .setDescription(`Good Stuff! You just leveled up to ${user.level}!`)
       .setFooter(`keep it up!`)
       .setColor("#61f9d8")

//Discord-xp level system 
Levels.setURL("")


bot.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const randomXp = Math.floor(math.random() * 9) +1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(LevelUpembed);
  }
})
*/




//command handler
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

//Starting redirecting the stats.json file
var stats = {};
if (fs.existsSync("stats.json")) {
    stats = jsonfile.readFileSync("stats.json");
}



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("Watching Q.S.L");
});


 
client.on('message', message =>{
    if(!message.content || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'rules'){
        client.commands.get('rules').execute(message, args);
    } 
    else if(command === 'help'){
      client.commands.get('help').execute(message, args);
  }
    else if(command === "nitroperks"){
      client.commands.get("nitroperks").execute(message, args);
    }
    else if(command === "donationperks"){
      client.commands.get("donationperks").execute(message, args);
    }
    else if(command === "verifyinfo"){
      client.commands.get("verifyinfo").execute(message, args);
    }
    else if(command === "membercount"){
      client.commands.get("membercount").execute(message, args);
    }
    else if(command === "soloscrim"){
      client.commands.get("soloscrim").execute(message, args);
    }
    else if(command === "solopoints"){
      client.commands.get("solopoints").execute(message, args);
    }
    else if(command === "tasks"){
      client.commands.get("tasks").execute(message, args);
    }
    else if(command === "duoscrim"){
      client.commands.get("duoscrim").execute(message, args);
    }
    else if(command === "kos"){
      client.commands.get("kos").execute(message, args);
    }
    else if(command === "divisions"){
      client.commands.get("divisions").execute(message, args);
    }
    else if(command === "partner"){
      client.commands.get("partner").execute(message, args);
    }
    else if(command === "rr"){
      client.commands.get("rr").execute(message, args);
    }
    else if(command === "ads"){
      client.commands.get("ads").execute(message, args);
    }
    else if(command === "donations"){
      client.commands.get("donations").execute(message, args);
    }
    else if(command === "ingamerules"){
      client.commands.get("ingamerules").execute(message, args);
    }
    else if(command === "rolesinfo"){
      client.commands.get("rolesinfo").execute(message, args);
    }
    else if(command === "tournamentsinfo"){
      client.commands.get("tournamentsinfo").execute(message, args);
    }
    if (message.author.id == client.user.id)
  return;

  if (message.guild.id in stats == false) {
      stats[message.guild.id] = {};
  }

  const guildStats = stats[message.guild.id];
  if(message.author.id in guildStats === false ) {
      guildStats[message.author.id] = {
          xp: 0,
          level: 0,
          last_message: 0,
          points: 0
      };
  }
  const userStats = guildStats[message.author.id];
    if (Date.now() - userStats.last_message > 60000 ) {
        userStats.xp += random.int(15, 25);
    userStats.last_message = Date.now();

    const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
    if(userStats.xp >= xpToNextLevel) {
        userStats.level++;
        userStats.xp = userStats.xp - xpToNextLevel;
        message.channel.send(message.author.username + " has reached level " + userStats.level);
    }
    const Addpoints = 

    jsonfile.writeFileSync("stats.json", stats);


    console.log(message.author.username + ' now has '  + userStats.xp);
    console.log(xpToNextLevel + " XP needed for the next level."); 
    
    }
    const parts = message.content.split(" ");

    if(command === "level") {
      embed = new Discord.MessageEmbed()
       .setTitle("Level")
       .setURL("")
       .setDescription(`Theses are your stats, ${message.member}}`)
       .setFooter(message.author.username)
       .setColor("#FF0000")
       .addFields(
        { name: 'Level', value: userStats.level + "/100", inline: true },
        { name: 'Xp', value: userStats.xp, inline: true },
      )

       message.channel.send(embed)
    }
  

  
});


client.login('...');
