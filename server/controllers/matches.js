var _ = require('underscore'),
		Base = require('../rest-base-controller');

var User = Base.extend({
	dbServiceName: 'dbMatch',

  /**
   * override
   */
  post: function (opts, callback) {
    var data = opts.data,
        res = opts.res,
        players = {};


    // getting players
    _.each(data, function (value, key) {
      if (key.indexOf('player-') !== -1) {
        var playerNumber = key.split('player-')[1].split('-')[0]
        var playerKey = key.split('player-')[1].split('-')[1]

        players[playerNumber] = players[playerNumber] || {};
        players[playerNumber][playerKey] = value;

        delete data[key];
      }
    });

    data.lineup = {radiant: [], dire: []};

    // reduce the players
    _.each(players, function (player) {
      if (player.side == 'radiant') {
        data.lineup.radiant.push(player);
      } else {
        data.lineup.dire.push(player);
      }
    });

    // save all player
    var self = this;

    this.db.dbPlayer.addPlayers(players, data.matchID, function () {
      console.log('going:to:base');
      self.db.dbMatch.create(data, callback);
    });
  }
});


module.exports = User;