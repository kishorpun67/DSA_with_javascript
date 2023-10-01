
let array = [1, 2, 3, 4, 5, 6, 7]
let data = array.indexOf('2');
console.log(data)
let counter =0;
function findOdd(array) {
    let result = [];
    function helperRecursive(array) { 
        if(counter >= array.length) {
            console.log(array)
            return;
        }
        if(array.length === 0){
            console.log(result)
            return 0;
        }else if(array[counter]%2 !== 0) {
            result.push(array[counter])
        }
        counter++;
        helperRecursive(array)
    }
    helperRecursive(array)
    console.log(result)
    return ;

}

(findOdd(array))


