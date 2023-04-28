import s from './ExpensesBoard.module.scss';
import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import { useDispatch } from 'react-redux';
import { PopUp } from '../PopUp/PopUp';
import { useEffect, useState } from 'react';
import { Calendar } from '../../DateInput/DateInput';
import { getListOfTransactions } from '../../../redux/operations/cashflowOperations';
import { Item } from './ExpenseBoardItem';
import { getListOfCategory } from '../../../redux/operations/categoriesOperations';

export const ExpensesList = () => {
  const [popupActive, setPopupActive] = useState(false); //активація модального
  const [dataIn, setDataIn] = useState(''); //данні по обраній транзакції
  const [dateFilter, setDateFilter] = useState(''); //обрані дати
  const [transactionData, setTransactionData] = useState([]); //отримання транзакцій

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfCategory());
  });

  useEffect(() => {
    dispatch(getListOfTransactions(dateFilter)).then(data => {
      setTransactionData(data.payload);
    });
  }, [dateFilter, dispatch, popupActive]);

  // console.log('on board', transactionData);

  if (transactionData?.length === 0) return;

  // console.log('board');

  return (
    // <div className={s.background_img}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Calendar onDate={setDateFilter} />
          <StatisticsNav />
          <ul className={s.expense_block}>
            {typeof transactionData === 'object' ? (
              transactionData?.map(item => (
                <Item
                  key={item._id}
                  {...item}
                  setActive={setPopupActive}
                  setData={setDataIn}
                />
              ))
            ) : (
              <p className={s.error_mes}>
                You didn't have transaction on this period
              </p>
            )}
          </ul>
          {popupActive && (
            <PopUp
              isActive={popupActive}
              setActive={setPopupActive}
              setData={dataIn}
            />
          )}
        </div>
      </div>
    // </div>
  );
};
