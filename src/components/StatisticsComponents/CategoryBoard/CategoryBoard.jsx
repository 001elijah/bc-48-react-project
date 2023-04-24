import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import s from './CategoryBoard.module.scss';
import { Calendar } from '../../DateInput/DateInput';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCashflowStat } from '../../../redux/operations/cashflowOperations';
// import {Notify} from "notiflix"

// const data = [
//   {
//     id: 1,
//     date: '30.01.2023',
//     category: 'House',
//     sum: '200',
//   },
//   {
//     id: 2,
//     date: '25.01.2023',
//     category: 'Other ',
//     sum: '7000',
//   },
//   {
//     id: 3,
//     date: '15.01.2023',
//     category: 'Products ',
//     sum: '4000',
//   },
//   {
//     id: 4,
//     date: '08.01.2023',
//     category: 'Clothing and footwear',
//     sum: '800',
//   },
//   { id: 5, date: '05.01.2023', category: 'Other', sum: '1500' },
// ];

// const getExpensesList = getCashflowStatApi()
export const Item = ({ id, amount, category, percentage }) => {
  return (
    <>
      <li key={id} className={s.wrapper_category}>
        <div className={s.expenses_items}>
          <p className={s.expense_category}> {category}</p>
          <p className={s.expense_sum}> -{amount} UAH</p>
        </div>
        <p className={s.expense_percent}> {percentage}</p>
      </li>
    </>
  );
};

export const CategoriesList = () => {
  const dispatch = useDispatch();
  const [dateFilter, setDateFilter] = useState(); //обрані дати
  const [transactionData, setTransactionData] = useState(); //отримання транзакцій

  useEffect(() => {
    dispatch(getCashflowStat(dateFilter)).then(data => {
      if (typeof data.payload === 'object') {setTransactionData(data.payload)}
      else {setTransactionData([])
      // Notify.failure("You don't have transaction on this period")
    };
    });
  }, [dateFilter, dispatch]);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Calendar onDate={setDateFilter} />
        <StatisticsNav />
        <ul>
          {transactionData?.map(item => <Item key={item.id} {...item} />)}
        </ul>
      </div>
    </div>
  );
};
