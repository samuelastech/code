let regex;

/**
 * Matching the start of a string
 */
regex = /^(a|e|i|o|u)/i;
console.log("'Samuel' starts with a vowel?", regex.test("Samuel"));
console.log("'Agora' starts with a vowel?", regex.test("Agora"));
console.log("\n");

/**
 * Matching the end of a string
 */
regex = /(a|e|i|o|u)$/i;
console.log("'Paranaue' ends with a vowel?", regex.test("Paranaue"));
console.log("'Militar' ends with a vowel?", regex.test("Militar"));
console.log("\n");

/**
 * Referencing a group \1 \2 \n
 */
regex = /^(a).*\1$/i;
console.log("'Ana' starts and ends with 'A'?", regex.test("Ana"));

regex = /^(a)(b).*\2$/i;
console.log("'Abnab' ends with 'B'?", regex.test("Abnab"));
console.log("\n");

/** Checking a number of characters \d{2} a{3} sa{n} */
regex = /a{4}/i;
console.log("'AAAA' repeats four times?", regex.test("AAAA"));
console.log("\n");