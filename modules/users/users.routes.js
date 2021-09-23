const addUser = require('./users.controller');
const listUsers = require('./users.controller');

const controllers = require('./users.controller');

module.exports = (fastify) => {
  fastify.get('/users', controllers.listUsers);
  fastify.post('/users', controllers.addUser);
};
