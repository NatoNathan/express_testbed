const { v4: uuidv4 } = require("uuid").v4;

class UserController {
  constructor() {
    this.db = require("../db").userDB;
  }
  async getAllUsers() {
    return await this.db.allDocs();
  }
  async getUser(userID) {
    return await this.db.get(userID);
  }
  async addUser(userData) {
    const id = this.generateID();
    return await this.db.put({ ID: id, ...userData });
  }
  async updateUser(userID, userData) {
    const user = await this.getUser(userID);
    return await this.db.put({
      _id: userID,
      _rev: user._rev,
      ...userData
    });
  }
  async deleteUser(userID) {
    const user = await this.getUser(userID);
    return await this.db.remove(user);
  }

  generateID() {
    return uuidv4(); // Any ID generation would work here
  }
}
module.exports = UserController;
