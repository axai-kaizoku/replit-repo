/**
 * Leaders in the array
 * Brute
 */

const nums1 = [4, 7, 1, 0]
const nums2 = [10, 22, 12, 3, 0, 6]

function findLeaders(nums) {
  const n = nums.length
  const ans = []

  for (let i = 0; i < n; i++) {
    let leader = true

    for (let j = i + 1; j < n; j++) {
      if (nums[j] > nums[i]) {
        leader = false
        break
      }
    }

    if (leader) ans.push(nums[i])
  }

  return ans
}

/**
 * optimal
 */
function findLeaders1(nums) {
  const n = nums.length
  const ans = []
  let max = nums[n - 1]

  for (let i = n - 1; i >= 0; i--) {
    console.log(max)
    max = Math.max(max, nums[i])
    if (nums[i] >= max) {
      ans.push(nums[i])
    }
  }

  return ans
}

console.log(findLeaders(nums1))
