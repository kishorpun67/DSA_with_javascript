

// let counter = 0;
// let num = 5;
// function recusion(num) {
//     if(counter > num) {
//         console.log(counter)
//         return true;
//     }
//     counter++;
//     recusion(num)
// }

//  recusion(5);
// console.log(reuslt);

function isSorted(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] > array[i + 1]) { 
            return false;
        }
    }
    return true;
}
let array = [2,3,1,4];
let counter = 0;
let temp = 0;
let i=0;
let j=1;
function sortArray(array) {
    if(isSorted(array)) {
        console.log(array); 
        return;
        // return array;
    }else if(array[counter] > array[counter + 1]) 
    {
        temp = array[counter]
        array[counter] = array[counter + 1];
        array[counter+1]= temp;
        counter = 0;
        sortArray(array);
    }else{
        counter ++;
        sortArray(array);
    }
 }
//   function sortArray(array) {
    
//     if(isSorted(array)) { 
//         mynewList = array;
//         console.log(mynewList);
//         return;
//     }else if(array[i] < array[j]) 
//     {
//         i++;
//         j++;
//         sortArray(array);
//     }else{
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         // [array[i], array[j]] = [array[j], array[i]]
//         i = 0;
//         j = 1;
//         sortArray(array);
//     }
//  }
  sortArray(array);
