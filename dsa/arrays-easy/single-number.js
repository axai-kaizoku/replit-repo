/**
 * Every number is repeated, but one number is single
 * Find the number, which is single
 */

const arr = [5, 3, 2, 3, 1, 5, 1]

/**
 * Optimal
 * XOR (^)
 * [ 5 ^ 5 ^ 2 ^ 3 ^ 3 ^ 1 ^ 1]
 *     [ 0 ^ 2 ^ 0 ^ 0]
 *       [ 0 ^ 2 ] -> something XOR 0 is something
 *           2
 */
function findSingleNumber(arr) {
  const n = arr.length
  let xor = 0
  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i]
  }
  return xor
}

/**
 * Brute
 */
function findSingleNumber2(arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    let num = arr[i]
    let count = 0
    for (let j = 0; j < n; j++) {
      if (arr[j] === num) {
        count++
      }
    }
    if (count === 1) return num
  }
}

console.log(findSingleNumber(arr))
