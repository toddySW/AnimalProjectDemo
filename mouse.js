function Mouse(name) {
	this.name = name;
}

Mouse.prototype.run = function() {
	console.log('running....');
};

Mouse.prototype.jump = function() {
	console.log('jumping....');
};