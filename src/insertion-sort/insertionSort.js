const numbers = [7, 9, 255, 98, 4, 1, 0, 11, 64, 117, 44, 365, 666, 2]

function insertionSort(array){
    for(let i = 1; i < array.length; i++){
        let current = array[i]
        let previous = i - 1

        // Shifting the elements
        while(previous >= 0 && array[previous] > current){
            array[previous + 1] = array[previous]
            previous--
        }

        array[previous + 1] = current
    }

    return array
}

console.log(insertionSort(numbers))