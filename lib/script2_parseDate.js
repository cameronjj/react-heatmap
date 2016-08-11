var _ = require('lodash')
// var input = require('./step2b_projectedFakeData.json')
// var expectedOutput = require('./step3_parseDate.json')

function process(input){
	var output = _.map(input, function(o) {
			var split = _.split(o.observed_on, '-')
			o.year = _.parseInt(split[0])
			o.month = _.parseInt(split[1])
			o.day = _.parseInt(split[2])
			return o;
		 })

	return output
}

// var output = process(input)
//console.log(output)

// var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

// console.log(checkIfItIsCorrect)

module.exports = process
