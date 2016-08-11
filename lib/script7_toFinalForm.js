var _ = require('lodash')
//var input = require('./step7_obsCountToArray.json')
//var expectedOutput = require('./step8_toProperDict.json')

function process(input){
	var output = _.map(input, function(o, i) {
		var dict = { user_id: _.parseInt(i), observations: o }
		return dict;

	})

	return output
}

//var output = process(input)
//console.log(output)

//var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

//console.log(checkIfItIsCorrect)
module.exports = process