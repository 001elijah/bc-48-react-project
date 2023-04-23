import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import s from './CategoryBoard.module.scss';
import { Calendar } from '../../DateInput/DateInput';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCashflowStat } from '../../../redux/operations/cashflowOperations';

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
export const Item = ({ id, date, category, sum }) => {
  return (
    <>
      <li key={id} className={s.wrapper_category}>
        <div className={s.expenses_items}>
          <p className={s.expense_category}> {category}</p>
          <p className={s.expense_sum}> -{sum} UAH</p>
        </div>
        <p className={s.expense_percent}> 9%</p>
      </li>
    </>
  );
};

export const CategoriesList = () => {
  const dispatch = useDispatch();
  const [dateFilter, setDateFilter] = useState(); //обрані дати
  const [transactionData, setTransactionData] = useState([]); //отримання транзакцій

  useEffect(() => {
    dispatch(getCashflowStat(dateFilter)).then(data =>{
      if(typeof(data.payload)==='object')
      setTransactionData(data.payload)
      else setTransactionData([]) }
    );
  }, [dateFilter, dispatch]);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Calendar onDate={setDateFilter} />
        <StatisticsNav />
        <ul>
        {(transactionData!==[]) ? (transactionData.map(item => (
            <Item key={item.id} {...item} />
            ))):('No transactions for this period')}       
        </ul>
      </div>
    </div>
  );
};