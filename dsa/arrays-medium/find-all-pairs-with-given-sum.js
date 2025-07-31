class Solution {
    allPairs(target, arr1, arr2) {
        // code here
        // console.log(target)
        // console.log(arr1)
        // console.log(arr2)
        const hashMap = new Map()
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] + arr2[j] === target) {
                    hashMap.set(arr1[i], arr2[j])
                }
            }
        }
        const ans = []
        for (let i = 0; i < hashMap.size; i++) {
            // ans[i] = [hashMap.keys()[i], hashMap.get(hashMap.keys()[i])]
            hashMap.get(i)
        }
        return ans
    }
}

const target = 9
const a = [1, 2, 4, 5, 7]
const b = [5, 6, 3, 4, 8]

const solution = new Solution()
console.log(solution.allPairs(target, a, b))
