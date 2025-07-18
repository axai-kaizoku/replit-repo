const arr = [1, 0, 1, 1, 0, 1]

function findMaxConsecutiveOnes(nums) {
  const n = nums.length
  let max = 0
  let count = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      count = 0
    }
    if (count > max) {
      max = count
    }
  }
  return max
}

const ans = findMaxConsecutiveOnes(arr)
console.log(ans)
