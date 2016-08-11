var _ = require('lodash')
//var input = require('./step5_groupObsByMonth.json')
//var expectedOutput = require('./step6_addZeros.json')
var emptyDict =
{
		"1":0,
		"2":0,
		"3":0,
		"4":0,
	  "5":0,
		"6":0,
		"7":0,
		"8":0,
		"9":0,
		"10":0,
		"11":0,
		"12":0

}

function process(input){
	// output = _.merge(emptyDict,input)
	// var output = input
	// console.log('input', input)

	var output = _.mapValues(input, (user, user_id) => {

        var firstMonth = _.min(_.map(_.keys(user),Number))
        var norm = _.mapKeys(user, (v, k) => {
                return k
        })
        var merged = _.assign({}, emptyDict, norm)
        return merged

    })
		return output

}

//var output = process(input)
//console.log(output)

//var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

//console.log(checkIfItIsCorrect)
module.exports = process

/*	var output = _.mapValues(input, function(o){
		var min = _.min(_.map(o, function(p, key) {
			var test = _.parseInt(key)
			return test;
		}))
		var max =  _.max(_.map(o, function(p, key) {
			var test = _.parseInt(key)
			return test;
		}))

		return min;
	})
*/
