export function caesarCipher(str, n) {
  const mapLow = getLower();
  const mapUp = getUpper();

  const low = "abcdefghijklmnopqrstuvwxyz";
  const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";

  for (const char of str) {
    if (mapLow.has(char)) {
      let index = mapLow.get(char);
      if (index + n >= low.length) {
        index -= low.length;
      }
      result += low[index + n];
    } else if (mapUp.has(char)) {
      let index = mapUp.get(char);
      if (index + n >= upp.length) {
        index -= upp.length;
      }
      result += upp[index + n];
    } else {
      result += char;
    }
  }

  return result;
}

function getLower() {
  const map = new Map();
  const chars = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < chars.length; i++) {
    map.set(chars[i], i);
  }
  return map;
}

function getUpper() {
  const map = new Map();
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < chars.length; i++) {
    map.set(chars[i], i);
  }
  return map;
}
