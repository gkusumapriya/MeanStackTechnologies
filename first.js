var arguments = process.argv

function add(a, b) {

	// To extract number from string
	return parseInt(a)+parseInt(b)
}

var sum = add(arguments[2], arguments[3])

console.log("Addition is ", sum)
