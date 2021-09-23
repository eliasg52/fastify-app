/* module.exports = class Users {
  static list(req, reply) {
    reply.send({
      title: 'Demo',
      description: 'demo2',
    });
  }
};
 */
const ObjectID = require('mongodb').ObjectID;

/* async function listUsers(req, reply) {
  const users = this.mongo.db.collection('blogs');
  const result = await users.find({}).toArray();
  console.log(result);
  reply.send(result);
}

module.exports = { listUsers }; */
/* const ObjectID = require('mongodb').ObjectID; */

async function listUsers(req, reply) {
  const users = this.mongo.db.collection('users');
  const result = await users.find({}).toArray();
  console.log(result);
  reply.send(result);
}

async function addUser(req, reply) {
  const users = this.mongo.db.collection('users');
  const { name, age } = req.body;
  const data = { name, age };
  const result = await users.insertOne(data);
  reply.code(201).send('Creado');
}

module.exports = { listUsers, addUser };
