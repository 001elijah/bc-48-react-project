import { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './DateInput.module.scss';
import iconSvg from '../StatisticsComponents/Svg';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Calendar = ({onDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  const ChangeInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.input_field} onClick={onClick} ref={ref}>
      {value}
      {iconSvg('calendar', '#ffffff', '20')}
    </button>
  ));

  const year = startDate.getFullYear();
  const month =startDate.getMonth()+1
  // const month_ =()=>{
  //   if(month<10){
  //     return ("0"+month)
  //   }
  // }

  useEffect(()=>{
      onDate({month, year})
  },[onDate, year, month])


  // console.log(getMonth, getYear);
  return (
      <DatePicker
        dateFormat="MMMM, yyyy"
        style={s.datePicker}
        // startDate= //додати початок
        selected={startDate}
        onChange={date => setStartDate(date)}
        showMonthYearPicker
        customInput={<ChangeInput />}
        wrapperClassName={s.calendar}
        />
  );
};
