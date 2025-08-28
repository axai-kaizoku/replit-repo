/**
 * topKFrequent
 */
var topKFrequent = function (nums, k) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    console.log(obj)
    let res = []
    let max = 0
    for (let num in obj) {
        max = Math.max(obj[num], obj[num] - 1)
        console.log(max, num)
        if (res.length !== k) {
            res.push(num)
        }
    }
    console.log(res)
    // return res
}

const arr = [1, 1, 1, 2, 2, 3]
console.log(topKFrequent(arr))
