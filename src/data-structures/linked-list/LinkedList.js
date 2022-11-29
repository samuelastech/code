const Node = require('./Node')

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    /**
     * Adds an element at the HEAD of the linked list
     * @param {Any} data 
     */
    insertFirst = (data) => {
        this.head = new Node(data, this.head)
        this.size++
    }

    /**
     * Adds an element at the TAIL of the linked list
     * @param {Any} data 
     */
    insertLast = (data) => {
        let node = new Node(data);
        let current

        // The list is empty
        if(!this.head){
            this.head = node
        }else{
            current = this.head
            
            while (current.next) {
                current = current.next
            }

            current.next = node
        }

        this.size++
    }

    /**
     * Adds an element in an index of the linked list
     * @param {Any} data 
     * @param {Number} index
     */
    insertAt = (data, index) => {
        // Inexistent index
        if(this.#isOutOfRange(index)) return

        // Trying to insert at the first
        if(index === 0) {
            this.insertFirst(data)
            return
        }

        const node = new Node(data)

        // Set current to first
        let current, previous
        current = this.head
        let count = 0

        while(count < index){
            previous = current // Node before the index
            count++
            current = current.next // Node after the index
        }

        node.next = current
        previous.next = node
    }

    /**
     * Remove a specific element of the linked list
     * @param {Number} index
     */
    removeAt = (index) => {
        if(this.#isOutOfRange(index)) return

        let current = this.head
        let previous
        let count = 0

        if(index === 0) {
            this.head = current.next
            return
        }

        while(count <= index){
            count++
            previous = current
            current = current.next
        }

        previous.next = current.next
        this.size--
        return
    }

    /**
     * Verify if a given index is out of range
     * @param {Number} index 
     * @returns {Boolean}
     */
    #isOutOfRange = (index) => {
        return index > 0 && index > this.size
    }

    /**
     * Gets an specific data of a given index
     * @param {Number} index
     */
    getAt = (index) => {
        let current = this.head
        let count = 0

        while(count <= index){
            if(count == index){
                return current.data
            }

            count++
            current = current.next // Going down the chain
        }

        return
    }

    /**
     * Prints the data of all elements in the linked list
     */
    printListData = () => {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

    /**
     * Clears everything
     */
    clearList = () => {
        this.head = null
        this.size = 0
    }
}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(450)
ll.insertFirst(120)
ll.insertFirst(388)

// ll.printListData()

console.log(ll.getAt(0))