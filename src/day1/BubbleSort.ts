/**
 * Time complexity O(n^2)
 */
// My exotic solution
export default function bubble_sort(arr: number[]): void {
  let limit = arr.length;

  while (limit > 0) {
    for (let i = 0; i < limit; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    limit--;
  }
}

// Instructor's solution
function bubble_sort_instructor(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
