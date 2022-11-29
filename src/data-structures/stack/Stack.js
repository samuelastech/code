class Stack {
    constructor(){
        this.items = []
    }

    /**
     * Adds an element in the stack
     * @param {Any} item 
     * @returns {Any}
     */
    push = (item) => this.items.push(item)

    /**
     * Remove the last element
     * @returns {Any} the removed element
     */
    pop = () => this.items.pop()

    /**
     * Show the last element
     * @returns {Any}
     * @throws an error if the stack is empty
     */
    peek = () => {
        if(this.isEmpty())
            throw new Error("There's no element in the stack")

        const last = this.getSize() - 1
        return this.items[last]
    }

    /**
     * Returns the size of the stack
     * @returns {Number}
     */
    getSize = () => this.items.length

    /**
     * Says if the stack is empty
     * @returns {Boolean}
     */
    isEmpty = () => this.getSize() === 0
}