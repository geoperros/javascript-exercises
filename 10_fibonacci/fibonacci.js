const fibonacci = function(num) {
    let num_int =Number(num);
    if (num_int < 0){
        return "OOPS"
    }
    let fibo = [0,1]
    for (let i = 2; i - 1 < num_int;){
        if (num_int == 0){
            return 0
        }else if(num_int == 1){
            return 1
        }else{
            fibo.push(fibo[i-1]+fibo[i-2])
        }
        i++
    }
    return fibo[num_int]

};

// Do not edit below this line
module.exports = fibonacci;
