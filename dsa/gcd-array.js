/**
 * Find Greatest Common Divisor of array
 *
 */

const arr = [48, 36, 12, 9, 7, 42, 2]

function findGCD(arr) {
  let n = arr.length
  let mini = arr[0]
  let maxi = arr[0]
  for (let i = 0; i < n; i++) {
    if (arr[i] > mini) {
      mini = arr[i]
    }
    if (arr[i] < maxi) {
      maxi = arr[i]
    }
  }

  return gcd(maxi, mini)
}

function gcd(n1, n2) {
  while (n1 % n2 !== 0) {
    let r = n1 % n2
    n2 = n1
    r = n2
  }

  return n2
}

console.log(findGCD(arr))
