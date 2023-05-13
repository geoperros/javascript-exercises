const leapYears = function(input_year) {
    if (input_year % 4 == 0) {
        if (input_year % 100 == 0 && input_year % 400 ==0){
            return true;
        } else if (input_year % 100 == 0){
            return false;
        } else {
            return true;
        }


    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
