const arr = [3, 1, -2, -5, 2, -4]

/**
 * My approach
 * TC - 0(2N)
 * SC - 0(2)
 */
function reArrange(arr) {
  const pve = []
  const nve = []
  const n = arr.length
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      nve.push(arr[i])
    } else {
      pve.push(arr[i])
    }
  }

  const res = []
  for (let i = 0; i < pve.length; i++) {
    res.push(pve[i])
    for (let j = i; j < i + 1; j++) {
      res.push(nve[j])
    }
  }

  return res
}

/**
 * Optimal
 * TC - O(N)
 */
var rearrangeArray = function (nums) {
    const n = nums.length
    const res = [];
    let pveIndex = 0, nveIndex = 1
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            res[nveIndex] = nums[i]
            nveIndex += 2
        } else {
            res[pveIndex] = nums[i]
            pveIndex += 2
        }
    }

    return res
};

console.log(rearrangeArray(arr))
