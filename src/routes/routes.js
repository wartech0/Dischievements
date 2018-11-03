const Router = require("koa-router");
const router = Router();
const queries = require('../pgclient/queries.js');

router.get('/api/users', async (ctx) => {
  const users = await queries.getAllUsers();
  ctx.body = {
    status: 'success',
    data: users
  };
});

router.get('/api/guilds', async (ctx) => {
  const guilds = await queries.getAllGuilds();
  ctx.body = {
    status: 'success',
    data: guilds
  };
});

module.exports = router;