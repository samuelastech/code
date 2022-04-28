class Graph{
    #nodes
    
    constructor(){
        this.#nodes = {}
    }

    /**
     * Create a graph node
     * The array gonna hold the edges
     * { node: [] }
     * 
     * @param {String} node
     */
    addNode(node){
        this.#nodes[node] = []
    }

    /**
     * Add a directed edge from one to another
     * 
     * @param {String} node 
     * @param {String} target 
     */
    addEdge(node, target){
        if(!this.#hasNodes(node, target))
            return false
        
        if(!this.#hasEdge(node, target))
            this.#nodes[node].push(target)
    }

    /**
     * Add a undirected edge between the nodes
     * 
     * @param {String} node1
     * @param {String} node2 
     */
    addUndirectedEdge(node1, node2){
        if(!this.#hasNodes(node1, node2))
            return false
        
        // Connecting the nodes
        if(!this.#hasEdge(node1, node2))
            this.#nodes[node1].push(node2)
        
        if(!this.#hasEdge(node2, node1))
            this.#nodes[node2].push(node1)
    }

    /**
     * Checks if nodes exist
     * 
     * @param {String} node1 
     * @param {String} node2 
     * @returns {Boolean}
     */
    #hasNodes(node1, node2){
        return this.#nodes[node1] || this.#nodes[node2]
    }

    /**
     * Checks if there's an directed edge between nodes
     * 
     * @param {String} node1 
     * @param {String} node2 
     * @returns {Boolean}
     */
    #hasEdge(node1, node2){
        return this.#nodes[node1].includes(node2)
    }
}