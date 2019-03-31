const { Constants } = require('../data/Constants');

exports.formatDescription = (title, description) => {
    let finalOutput = '';
    let isCodeBlock = title !== 'description';
    let titleLength = title.length;
    let dashesNumber = Constants.outputWidth - titleLength;
    let oneSideDushes = dashesNumber / 2;
    let isOddnumber = dashesNumber % 2 == 1;
    finalOutput = getDashes(oneSideDushes) + title + getDashes(isOddnumber ? oneSideDushes - 1 : oneSideDushes);
    finalOutput += "\n" + insertTextInBlock(description, isCodeBlock);
    return finalOutput;
}

function getDashes(count) {
    let result = "";
    for (let index = 0; index < count; index++) {
        result += "=";
    }
    return result;
}

function insertTextInBlock(text, isCodeBlock) {
    if (isCodeBlock) {
        return text;
    }
    let array = text.split(" ");
    let result = "   ";
    let rowLength = result.length;
    for (let index = 0; index < array.length; index++) {
        const word = array[index];
        if ((rowLength + word.length + 1) > Constants.outputWidth) {
            let spaces = getSpaces(Constants.outputWidth - 1 - rowLength);
            result = result + spaces + "\n";
            if (spaces.length == 0) {
                result += (" " + word);
                rowLength = 1 + word.length;
            } else {
                rowLength = 0 + word.length;
                result += word;
            }
        } else {
            result = result + " " + word;
            rowLength += (word.length + 1);
        }
    }
    return result;
}

function getSpaces(count) {
    let result = "";
    for (let index = 0; index < count; index++) {
        result += " ";
    }
    return result;
}