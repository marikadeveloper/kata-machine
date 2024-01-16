// My solution
export default function bs_list(haystack: number[], needle: number): boolean {
  // base case 1, needle not found
  if (haystack.length <= 1 && haystack[0] !== needle) {
    return false;
  }

  const middle = Math.floor(haystack.length / 2);

  // base case 2, the middle needle is the right one
  if (haystack[middle] === needle) {
    return true;
  }

  // recursive case
  if (haystack[middle] > needle) {
    // if the middle number is greater than needle, start searching the left part
    const left = haystack.slice(0, middle);
    return bs_list(left, needle);
  } else {
    // if the middle number is smaller than needle, start searching the right part
    const right = haystack.slice(middle);
    return bs_list(right, needle);
  }
}

// Instructor's solution
function bs_list_instructor(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}
