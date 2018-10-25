const Discord = require("discord.js");

const bot = new Discord.Client();
const config = require("./botconfig.json");

bot.on("ready", () => {
  console.log('Bot connected and ready to recieve...');
});

bot.on("message", async message => {
  //do not process messages from bots
  if(message.author.bot) return;

  //route messages to a achievement handler
});

bot.on("error", err => {
  console.error(err);
})

bot.login(config.token);