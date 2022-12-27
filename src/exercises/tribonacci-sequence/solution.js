function tribonacci(signature, n) {
    if (!n) return []
    if (n < 3) {
        while (signature.length != n) {
            signature.pop()
        }

        return signature
    }

    while(signature.length < n){
        const last = signature.length - 1
        const sum = signature[last] + signature[last - 1] + signature[last - 2]
        signature.push(sum)
    }

    return signature
}

console.log(tribonacci([1,1,1], 1))

