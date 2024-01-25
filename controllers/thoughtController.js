const { User, Thought } = require('../models');

module.exports = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      console.log(thoughts); // Log fetched thoughts
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // get a single thought by _id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID.' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        // add to user's thoughts array field
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No thought with that ID found.' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a thought by _id
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body }, 
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with that ID found.' });
      }

      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete a thought by _id
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!deletedThought) {
        return res.status(404).json({ message: 'No such thought exists.' });
      }

      res.json({ message: 'Thought has successfully been deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add a reaction 
  async addReaction(req, res) {
    try {
      const { thoughtId, reactionId  } = req.params;

      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $addToSet: { reactions: reactionId } },
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ error: 'No thought with that ID found.' });
      }

      res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // delete a reaction by reactionId
  async deleteReaction(req, res) {
    try {
      const { thoughtId, reactionId } = req.params;

      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: reactionId } },
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'No reaction deleted as thought cannot be found.' });
      }

      res.json({ message: 'Reaction successfully deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};