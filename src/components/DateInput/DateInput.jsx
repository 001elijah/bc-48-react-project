import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './DateInput.module.scss';
import iconSvg from '../StatisticsComponents/Svg';


// const months = {
//   0: 'January',
//   1: 'February',
//   2: 'March',
//   3: 'April',
//   4: 'May',
//   5: 'June',
//   6: 'July',
//   7: 'August',
//   8: 'September',
//   9: 'October',
//   10: 'November',
//   11: 'December',
// };

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ChangeInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.input_field} onClick={onClick} ref={ref}>
      {value}
      {iconSvg('calendar', '#ffffff', '20')}
    </button>
  ));
  // const MyContainer = ({ className, children }) => {
  //   return (
  //     <div style={{  background: "#216ba5", color: "#fff"}}>
      
  //       <CalendarContainer className={className}>

  //         <div style={{ position: "absolute"}}>{children}</div>
  //       </CalendarContainer>
  //     </div>
  //   );
  // }
  // const getYear = startDate.getFullYear();
  // const getMonth = months[startDate.getMonth()];

  // console.log(getMonth, getYear);
  return (
      <DatePicker
        dateFormat="MMMM, yyyy"
        //startDate //додати початок
        selected={startDate}
        onChange={date => setStartDate(date)}
        showMonthYearPicker
        customInput={<ChangeInput />}
        // calendar={<ChangeCalendar />}
        // onCalendarClose={getYear}
        wrapperClassName={s.calendar}
        // popperClassName
        popperClassName={s.popper}

        />
  );
};
