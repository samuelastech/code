export function solution(str: string, ending: string): boolean {
    const startSlice = (str.length - ending.length)
    if (str.slice(startSlice) == ending) return true
    else return false
}

export function solution1(str: string, ending: string): boolean {
    return str.endsWith(ending);
}

console.log(solution('abcde', 'dm'))