/**
 * Given two crystal balls that will break if dropped from high enough
 * distance, determine the exact spot in which it will break in the most
 * optimized way.
 *
 * The input is an array of falses, that at some point has a true, and from that
 * true, the values are all true
 *
 * Time complexity: O(sqrt(n))
 */
export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  // go forward 1 sqrt at a time
  for (let i = 0; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      // if a crack is found, do linear search from previous checkpoint
      return linear_search(breaks, i - jumpAmount, i);
    }
  }

  return -1;
}

function linear_search(array: boolean[], start: number, end: number): number {
  for (let i = start; i <= end; i++) {
    if (array[i]) return i;
  }

  return -1;
}
