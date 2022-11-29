class Queue {
    constructor(){
        /* Using the built-in array to hold the items */
        this.items = []
    }

    /**
     * Adds an element to the queue
     * @param {Any} item
     */
    enqueue = (item) => this.items.push(item)

    /**
     * Removes the first element of the queue
     * @returns {Any} the removed element
     */
    dequeue = () => this.items.shift()

    /**
     * Shows the first element of the queue without removing it
     * @returns {Any}
     * @throws an error if there's no item in the queue
     */
    peek = () => {
        if(this.isEmpty()) 
            throw new Error("There's no element in this queue")

        return this.items[0]
    }

    /**
     * Returns the size of the queue
     * @returns {Number}
     */
    getSize = () => this.items.length

    /**
     * Verify if the queue is empty
     * @returns {Boolean} 
     */
    isEmpty = () => this.getSize() === 0;
}

const myQueue = new Queue()

/** Adding some people */
myQueue.enqueue('Samuel')
myQueue.enqueue('Neymar')
myQueue.enqueue('Danilo')
myQueue.enqueue('Marquinhos')
console.log('The first one: ' + myQueue.peek())

const finished = myQueue.dequeue()
console.log(finished + ' has left')
console.log('New first one: ' + myQueue.peek())

console.log('Is the queue empty? ' + myQueue.isEmpty())

console.log('Size of the queue: ' + myQueue.getSize())

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

console.log('Size of the queue: ' + myQueue.getSize())
console.log('Is the queue empty? ' + myQueue.isEmpty())
console.log(myQueue.peek()) // Must throws an error