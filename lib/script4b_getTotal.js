var _ = require('lodash')
//var input = require('./step4_sortByUser.json')
//var expectedOutput = require('./step5b_getTotalForSorting.json')

function process(input){
	var output = _.mapValues(input, function(o) {
		return _.size(o);
	})

	return output
}

//var output = process(input)
//console.log(output)

//var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

//console.log(checkIfItIsCorrect)
module.exports = process