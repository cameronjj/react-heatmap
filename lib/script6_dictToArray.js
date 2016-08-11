var _ = require('lodash')
//var input = require('./step6_addZeros.json')
//var expectedOutput = require('./step7_obsCountToArray.json')

function process(input){
	var output = _.mapValues(input, function(o) {
		var toArray = _.map(o, function(p){
			return p;
		})
		return toArray;
	})

	return output
}

//var output = process(input)
//console.log(output)

//var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

//console.log(checkIfItIsCorrect)
module.exports = process