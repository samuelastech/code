class Graph{
    constructor(){
        this.vertices = []
        this.edges = []
        this.numberOfEdges = 0
    }

    /**
     * Adds a node
     * @param {Any} vertex 
     */
    add = (vertex) => {
        this.vertices.push(vertex)
        this.edges[vertex] = []
    }

    /**
     * Removes a node
     * @param {Any} vertex
     */
    remove = (vertex) => {
        const i = this.vertices.indexOf(vertex)

        if(i === -1) return

        // Remove the node
        this.vertices.splice(i, 1)

        // Remove the edges related
        while(this.edges[vertex].length){
            const adjacent = this.edges[vertex].pop()
            this.removeEdge(adjacent, vertex)
        }
    }

    /**
     * Connects two existent nodes unidirectionally
     * @param {Any} vertex1 
     * @param {Any} vertex2 
     */
    addEdge = (vertex1, vertex2) => {
        this.edges[vertex1].push(vertex2)
        this.edges[vertex2].push(vertex1)
        this.numberOfEdges++
    }

    /**
     * Removes the connection between two nodes
     * @param {Any} vertex1 
     * @param {Any} vertex2 
     */
    removeEdge = (vertex1, vertex2) => {
        const index1 = this.#hasEdges(vertex1) ? this.edges[vertex1].indexOf(vertex2) : -1
        const index2 = this.#hasEdges(vertex2) ? this.edges[vertex2].indexOf(vertex1) : -1

        if(index1 >= 0){
            this.edges[vertex1].splice(index1, 1)
            this.numberOfEdges--
        }

        if(index2 >= 0){
            this.edges[vertex2].splice(index2, 1)
            this.numberOfEdges--
        }
    }

    /**
     * Verifies if a node has edges
     * @param {Any} vertex 
     * @returns {Boolean}
     */
    #hasEdges = (vertex) => this.edges[vertex] ? true : false

    /**
     * Returns the quantity of nodes
     * @returns {Number}
     */
    size = () => this.vertices.length

    /**
     * Returns the quantity of relations between nodes
     * @returns {Number}
     */
    relations = () => this.numberOfEdges

    /**
     * Prints the graph
     */
    print = () => {
        console.log(this.vertices.map(vertex => {
            `${vertex} => ${this.edges[vertex].join(', ').trim()}`
        }, this).join(' | '))
    }
}