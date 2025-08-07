const arr = [2, 2, 1, 1, 1, 2, 2]

/**
 * Optimal
 * Moore's voting algorithm
 */
var majorityElement = function (nums) {
    let count = 0,
        el = 0
    const n = nums.length
    const n2 = n / 2

    for (let i = 0; i < n; i++) {
        if (count === 0) {
            count = 1
            el = nums[i]
        } else if (nums[i] === el) {
            count++
        } else {
            count--
        }
    }

    let count1 = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] == el) count1++
    }

    if (count1 > n2) {
        return el
    }

    return -1
}

/**
 * Hashing
 */
var majorityElement2 = function (nums) {
    let map = {}
    let n = nums.length
    let n2 = n / 2

    for (let i = 0; i < n; i++) {
        map[nums[i]] = 1
    }

    for (let i = 0; i < n; i++) {
        map[nums[i]]++
    }

    for (let num in map) {
        if (map[num] - 1 > n2) {
            return Number(num)
        }
    }

    return -1
}

console.log(majorityElement(arr))
