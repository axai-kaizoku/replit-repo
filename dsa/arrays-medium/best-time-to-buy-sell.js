const arr = [7, 1, 5, 3, 6, 4]

/**
 * Optimal
 * Dynamic programming
 */
var maxProfit = function (prices) {
    const n = prices.length
    let mini = prices[0]
    let profit = 0

    for (let i = 0; i < n; i++) {
        let cost = prices[i] - mini
        profit = Math.max(profit, cost)
        mini = Math.min(mini, prices[i])
    }

    return profit
}

console.log(maxProfit(arr))
