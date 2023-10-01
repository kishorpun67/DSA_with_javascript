
var array = [1,1,2,2,2,3,4,4,5,6,7,8,8];

function checkUniqueNumber(array) {
    if (array.length > 0) {
        var i = 0;
        for (var j = 0; j < array.length; j++) {
            if(array[i] != array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return array;
    }

}

var result = checkUniqueNumber(array);
console.log(result)


