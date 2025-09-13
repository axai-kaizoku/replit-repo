class BinarySearch {
  main() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const target = 5
    const ans = this.binarySearch(arr, target)
    return ans
  }

  binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
      let mid = Math.floor((start + (end - start)) / 2)
      if (arr[mid] < target) {
        start = mid
      } else if (arr[mid] > target) {
        end = mid - 1
      } else {
        return mid
      }
    }
    return -1
  }

  searchInsert(nums, target) {
    const n = nums.length
    let start = 0
    let end = n - 1
    while (start <= end) {
      const mid = Math.floor((start + end) / 2)
      if (target < nums[mid]) {
        end = mid - 1
      } else if (target > nums[mid]) {
        start = mid + 1
      } else {
        return mid
      }
    }

    return start
  }
}

const sol = new BinarySearch()
const res = sol.main()
console.log(res)
