import s from './StatisticsBoard.module.scss';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  return (
    <DatePicker 
      dateFormat="MMMM, yyyy"
    selected={startDate} 
    onChange={date => setStartDate(date.getMonth)}
    showMonthYearPicker />
  );
};

const data = [
  {
    id: 1,
    date: '30.01.2023',
    comment: 'Cat food',
    category: 'House',
    sum: '200',
  },
  {
    id: 2,
    date: '25.01.2023',
    comment: 'Gift for DB',
    category: 'Other ',
    sum: '7000',
  },
  {
    id: 3,
    date: '15.01.2023',
    comment: 'Products',
    category: 'Products ',
    sum: '4000',
  },
  {
    id: 4,
    date: '08.01.2023',
    comment: 'Hat',
    category: 'Clothing and footwear',
    sum: '800',
  },
  { id: 5, date: '05.01.2023', comment: 'Bag', category: 'Other', sum: '1500' },
];
const staticNavList = ['Expenses', 'Categories'];

export const Item = ({ id, date, comment, category, sum }) => {
  return (
    <>
      <li key={id} className={s.wrapper}>
        <div>
          <p className={s.expense_date}>{date}</p>
          <p className={s.expense_comment}>{comment}</p>
          <p className={s.expense_category}> {category}</p>
        </div>
        <div>
          <p className={s.expense_sum}> {sum} UAH</p>
          <button>edit</button>
          <button>del</button>
        </div>
      </li>
    </>
  );
};

const ExpensesList = () => {
  return (
    <>
      <Example />
      <ul className={s.static_nav}>
        {staticNavList.map(nav => (
          <li className={s.static_nav__item}>
            <span className={s.static_nav__title}>{nav}</span>
          </li>
        ))}
      </ul>

      <ul>
        {data.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};
export default ExpensesList;
