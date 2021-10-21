function Horse() {
}

Horse.prototype.run = function() {
	console.log('running...');
};

Horse.prototype.jump = function() {
	console.log('jumping....');
};

module.export = Horse;