module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    'mongodb+srv://eliasdb:35424255@cluster0.nh4m2.mongodb.net/node-blog?retryWrites=true&w=majority',
};
