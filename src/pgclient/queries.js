const knex = require("knex")({
  client: 'postgresql',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'postgres',
    charset: 'utf8'
  }
});


function getAllUsers() {
  return knex('users').select();
}

function getUsersByGuild(guildid) {
  return knex('users').select().where('guildid', guildid);
}

function getAllGuilds() {
  return knex('guilds').select();
}

module.exports = {
  getAllUsers,
  getUsersByGuild,
  getAllGuilds
};