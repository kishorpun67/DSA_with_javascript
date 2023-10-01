
let test = [8,2,7,1,3,6,4,5];

function selectionSort(array) {
    for(i = 0; i < array.length; i++) {
        let temp;
        let midIndex = i;
        for(j = i+1; j < array.length; j++) {
            if(array[midIndex] > array[j]) { 
                midIndex = j;
               
            }
        }
        if(midIndex !==i) {
            temp =array[i];
            array[i] = array[midIndex];
            array[midIndex] = temp
        }
    }
    console.log(array)
    return;
}

selectionSort(test)

