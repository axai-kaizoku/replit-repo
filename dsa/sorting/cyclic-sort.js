const arr = [3, 2, 4, 1, 0]
/**
 * This is used for [0... n-1] based arrays
 */
function cyclicSort(nums) {
  const n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] !== nums[nums[i]]) {
      swap(nums, i, nums[i])
    } else {
      i++
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

cyclicSort(arr)
console.log(arr)
