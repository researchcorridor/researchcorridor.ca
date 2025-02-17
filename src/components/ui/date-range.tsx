import { cn, DateRangePicker, RangeValue } from '@heroui/react';
import {
  DateValue,
  getLocalTimeZone,
  parseDate,
  today,
} from '@internationalized/date';
import { useRef, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

interface DateRangeProps {
  onSearch: (dateRange: DateRangeState) => void;
  value?: DateRangeState;
}

export interface DateRangeState {
  start: Date | null;
  end: Date | null;
}

export default function DateRange({ onSearch }: DateRangeProps) {
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  const [value, setValue] = useState<RangeValue<DateValue> | undefined>();
  const [removed, setRemoved] = useState(false);

  const onChange = (dr: RangeValue<DateValue> | null) => {
    if (!dr) {
      setRemoved(true);
      setValue(undefined);
      onSearch({ start: null, end: null });
      setTimeout(() => setRemoved(false), 500);
      return;
    }

    setValue(dr);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      if (onSearch) {
        onSearch({
          start: dr.start.toDate(getLocalTimeZone()),
          end: new Date(
            dr.end.toDate(getLocalTimeZone()).setHours(23, 59, 59, 999),
          ),
        });
      }
    }, 1500);
  };

  return removed ? null : (
    <DateRangePicker
      selectorButtonPlacement="start"
      aria-label="Date Range"
      visibleMonths={2}
      onChange={onChange}
      className="max-w-[300px]"
      maxValue={today(getLocalTimeZone())}
      minValue={parseDate('2025-01-01')}
      endContent={
        <IoMdCloseCircleOutline
          className={cn(
            'hover:text-primary cursor-pointer rounded-full text-4xl',
            value?.end ? 'block' : 'hidden',
          )}
          onClick={() => onChange(null)}
        />
      }
    />
  );
}
