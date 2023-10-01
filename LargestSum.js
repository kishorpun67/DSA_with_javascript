
var array = [1,2,3,4,3,5,4,6,7,8];

var num = 4;

function largestSum(array, num) {
    if(num > array) {
        throw new Error('number is greater than array');
    } else {
        let max = 0;
        for (var i = 0; i < array.length - num+1; i++) {
            let temp = 0;
            for (var j = i; j < num+i; j++) { 
                temp += array[j];
            }
            if(temp > max) {
                max = temp;
            }
        }
        return max;
    }

}

var result = largestSum(array,num);
console.log(result);