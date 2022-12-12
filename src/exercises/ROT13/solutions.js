const lowerCaseStart = 97 // 'a'
const lowerCaseBoundary = 122 // 'z'

const upperCaseStart = 65 // 'A'
const upperCaseBoundary = 90 // 'Z'

function rot13(str) {
    let rot13 = ''

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)

        // Lower
        if (str.charCodeAt(i) >= lowerCaseStart && str.charCodeAt(i) <= lowerCaseBoundary) {
            rot13 += newROT13Char(charCode, lowerCaseStart, lowerCaseBoundary)
        }

        // Upper
        else if (str.charCodeAt(i) >= upperCaseStart && str.charCodeAt(i) <= upperCaseBoundary) {
            rot13 += newROT13Char(charCode, upperCaseStart, upperCaseBoundary)
        }

        // Other
        else {
            rot13 += String.fromCharCode(charCode)
        }
    }

    return rot13
}

function newROT13Char(charCode, start, boundary) {
    const newChar = charCode + 13
    if (newChar > boundary) {
        const leftToWalk = 13 - (boundary - charCode)
        const character = start + leftToWalk - 1
        return String.fromCharCode(character)
    } else {
        return String.fromCharCode(newChar)
    }
}

console.log(rot13('EBG13 rknzcyr'))


/***
 * Best solution for ROT13
 */
function rot13(str) {
    return str.replace(/[a-z]/ig, function (x) {
        return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13 : -13));
    });
}