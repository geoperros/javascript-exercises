const removeFromArray = function(input_ar, ...args) {
    new_Array = []
    input_ar.forEach((item) =>{
        if (!args.includes(item)){
            new_Array.push(item);
        }})
    return new_Array
};

// Do not edit below this line
module.exports = removeFromArray;
