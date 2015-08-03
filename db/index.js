var _ = require('underscore'),
		userServices = require('./services/users'),
		matchServices = require('./services/matches'),
    playerServices = require('./services/players'),
		classes = {
			dbUser: userServices,
			dbMatch: matchServices,
      dbPlayer: playerServices
		},
		neededServices = {};

_.each(classes, function (item, key) {
	neededServices[key] = new item();
});

module.exports = neededServices;