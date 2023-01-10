function reverseWords(str) {
  return str
    .split(' ')
    .map(element => element
      ? element.split('').reverse().join('')
      : ''
    )
    .join(' ')
}

console.log(reverseWords('solution. rule! is should have avoid always'))