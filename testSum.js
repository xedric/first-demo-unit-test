var assert = require('assert');

module.exports.testSum = function(sum) {
	var answer = sum(4, 5);
	assert(answer === 9, '4 + 5 != 9');
}

module.exports.testConcat = function(sum) {
	var answer = sum('a', 'b');
	assert(answer === 'ab', 'a + b != ab');
}