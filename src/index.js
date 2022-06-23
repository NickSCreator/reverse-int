module.exports = function reverse (n) {
	var string = n.toString()
	result = parseInt(string.split('').reverse().join(''))
	return result
}
