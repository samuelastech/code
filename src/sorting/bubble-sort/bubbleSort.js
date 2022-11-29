const numbers = [7, 9, 255, 98, 4, 1, 0, 11, 64, 117, 44, 22, 13, 365, 666, 2]

function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        let resizedLength = array.length-i-1

        for(let j = 0; j < resizedLength; j++){
            // Swap
            if(array[j] > array[j + 1]){
                swap(array, j, j + 1)
            }
        }
    }

    return array
}

function swap(array, left, right){
    [array[left], array[right]] = [array[right], array[left]]
}

console.log(bubbleSort(numbers))