# use-calendar

React 환경에서 달력 구현에 필요한 **최소 기능**만을 제공하는 오픈소스 라이브러리입니다.

## 설치

```bash
npm install use-calendar
```

## 사용 예시

```tsx
import { useCalendar } from "use-calendar";

function Calendar() {
  const { calendarWeeks, weekdays } = useCalendar({
    year: 2025,
    month: 5,
    options: {
      usePreviousMonth: false,
      useNextMonth: false,
    },
  });

  return (
    <table>
      <thead>
        <tr>
          {weekdays.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendarWeeks.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) =>
              day ? <td key={j}>{day.getDate()}</td> : <td key={j}></td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

## API

### `useCalendar({ year, month, options })`

- `year`: 연도 (예: 2025)
- `month`: 월 (1~12)
- `options` _(선택)_
  - `locale`: date-fns의 locale 객체 (기본값: 한국어)
  - `weekStartsOn`: 주 시작 요일 (0: 일요일, 1: 월요일, ...)
  - `usePreviousMonth`: 이전 달 날짜 표시 여부 (기본값: true)
  - `useNextMonth`: 다음 달 날짜 표시 여부 (기본값: true)

#### 반환값

- `calendarWeeks`: 2차원 배열(주별로 나뉜 날짜 배열, 각 요소는 Date 또는 null)
- `weekdays`: 요일 문자열 배열

### `useWeekdays({ locale, weekStartsOn })`

- 요일 문자열 배열을 반환하는 훅

## 개발 환경 및 스크립트

- **로컬 개발**:
  ```bash
  npm install
  npm run dev
  ```
- **빌드**:
  ```bash
  npm run build
  ```
- **테스트**:
  ```bash
  npm run test
  ```
- **Lint**:
  ```bash
  npm run lint
  ```

## 개발 규칙

- TypeScript 기반
- React 19, date-fns 4 사용
- PR 및 이슈 환영

## 기여

1. 이슈 등록 또는 PR 생성
2. 코드 작성 시 테스트 및 lint 통과 필수
