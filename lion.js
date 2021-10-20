function Lion() {
	this.stomach = [];
}

Lion.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);
};

Lion.prototype.sleep = function() {
	console.log('zzzz');
};

module.export = Lion;