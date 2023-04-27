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
  const [transactionData, setTransactionData] = useState([]); //отримання транзакцій

  useEffect(() => {
    dispatch(getCashflowStat(dateFilter)).then(data => {
      setTransactionData(data.payload);
    });
  }, [dateFilter, dispatch]);
console.log('cat', transactionData)
  if (transactionData?.length === 0) return;

  return (
    <div className={s.background_img}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Calendar onDate={setDateFilter} />
          <StatisticsNav />
          <ul className={s.expense_block}>
            {(typeof(transactionData)==='object')? (transactionData?.map(item => (
              <Item key={item.category} {...item} />
            ))):(<p className={s.error_mes}>You didn't have transaction on this period</p>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
