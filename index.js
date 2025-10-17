const arr1 = [1, 2, 3];
const arr2 = [2, 5, 6];
const a1 = 3;
const a2 = 3;

function getSortedArray(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

getSortedArray(arr1, a1, arr2, a2);

console.log(arr1);
