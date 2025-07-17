class Solution {
    main(a, b) {
        // const res = this.findUnionBetter(a, b)
        const res = this.findUnion(a, b)
        return res
    }

    /**
     * Optimal solution
     */
    findUnion(a, b) {
        const n1 = a.length
        const n2 = b.length
        let i = 0,
            j = 0
        const unionArr = []
        while (i < n1 && j < n2) {
            if (a[i] < b[j]) {
                if (
                    unionArr.length === 0 ||
                    unionArr[unionArr.length - 1] !== a[i]
                ) {
                    unionArr.push(a[i])
                }
                i++
            } else if (b[j] < a[i]) {
                if (
                    unionArr.length === 0 ||
                    unionArr[unionArr.length - 1] !== b[j]
                ) {
                    unionArr.push(b[j])
                }
                j++
            } else {
                if (
                    unionArr.length === 0 ||
                    unionArr[unionArr.length - 1] !== a[i]
                ) {
                    unionArr.push(a[i])
                }
                i++
                j++
            }
        }

        while (i < n1) {
            if (
                unionArr.length === 0 ||
                unionArr[unionArr.length - 1] !== a[i]
            ) {
                unionArr.push(a[i])
            }
            i++
        }

        while (j < n2) {
            if (
                unionArr.length === 0 ||
                unionArr[unionArr.length - 1] !== b[j]
            ) {
                unionArr.push(b[j])
            }
            j++
        }

        return unionArr
    }

    /**
     * brute, better solution
     */
    findUnionBetter(a, b) {
        // your code here
        const temp = []
        for (let i = 0; i < a.length; i++) {
            if (!temp.includes(a[i])) {
                temp.push(a[i])
            }
        }
        for (let j = 0; j < b.length; j++) {
            if (!temp.includes(b[j])) {
                temp.push(b[j])
            }
        }
        this.insertionSort(temp)
        return temp
    }

    insertionSort(arr) {
        const n = arr.length
        for (let i = 0; i <= n - 1; i++) {
            let j = i
            while (j > 0 && arr[j - 1] > arr[j]) {
                this.swap(arr, j - 1, j)
                j--
            }
        }
    }

    swap(arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

const sol = new Solution()

const n1 = [1, 2, 2, 2, 3]
const n2 = [1, 2, 3, 4, 5, 6, 6]
console.log(sol.main(n1, n2))
