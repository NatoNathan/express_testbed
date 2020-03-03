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
    return await this.db.put(userData);
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
}
module.exports = UserController;
