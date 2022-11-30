/**
 * Returns the correspondent Fibonacci sequence
 * OBS: without using the Dynamic Programming idea it takes much longer
 * @param {Number} n 
 */
function fibonacci(n){
    if(n <= 2) return 1
    else return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(40))

/**
 * If you set 50 as input you'll see it's so much slow
 * DON'T DO THAT!
 * console.log(fibonacci(50))
 */

// =======================================================

/**
 * Returns the correspondent Fibonacci sequence
 * OBS: it uses the Dynamic Programming idea
 * @param {Number} n
 * @param {Array} prev already calculated numbers
 */
function dynamicFibonacci(n, prev = []){
    if(prev[n] != null) return prev[n]

    let result

    if(n <= 2){
        result = 1
    } else {
        result = dynamicFibonacci(n - 1, prev) + dynamicFibonacci(n - 2, prev)
    }

    prev[n] = result
    return result
}

console.log(dynamicFibonacci(100))