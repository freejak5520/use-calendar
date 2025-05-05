# use-calendar

An open-source library that provides only the **minimal features** needed to implement a calendar in React environments.

## Installation

```bash
npm install use-calendar
```

## Usage Example

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

- `year`: Year (e.g., 2025)
- `month`: Month (1~12)
- `options` _(optional)_
  - `locale`: Locale string (currently only "ko" and "en_US" are supported)
  - `weekStartsOn`: Start day of the week (0: Sunday, 1: Monday, ...)
  - `usePreviousMonth`: Show previous month's dates (default: true)
  - `useNextMonth`: Show next month's dates (default: true)

#### Returns

- `calendarWeeks`: 2D array (array of weeks, each element is a Date or null)
- `weekdays`: Array of weekday strings

### `useWeekdays({ locale, weekStartsOn })`

- A hook that returns an array of weekday strings

## Development Environment & Scripts

- **Local development**:
  ```bash
  npm install
  npm run dev
  ```
- **Build**:
  ```bash
  npm run build
  ```
- **Test**:
  ```bash
  npm run test
  ```
- **Lint**:
  ```bash
  npm run lint
  ```

## Development Rules

- TypeScript based
- Uses React 19, date-fns 4
- Support for React 18 and other versions is planned
- PRs and issues are welcome
