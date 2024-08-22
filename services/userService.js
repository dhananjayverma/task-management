const User = require('../models/user');

class UserService {
    static async getAllUsers() {
        return User.find();
    }

    static async getUserById(id) {
        return User.findById(id);
    }

    static async updateUser(id, data) {
        return User.findByIdAndUpdate(id, data, { new: true });
    }

    static async deleteUser(id) {
        return User.findByIdAndDelete(id);
    }
}

module.exports = UserService;
