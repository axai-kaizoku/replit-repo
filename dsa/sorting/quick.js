class Solution{
  main() {
      const arr = [4,6,2,5,7,9,1,3];
      this.quickSort(arr,0,arr.length - 1);
      return arr;
  }

  quickSort(arr,low,high){
      if (low < high){
          const pIndex = this.partition(arr,low,high);
          this.quickSort(arr, low, pIndex - 1);
          this.quickSort(arr, pIndex + 1,high);
      }
  }

  partition(arr,low,high){
      const pivot = arr[low];
      let i = low;
      let j = high;
      while (i < j){
          while (arr[i] <= pivot && i >= low - 1){
              i++;
          }
          while (arr[j] > pivot && j <= high + 1){
              j--;
          }
          if (i < j) this.swap(arr,i,j);
      }
      this.swap(arr,low,j);
      return j;
  }

  swap(arr,i,j){
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }

}

const sol = new Solution();
const ans = sol.main()
console.log(ans);