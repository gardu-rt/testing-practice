import { capitalize } from "./capitalize.js";

test("hello to be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
