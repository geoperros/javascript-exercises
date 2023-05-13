const sumAll = function(val_1,val_2) {
    let num_1 = 0;
    let num_2 = 0;
    let sum_1 = 0;
    if (Number.isInteger(val_1 && val_2) && val_1 >= 0 && val_2 >= 0){
        if (val_1 < val_2){
            num_1 = val_1;
            num_2 = val_2;
        } else if(val_1 > val_2){
            num_1 = val_2;
            num_2 = val_1;
        }
        while (num_1 <= num_2){
            sum_1 = sum_1 + num_1;
            num_1++;
        }
        return sum_1;


    }else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
