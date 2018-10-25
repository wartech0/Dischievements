const Discord = require("discord.js");

const bot = new Discord.Client();
const config = require("./botconfig.json");

bot.on("ready", () => {
  console.log('Bot connected and ready to recieve...');
});

bot.on("message", async message => {
  //do not process messages from bots
  if(message.author.bot) return;

  console.log(message.author.username + ":" + message.content);
});

bot.login(config.token);