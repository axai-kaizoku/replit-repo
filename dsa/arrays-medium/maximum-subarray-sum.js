const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

/**
 * Optimal
 */
var maxSubArray = function (nums) {
    const n = nums.length
    let maxi = nums[0]
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum += nums[i]

        if (sum > maxi) {
            maxi = sum
        }

        if (sum < 0) {
            sum = 0
        }
    }

    return maxi
}

/**
 * Brute and better
 */
var maxSubArray1 = function (nums) {
    const n = nums.length
    let maxi = nums[0]

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0
            for (let k = i; k <= j; k++) {
                sum += nums[k]
            }
            maxi = Math.max(sum, maxi)
        }
    }

    return maxi
}

console.log(maxSubArray(arr))
