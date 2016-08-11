var _ = require('lodash')
// var input = require('./step1_raw.json')
// var expectedOutput = require('./step2_projected.json')

//This function uses map to get particular pieces of data
//Remove gets rid of the observations with a null date
function process(input){
	var output = _.remove(_.map(input, function(o) {
			var user_id = o.user_id
			var observed_on = o.observed_on
			return {user_id, observed_on};
		}), function(n){
			return n.observed_on !== null;
		})

	return output
}

// var output = process(input)

// var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

// console.log(checkIfItIsCorrect)

module.exports = process
