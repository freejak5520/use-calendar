import { expect, test } from "vitest";
import { range } from "./index";

test("range(0, 10)는 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]을 반환해야 합니다", () => {
  expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
test("range(4)는 [0, 1, 2, 3]을 반환해야 합니다", () => {
  expect(range(4)).toEqual([0, 1, 2, 3]);
});
test("range(3, 6)은 [3, 4, 5]을 반환해야 합니다", () => {
  expect(range(3, 6)).toEqual([3, 4, 5]);
});
test("range(0, 10, 2)는 [0, 2, 4, 6, 8]을 반환해야 합니다", () => {
  expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
});
test("range(10, 0, -1)은 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]을 반환해야 합니다", () => {
  expect(range(10, 0, -1)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});
test("range(8, 2, -2)는 [8, 6, 4]을 반환해야 합니다", () => {
  expect(range(8, 2, -2)).toEqual([8, 6, 4]);
});
test("range(8, 2)는 []을 반환해야 합니다", () => {
  expect(range(8, 2)).toEqual([]);
});
test("range(8, 2, 2)는 []을 반환해야 합니다", () => {
  expect(range(8, 2, 2)).toEqual([]);
});
test("range(1, 5, -1)는 []을 반환해야 합니다", () => {
  expect(range(1, 5, -1)).toEqual([]);
});
test("range(1, 5, -2)는 []을 반환해야 합니다", () => {
  expect(range(1, 5, -2)).toEqual([]);
});
test("range(-3, 2)는 [-3, -2, -1, 0, 1]을 반환해야 합니다", () => {
  expect(range(-3, 2)).toEqual([-3, -2, -1, 0, 1]);
});
test("range(-3, 2, 2)는 [-3, -1, 1]을 반환해야 합니다", () => {
  expect(range(-3, 2, 2)).toEqual([-3, -1, 1]);
});
test("range(-1, -5, -1)는 [-1, -2, -3, -4]를 반환해야 합니다", () => {
  expect(range(-1, -5, -1)).toEqual([-1, -2, -3, -4]);
});
test("range(1, 5, 0)는 예외를 발생시켜야 합니다", () => {
  expect(() => range(1, 5, 0)).toThrow();
});
