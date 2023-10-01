var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

function divideConquer(array, num) {
    if(num > array.length) {
        return false;
        throw new Error('Number is greater than array length');
    }
    let min = 0 ;
    let max = array.length -1;
    while (min <= max) { 
        let midIndex = Math.floor( (min + max) /2);
        if(array[midIndex] == num) {
            return midIndex;
        }else if(array[midIndex] > num) {
            max = midIndex-1
        } else {
            min = midIndex +1;
        }
    }

}
var result  = divideConquer(array, 18);
console.log(result);