import { renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import { useCalendar } from ".";

/**
 * @vitest-environment happy-dom
 */
test("loads and displays greeting", async () => {
  const { result } = renderHook(() => useCalendar({ year: 2025, month: 5 }));
  expect(result.current.weekdays).toEqual([
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
  ]);
});
