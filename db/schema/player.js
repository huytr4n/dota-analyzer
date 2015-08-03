var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define user schema
var Schema = new Schema({
  name: String, // player name
  hero: String,
  matchID: String,
  items: [String],
  GPM: Number,
  XPM: Number,
  kill: Number,
  death: Number,
  assit: Number,
  lasthit: Number,
  level: String,
  skills: [],
  role: String // carry, semi-support, hard-support, offlane, mid
}, {
  collection: 'Player'
});

// init user model
var Model = mongoose.model('Player', Schema);

/**
 * expose
 */
module.exports = Model;