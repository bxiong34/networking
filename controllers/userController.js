const { User, Thought } = require('../models');

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate('thoughts', 'friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID found.' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update a user by _id
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body }, 
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with that ID found.' });
      }

      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete a user by _id
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndRemove({ _id: req.params.userId });

      if (!deletedUser) {
        return res.status(404).json({ message: 'No such user exists.' });
      }
      // delete user's associated thoughts
      await Thought.deleteMany({ user : deletedUser._id});

      res.json({ message: 'User and associated thoughts has successfully been deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add a new friend to a user's friend list
  async addFriend(req, res) {
    try {
      const { userId, friendId } = req.params;

      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with that ID found.' });
      }

      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // remove a friend from a user's friend list
  async deleteFriend(req, res) {
    try {
      const { userId, friendId } = req.params;

      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { friends: friendId } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with that ID found.' });
      }

      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};