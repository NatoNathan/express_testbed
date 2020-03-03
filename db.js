const PouchDB = require("pouchdb");

const userDB = PouchDB("data/user");

module.exports.userDB = userDB;
