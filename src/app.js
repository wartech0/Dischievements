const koa = require("koa");
const serve = require("koa-static-server");

const api = require("./routes/routes.js");

const app = new koa();
const PORT = 3000;

app.use(api.routes());
app.use(serve({rootDir: 'web'}));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});