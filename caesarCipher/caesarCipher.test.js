import { caesarCipher } from "./caesarCipher.js";

test("xyz factor 3 equal abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("HeLLo wit factor 3 equal KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("Hello, World!, 3 equal Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
