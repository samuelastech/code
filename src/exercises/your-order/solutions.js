function order(words) {
  words = words.split(' ')
  let newText = []

  // Each word
  for (let i = 0; i < words.length; i++) {
    // Each letter
    for (let j = 0; j < words[i].length; j++) {
      if (!+words[i][j]) continue // Not a number
      else {
        let index = +words[i][j] - 1
        newText[index] = words[i]
        break
      }
    }
  }

  return newText.join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))