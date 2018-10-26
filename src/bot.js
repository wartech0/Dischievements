const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./botconfig.json");

const Redis = require("redis");
const redisClient = Redis.createClient(); 

redisClient.on('connect', () => {
  console.log('connected');
});

redisClient.on('error', (err) => {
  console.log(err);
})

bot.on("ready", () => {
  console.log('Bot connected and ready to recieve...');
});

bot.on("message", async message => {
  //do not process messages from bots
  if(message.author.bot) return;

  redisClient.exists(message.author.id, (err, exists) => {
    if (!exists) {
      redisClient.hmset(`users:${message.author.id}`, {
        username: message.author.username || "",
        avatar: message.author.avatarURL || "",
        discriminator: message.author.discriminator || ""
      })
    } 
  });

  if(message.isMentioned(bot.user)) {
    redisClient.keys('*', (err, keys) => {
      console.log(keys);
      message.channel.send(keys).catch(console.error);
    });
  }
});

bot.on("error", err => {
  console.error(err);
})

bot.login(config.token);