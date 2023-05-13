const repeatString = function(word, times) {
    if (times < 0){
        return "ERROR"

    }else{
        let result = (word.repeat(times))
        return result
    }
};

// Do not edit below this line
module.exports = repeatString;
