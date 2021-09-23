const fastify = require('fastify')({ logger: true });
const static = require('fastify-static');
const config = require('./config/config');
const formbody = require('fastify-formbody');
const cors = require('fastify-cors');
const routes = require('fastify-routes');
const db = require('./integrations/mongodb');
const dotenv = require('dotenv');

dotenv.config();

//Registro los plugins para su uso
fastify.register(cors);
fastify.register(routes);
fastify.register(formbody);

fastify.register(require('fastify-mongodb'), {
  forceClose: true,
  url: process.env.CONNECT_DB,
});

require('./modules/users/users.routes')(fastify);

//Levanto el server
const start = async () => {
  try {
    await fastify.listen(config.PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
