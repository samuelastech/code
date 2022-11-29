const numbers = [7, 9, 255, 98, 4, 1, 0, 11, 64, 117, 44, 365, 666, 2]

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {

        // Looking for the smallest value
        let smallest = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j
            }
        }

        // Swapping the elements
        if(smallest !== i){
            [array[i], array[smallest]] = [array[smallest], array[i]]
        }
    }

    return array
}

console.log(selectionSort(numbers))