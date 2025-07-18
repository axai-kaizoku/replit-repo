/**
 * GCD
 * (greatest common divisor of two numbers)
 */
function gcd(n1, n2) {
  while (n1 % n2 !== 0) {
    let r = n1 % n2
    n1 = n2
    n2 = r
  }
  return n2
}

/**
 * LCM
 * (least common multiplier of two numbers)
 */
function lcm(n1, n2) {
  return (n1 * n2) / gcd(n1, n2)
}

console.log(lcm(48, 36))
