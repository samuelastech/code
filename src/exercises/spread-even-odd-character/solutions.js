function processData(input) {
  let even = []
  let odd = []
  for (let i = 0; i < input.length; i++) {
    if (i % 2 == 0) even.push(input[i])
    else odd.push(input[i])
  }

  return [...even, '  ', ...odd].join('')
}

console.log(processData('Hacker'))