var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

// define user schema
var Schema = new Schema({
	matchID: Number,
  lobby: String, // online|offline
  mode: String,
  time: String, // MM-DD-YYYY
  duration: String, // HH:mm:SS
  win: String, // dire/radiant
  lineup: {
    radiant: [
      {
        name: String, // player name
        hero: String,
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
      }
    ],

    dire: [
      {
        name: String, // player name
        hero: String,
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
      }
    ]
  }
}, {
	collection: 'Match'
});

// init user model
var Model = mongoose.model('Match', Schema);

/**
 * expose
 */
module.exports = Model;