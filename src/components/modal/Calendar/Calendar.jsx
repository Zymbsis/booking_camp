import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from 'helpers';
import { Icon } from 'shared';

import clsx from 'clsx';
import css from './Calendar.module.css';

const Calendar = ({ errors, setValue, register }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handlePickerChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setValue('bookingDate', `${formatDate(start)}-${formatDate(end)}`);
  };

  return (
    <>
      <DatePicker
        className={clsx(css.picker, {
          [css.error]: errors.bookingDate,
        })}
        selected={startDate}
        startDate={startDate}
        selectsRange
        endDate={endDate}
        placeholderText='Booking date'
        showIcon
        dateFormat='dd.MM.yyyy'
        icon={
          <Icon
            iconId='icon-calendar'
            className={css.icon}
          />
        }
        toggleCalendarOnIconClick
        minDate={new Date()}
        onChange={handlePickerChange}
        customInput={
          <input
            type='text'
            {...register('bookingDate')}
          />
        }
      />
    </>
  );
};

export default Calendar;
