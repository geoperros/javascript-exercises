const palindromes = function (phrase) {
    let lower_p = phrase.toLowerCase();
    let arr_3 = [];
    let arr = lower_p.split("");
    let arr_2 = [];
    for ( let i = 0; arr.length > i; i++){
        if (arr[i] != "!" && arr[i] != " " && arr[i] != "," && arr[i] != "."){
            arr_3.push(arr[i])
        }
    }
    for (let i = arr_3.length; i > 0;){
        arr_2.push(arr_3[(i - 1)]);
        i--;
    }
    for (let i = 0; arr_3.length > i;){
        if (arr_3[i] != arr_2[i]){
            return false;
        }
        i++
    }
    return true;


};

// Do not edit below this line
module.exports = palindromes;
