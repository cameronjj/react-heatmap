var _ = require('lodash')
var input = require('./observationSample.json')
// var expectedOutput = require('./step3_parseDate.json')

var selectRelevantData = require('./script1_selectRelevantData')
var parseDate = require('./script2_parseDate')
var sortByUser = require('./script3_sortByUser')
var groupByMonth = require('./script4_groupByMonth')
var addZeros = require('./script5_addZeros')
var dictToArray = require('./script6_dictToArray')
var toFinalForm = require('./script7_toFinalForm')
var getTotal = require('./script4b_getTotal')


// var pipeline1 = _.flow([selectRelevantData, parseDate, sortByUser, groupByMonth, addZeros])
var pipeline1 = _.flow([selectRelevantData, parseDate, sortByUser, groupByMonth, addZeros, dictToArray, toFinalForm])
//var pipeline2 = _.flow([selectRelevantData, parseDate, sortByUser, getTotal])

var output = pipeline1(input)

//console.log(output)
console.log(JSON.stringify(output,null,' '))

module.exports = output
