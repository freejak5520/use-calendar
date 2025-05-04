import {
  addDays,
  endOfMonth,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { enUS, ko } from "date-fns/locale";
import { useMemo } from "react";
import { range } from "../utils";

type Locale = "ko" | "en_US";

type WeekdaysOptions = {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

type CalendarOptions = WeekdaysOptions & {
  usePreviousMonth?: boolean;
  useNextMonth?: boolean;
};

const LOCALE_MAP = {
  ko: ko,
  en_US: enUS,
} as const;

const getLocale = (locale: Locale) => {
  return LOCALE_MAP[locale];
};

/**
 * locale에 따라 요일 배열을 반환하는 훅
 */
export function useWeekdays({
  locale = "ko",
  weekStartsOn = 0,
}: WeekdaysOptions = {}) {
  return useMemo(() => {
    const fnsLocale = getLocale(locale);
    const baseDate = startOfWeek(new Date(), {
      locale: fnsLocale,
      weekStartsOn,
    });
    return Array.from({ length: 7 }).map((_, i) =>
      format(addDays(baseDate, i), "EEEEEE", { locale: fnsLocale })
    );
  }, [locale, weekStartsOn]);
}

/**
 * 달력 구현을 위한 데이터를 반환합니다.
 */
export const useCalendar = ({
  year,
  month,
  options = {},
}: {
  year: number;
  month: number;
  options?: CalendarOptions;
}) => {
  const {
    locale = "ko",
    weekStartsOn = 0,
    usePreviousMonth = true,
    useNextMonth = true,
  } = options;

  const monthFirstDay: Date = startOfMonth(new Date(year, month - 1, 1));
  const monthLastDay: Date = endOfMonth(new Date(year, month - 1, 1));

  const days: (Date | null)[] = [];

  const firstDayOfWeek = monthFirstDay.getDay();
  const lastDayOfWeek = monthLastDay.getDay();

  const paddingDays = firstDayOfWeek;
  const paddingDaysLast = 6 - lastDayOfWeek;

  range(0, firstDayOfWeek).forEach((i) => {
    if (usePreviousMonth) {
      days.push(addDays(monthFirstDay, -paddingDays + i));
    } else {
      days.push(null);
    }
  });

  range(0, monthLastDay.getDate()).forEach((i) => {
    days.push(addDays(monthFirstDay, i));
  });

  range(0, paddingDaysLast).forEach((i) => {
    if (useNextMonth) {
      days.push(addDays(monthLastDay, i + 1));
    } else {
      days.push(null);
    }
  });

  const chunk = (array: (Date | null)[], size: number) => {
    const chunks: (Date | null)[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const weeks = chunk(days, 7);
  const weekdays = useWeekdays({ locale, weekStartsOn });

  return { calendarWeeks: weeks, weekdays };
};
