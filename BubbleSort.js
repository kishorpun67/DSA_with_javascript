let array = [8,2,7,1,3,6,4,5];

function bubbleSort(array) {
    let temp =0;
    for (var i = 0; i < array.length; i++) {
        let isSwapped;
        for (var j = 0; j < array.length-i; j++) { 
            if(array[j] > array[j+1]) {
                temp = array[j]
                array[j] = array[j+1];
                array[j+1] = temp;
                isSwapped = true;
            }
            // console.log(j)
        }
        console.log(i)
        if(!isSwapped) {
            break;
        }
    }
    console.log(array)
    return array;
}
 bubbleSort(array) 
