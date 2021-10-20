function Lion() {
	this.stomach = [];
}

Lion.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);
};