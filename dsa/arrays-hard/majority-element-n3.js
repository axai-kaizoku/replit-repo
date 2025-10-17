const arr = [2, 1, 1, 2, 2, 3, 1, 5, 6];

/**
 * Optimal
 * Moore's voting algo
 */
function majorityElementN3Optimal(nums) {
    const n = nums.length;
    let count1 = 0,
        count2 = 0;
    let el1;
    let el2;

    for (let i = 0; i < n; i++) {
        if (count1 === 0 && nums[i] !== el2) {
            count1 = 1;
            el1 = nums[i];
        } else if (count2 === 0 && nums[i] !== el1) {
            count2 = 1;
            el2 = nums[i];
        } else if (el1 === nums[i]) {
            count1++;
        } else if (el2 === nums[i]) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    console.log(el1, el2);

    count1 = 0;
    count2 = 0;
    for (let i = 0; i < n; i++) {
        if (el1 === nums[i]) count1++;
        if (el2 === nums[i]) count2++;
    }

    const mini = Math.floor(n / 3);
    const ls = [];

    if (count1 >= mini) ls.push(el1);
    if (count2 >= mini) ls.push(el2);

    return ls;
}

/**
 * Better
 * Hashing
 */
function majorityElementN3Better(nums) {
    const n = nums.length,
        ls = [],
        map = {},
        min = Math.floor(n / 3);

    for (let i = 0; i < n; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        if (map[nums[i]] === min) {
            ls.push(arr[i]);
        }
        if (ls.length === 2) {
            break;
        }
    }

    return ls;
}

/**
 * Brute
 */
function majorityElN3Brute(nums) {
    const n = nums.length;
    const n3 = Math.floor(nums.length / 3);
    const ls = [];
    for (let i = 0; i < n; i++) {
        if (ls.length === 0 || ls[0] !== nums[i]) {
            let count = 0;
            for (let j = 0; j < n; j++) {
                if (nums[i] === nums[j]) {
                    count++;
                }
            }
            if (count >= n3) {
                ls.push(nums[i]);
            }
        }
        if (ls.length === 2) break;
    }

    ls.sort((a, b) => a - b);

    return ls;
}

console.log(majorityElementN3Better(arr));
