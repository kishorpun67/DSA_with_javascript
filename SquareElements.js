var array1  = [1,2,3,4];
var array2 = [1,9,4,12];

function isSquareCheck(array1, array2) {
    for (let i=0; i<array1.length; i++) { 
            let isSquareCheck = false;
        for (let j=0; j<array2.length; j++) {
            if(array1[i]*array1[i]  == array2[j]) { 
                isSquareCheck = true;
            }
            if( j === array2.length - 1) {
                if(!isSquareCheck) {
                    return false;
                }
            }
        }
    }
    return true;
}
// let result = isSquareCheck(array1, array2);
// console.log(result);


function checkSquare(array1, array2) {
    let map1 = {};
    let map2 = {};
    for(let item of array1) { 
        map1[item]=(map1[item]  || 0)+1;
    }

    for( let item1 of array2) { 
        map2[item1]=(map2[item1] || 0)+1;
    }
    for (let key in map1) {
        if(!map2[key * key]) {
            return false;
        }
        if(map1[key] !== map2[key*key])  {
            return false;
        }
    }
    return true;
}

let result = checkSquare(array1, array2)
console.log(result)