const { Schema, model, mongoose } = require('mongoose');

// schema for Reaction
const reactionSchema = new Schema({
  reactionId:{ 
    type: mongoose.Types.ObjectId,
    required: true, 
    },
  reactionBody: {
    type: String, 
    required: true, 
    maxlength: 280,
  },
  username: {
    type: String, 
    required: true, 
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    get: function() {
      return new Date(this._doc.createdAt).toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
    },
  },
},
{
  toJSON: {
      virtuals: true,
      getters: true,
  },
  id: false,
}
);

// gets length of thought's reactions array
reactionSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions ? this.reactions.length : 0;
  });

// schema for thought
const thoughtSchema = new Schema({
  thoughtText: { 
    type: String, 
    required: true, 
    minlength: 1,
    maxlength: 280,
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    get: function() {
      return new Date(this._doc.createdAt).toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
    },
  },
  username: {
    type: String, 
    required: true, 
  },
  reactions: {
    type: [reactionSchema],
    default: [],
  },
},
{
  toJSON: {
      virtuals: true,
      getters: true,
  },
  id: false,
}
);

// thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;