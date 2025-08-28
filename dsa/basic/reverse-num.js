/**
 * Palindrome
 */

const num = 121

var isPalindrome = function (x) {
  let og = x
  let reversed = 0
  while (x > 0) {
    let d = x % 10
    reversed = reversed * 10 + d
    x = Math.floor(x / 10)
  }

  return og === reversed
}

console.log(isPalindrome(num))
