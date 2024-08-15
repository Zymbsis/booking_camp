import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
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
    <div className={css.wrapper}>
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
        minDate={new Date()}
        onChange={handlePickerChange}
        toggleCalendarOnIconClick
        customInput={
          <input
            style={{ position: 'relative' }}
            type='text'
            {...register('bookingDate')}
          />
        }
      />
      {errors.bookingDate && (
        <span className={css.errorMessage}>{errors.bookingDate.message}</span>
      )}
    </div>
  );
};

export default Calendar;
