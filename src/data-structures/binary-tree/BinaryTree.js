class BinaryTree {
    constructor(){
        this.root = null
    }

    add = (data) => {
        const node = new Node(data)

        if(!this.root){
            this.root = node
        }else{
            this.insert(node)
        }
    }

    insert = (node) => {
        let current = this.root

        while(current){
            if (node.data < current.data) {
                if(!current.left){
                    current.left = node
                    break
                }

                current = current.left
            } else if (node.data > current.data) {
                if(!current.right){
                    current.right = node
                    break
                }

                current = current.right
            } else {
                break
            }
        }
    }
}