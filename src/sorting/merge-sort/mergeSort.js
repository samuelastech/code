const numbers = [7, 9, 255, 98, 4, 1, 0, 11, 64, 117, 44, 365, 666, 2]

class MergeSort{

    /**
     * Sort by using Merge Sort strategy
     * @param {Array} array to sort
     * @returns {Array} sorted one
     */
    topDown = (array) => {
        // Already sorted
        if(array.length <= 1) return array

        const middle = Math.floor(array.length / 2)
        const left = array.slice(0, middle)
        const right = array.slice(middle)

        return this.merge(this.topDown(left), this.topDown(right))
    }

    /**
     * Merge the divided arrays
     * @param {Array} left
     * @param {Array} right
     * @returns {Array} new concatenated array 
     */
    merge = (left, right) => {
        const array = []

        while(left.length && right.length){
            if(left[0] < right[0]){
                array.push(left.shift())
            }else{
                array.push(right.shift())
            }
        }

        return array
            .concat(left.slice())
            .concat(right.slice())
    }
}

const mergeSort = new MergeSort()
console.log(mergeSort.topDown(numbers))