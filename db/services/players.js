var _ = require('underscore'),
    async = require('async'),
    model = require('../schema/player'),
    Base = require('../base-service');

// define services of user
var Services = Base.extend({
  modelClass: model,

  addPlayers: function (players, id, callback) {
    var self = this,
        jobs = [];

    _.each(players, function (player) {
      jobs.push(function (cb) {
        player.matchID = id;
        self.create(player, cb);
      });
    });

    async.parallel(jobs, callback);
  }
});

/**
 * Expose
 */
module.exports = Services;