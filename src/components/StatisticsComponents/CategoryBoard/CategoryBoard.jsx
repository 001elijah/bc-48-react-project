import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import s from './CategoryBoard.module.scss';
import { Calendar } from '../../DateInput/DateInput';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCashflowStat } from '../../../redux/operations/cashflowOperations';
import shortid from 'shortid';
// import {Notify} from "notiflix"

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
          {transactionData?.map(item => <Item key={shortid.generate()} {...item} />)}
        </ul>
      </div>
    </div>
  );
};
