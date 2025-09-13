/**
 * Optimal
 */
function longestConsecutive(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  let set = new Set();
  let longest = 1;

  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
  }

  for (let num of set) {
    if (!set.has(num - 1)) {
      let count = 1;
      let x = num;

      while (set.has(x + 1)) {
        x = x + 1;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
}

/**
 * Better
 *
 */
var longestConsecutive2 = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  inSort(nums);
  let longest = 1;
  let lastSmaller = -Infinity;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] - 1 === lastSmaller) {
      count++;
      lastSmaller = nums[i];
    } else if (nums[i] !== lastSmaller) {
      count = 1;
      lastSmaller = nums[i];
    }
    longest = Math.max(longest, count);
  }

  return longest;
};

function inSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      swap(nums, j, j - 1);
      j--;
    }
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 * Brute 0(n^2)
 */
var longestConsecutive1 = function (nums) {
  const n = nums.length;
  let longest = 1;
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    let count = 1;
    while (ls(nums, x + 1)) {
      x = x + 1;
      count++;
    }

    longest = Math.max(count, longest);
  }
  return longest;
};

function ls(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}

const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums1));
