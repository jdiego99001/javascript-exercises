const reverseString = function(string) {
    let result = ""

    let stringSplit = string.split("")

    for (let i = (stringSplit.length - 1); i >= 0; i--) {
        result = result + stringSplit[i]
    }

    return result
};

// Do not edit below this line
module.exports = reverseString;
