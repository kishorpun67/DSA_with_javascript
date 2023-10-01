// checking sum zero problem 
const data = [-5,-4, -3, -2, 0, 2, 4, 6, 8];
function getSumPairSzero(array) {
    for(let number of array) {
        for(let i = 1; i<array.length; i++) {
            if(number + array[i] === 0) {
                // console.log(number , array[i])
                return[number , array[i]];
            }
        }
    }
}
// time complexity is Object(n^2)
 
function getSumPairSzeros(data) {
    var first = 0;
    var last = data.length -1;
    var i = 1;
    while(first < last) {
        console.log(i)
        // console.log('tst')
        var sum = data[first]+data[last];
        if(sum === 0) {
            return [data[first], data[last]];
        }else if(sum > 0) {
            last--;
        }else {
            first++;
        }
        i++;
    }
}
var result = getSumPairSzeros(data);
console.log(result)
// this complexity is O(n)



