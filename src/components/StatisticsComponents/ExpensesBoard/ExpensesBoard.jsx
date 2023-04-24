import s from './ExpensesBoard.module.scss';
import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import { useDispatch, useSelector } from 'react-redux';
import { PopUp } from '../PopUp/PopUp';
import { useEffect, useState } from 'react';
import { Calendar } from '../../DateInput/DateInput';
import { getListOfTransactions } from '../../../redux/operations/cashflowOperations';
import {Item} from './ExpenseBoardItem'
import {Notify} from "notiflix"
import { getListOfCategory } from '../../../redux/operations/categoriesOperations';


export const ExpensesList = () => {
  const [popupActive, setPopupActive] = useState(false); //активація модального
  const [dataIn, setDataIn] = useState(''); //данні по обраній транзакції
  const [dateFilter, setDateFilter] = useState(''); //обрані дати
  const [transactionData, setTransactionData] = useState([]); //отримання транзакцій
  const [form, setForm]= useState()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfCategory());    
 }, []);

  useEffect(() => {
    dispatch(getListOfTransactions(dateFilter)).then(data => {
      setTransactionData(data.payload);
    })
  }, [dateFilter]);



if (!transactionData || transactionData===[]) return;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Calendar onDate={setDateFilter} />
        <StatisticsNav />
        <ul className={s.expense_block}>
          {(typeof(transactionData)==='object')?(transactionData?.map(item => (
            <Item
              key={item._id}
              {...item}
              setActive={setPopupActive}
              setData={setDataIn}
            />
          ))):(Notify.failure("You don't have transaction on this period"))}
        </ul>
        {popupActive && (
          <PopUp
            isActive={popupActive}
            setActive={setPopupActive}
            setData={dataIn}
            formChange={setForm}
          />
        )}
      </div>
    </div>
  );
};
