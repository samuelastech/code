class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    /**
     * Takes a key and hash it
     * @param {String} key 
     * @returns {Number}
     */
    hash = (key) => {
        let total = 0
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    /**
     * Stores a value with a customized key
     * @param {String} key 
     * @param {Any} value 
     */
    set = (key, value) => {
        const index = this.hash(key)
        this.table[index] = value
    }

    /**
     * Get a value by key
     * @param {String} key 
     * @returns {Any} value that is stores
     */
    get = (key) => {
        const index = this.hash(key)
        return this.table[index]
    }

    /**
     * Remove an element by key
     * @param {String} key 
     */
    remove = (key) => {
        const index = this.hash(key)
        this.table[index] = undefined
    }

    /**
     * Shows the elements and its encoded keys
     */
    display = () => {
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i, this.table[i])
            }            
        }
    }
}

const table = new HashTable(50)