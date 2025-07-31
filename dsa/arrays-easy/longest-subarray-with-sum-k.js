const arr = [10, 5, 2, 7, 1, 9]
// const arr = [2, 0, 1, -1, -1, 0, 0, 3]
const k = 15

/**
 * Optimal solution
 *  - 2 pointer
 *  - Sliding window approach
 * tc - 2n
 * sc - 1
 */
function findLongestSubArray(arr, k) {
   const n = arr.length
   let left = 0,
      right = 0
   let sum = arr[0]
   let maxLen = 0
   while (right < n) {
      while (left <= right && sum > k) {
         sum = sum - arr[left]
         left++
      }
      if (sum === k) {
         maxLen = Math.max(maxLen, right - left + 1)
      }

      right++
      if (right < n) {
         sum += arr[right]
      }
   }
   return maxLen
}

/**
 * Better
 * Hashing
 * TC - n2
 * SC - n
 */
function findLongestSubArray2(arr, k) {
   const n = arr.length
   const preSumMap = new Map()
   let sum = 0
   let maxLen = 0

   for (let i = 0; i < n; i++) {
      sum += arr[i]

      if (sum === k) {
         maxLen = Math.max(maxLen, i + 1)
      }

      let rem = sum - k
      if (preSumMap.has(rem)) {
         const len = i - preSumMap.get(rem)
         maxLen = Math.max(maxLen, len)
      }

      if (!preSumMap.has(sum)) {
         preSumMap.set(sum, i)
      }
   }

   return maxLen
}

/**
 * Brute force
 * tc - n2
 */
function findLongestSubArray1(arr, k) {
   const n = arr.length
   let len = 0
   for (let i = 0; i < n; i++) {
      let s = 0
      for (let j = i; j < n; j++) {
         s += arr[j]
         if (s === k) {
            len = Math.max(len, j - i + 1)
         }
      }
   }

   return len
}

const ans = findLongestSubArray(arr, k)
console.log(ans)
