var _ = require('lodash')
//var input = require('./step4_sortByUser.json')
//var expectedOutput = require('./step5_groupObsByMonth.json')

function process(input){
	var output = _.mapValues(input, function(value) {
		var getMonth = _.map(value, function(p){
			return p.month;
		})
		var group = _.groupBy(getMonth)
		var toDict = _.mapValues(group, function(o){
			return _.size(o);
		})
		return toDict;
	})

	return output
}

//var output = process(input)
//console.log(output)

//var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

//console.log(checkIfItIsCorrect)
module.exports = process
