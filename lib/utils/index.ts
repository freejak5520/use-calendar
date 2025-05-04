/**
 * 숫자 배열을 반환합니다.
 */
export const range = (start: number, stop?: number, step?: number) => {
  if (step === 0) {
    throw new Error("step은 0이 될 수 없습니다.");
  }

  if (stop == null) {
    // 파라미터가 하나만 주어질 경우 0 부터 주어진 숫자까지 배열을 반환합니다.
    stop = start;
    start = 0;
  }

  if (step == null) {
    step = 1;
  }

  console.log(start, stop, step);

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  const result = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};
