import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import s from './SelectData.module.scss';

export const SelectData = () => {
  let date = Date.now();
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;

  let excludeDate = date + month;

  return (
    <DatePicker
      className={s.react}
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="MM/yyyy"
      // placeholder="asdsad"
      showMonthYearPicker
      excludeDates={[
        excludeDate,
        excludeDate + month,
        excludeDate + 2 * month,
        excludeDate + 3 * month,
        excludeDate + 4 * month,
        excludeDate + 5 * month,
        excludeDate + 6 * month,
        excludeDate + 7 * month,
        excludeDate + 8 * month,
      ]}
    />
  );
};
