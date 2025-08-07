export function analyzeArray(arr) {
  let average = arr.reduce((total, num) => total + num, 0) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  return { average, min, max, length };
}
