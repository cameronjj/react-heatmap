var _ = require('lodash')
//var input = require('./step3_parseDate.json')
//var expectedOutput = require('./step4_sortByUser.json')

function process(input){
	var output = _.groupBy(input, function(o) {
		return o.user_id;
	})

	return output
}

//var output = process(input)
//console.log(output)

//var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

//console.log(checkIfItIsCorrect)

module.exports = process
