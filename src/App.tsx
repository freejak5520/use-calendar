import { useState } from "react";
import { useCalendar } from "../lib/hooks";

import "./App.css";

function App() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(5);

  const { calendarWeeks, weekdays } = useCalendar({
    year,
    month,
    options: {
      usePreviousMonth: false,
      useNextMonth: false,
    },
  });
  return (
    <>
      <div>
        <button
          onClick={() => {
            if (month === 1) {
              setYear(year - 1);
              setMonth(12);
            } else {
              setMonth(month - 1);
            }
          }}
        >
          이전 달
        </button>
        <span>
          {year}년 {month}월
        </span>
        <button
          onClick={() => {
            if (month === 12) {
              setYear(year + 1);
              setMonth(1);
            } else {
              setMonth(month + 1);
            }
          }}
        >
          다음 달
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {weekdays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map((week) => (
            <tr key={week.join(",")}>
              {week.map((day, index) =>
                day ? (
                  <td key={day.toISOString()}>{day.getDate()}</td>
                ) : (
                  <td key={index}></td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
