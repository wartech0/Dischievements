const Koa = require('koa');

const app = new Koa();
const PORT = 3000;

app.use(async (ctx) => {
  ctx.body = {
    status: 'success',
    body: 'hello world'
  };
});

const server = app.listen(PORT, () => {
  console.log('Server listening on port: ${PORT}');
})