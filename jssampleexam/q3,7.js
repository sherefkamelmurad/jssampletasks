function reverseArr(input) {
    var arr1 = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        arr1.push(input[i]);
    }
    return arr1;
}

var a = [3,5,7,8]
var b = reverseArr(a);