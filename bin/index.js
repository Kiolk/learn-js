#!/usr/bin/env node

var programm = require('commander');
var operators = require('../src/jsinfo/operators/Assignment');
var stringFormater = require('../src/utils/StringFormatUtil');
var { Constants } = require('../src/data/Constants');

programm
    .option('-o, --operator [type]', "Operator help get basic information about JS operator")
    .parse(process.argv);

if (programm.operator) printArticle("operators", programm.operator, operators)

function printArticle(chapter, value, stack) {
    const description = stack[chapter];
    const operatorArticles = description[value];
    if (!operatorArticles) {
        console.log(`Inputed parameter \'${value}\' not found ${Constants.infoMessages.sorrySmile}`);
        return;
    }
    let articleTopics = Object.keys(operatorArticles);
    articleTopics.forEach(element => {
        console.log(stringFormater.formatDescription(element, operatorArticles[element]));
    });
}



