/**
 * topKFrequent
 */
var topK = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    let res = []
    for (let t = 0; t < k; t++) {
        let maxKey = null
        let maxVal = -Infinity

        for (let [key, val] of map) {
            if (val > maxVal && res.indexOf(key) === -1) {
                maxKey = key
                maxVal = val
            }
        }

        if (maxKey !== null) {
            res.push(maxKey)
        }
    }

    return res
}

var topKFrequent = function (nums, k) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    // console.log(obj)
    let res = []
    for (let t = 0; t < k; t++) {
        let maxKey = null
        let maxVal = -Infinity
        for (let key in obj) {
            if (obj[key] > maxVal && res.indexOf(Number(key)) === -1) {
                maxKey = Number(key)
                maxVal = obj[key]
            }
        }

        if (maxKey !== null) {
            res.push(maxKey)
        }
    }
    // console.log(res)
    return res
}

const arr = [1, 1, 1, 1, 2, 2, 3]
console.log(topK(arr, 2))
