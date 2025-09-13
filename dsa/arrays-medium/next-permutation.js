
/**
* brute approach is recursion
* tc - n! * n
*/

/**
 * Next permutation
 * optimal
 * tc - 0(3N)
 */
function nextPermutation(nums) {
  let index = -1
  let n = nums.length

  for (let i = n - 2; i >= 0; i++) {
    if (nums[i] < nums[i + 1]) {
      index = i
      break
    }
  }

  if (index === -1) {
    reverse(nums, 0, n - 1)
    return nums
  }

  for (let i = n - 1; i >= index; i--) {
    if (nums[i] > nums[index]) {
      swap(nums, i, index)
      break
    }
  }

  reverse(nums, index + 1, n - 1)
  return nums
}

function reverse(arr, start, end) {
  while (start < end) {
    swap(arr, start, end)
    start++
    end--
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(nextPermutation([1, 2, 3]))
