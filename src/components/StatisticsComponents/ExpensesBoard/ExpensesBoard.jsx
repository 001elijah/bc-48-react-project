import s from './ExpensesBoard.module.scss';
import iconSvg from '../Svg';
import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import { deleteOneTransaction } from '../../../redux/operations/cashflowOperations';
import { useDispatch } from 'react-redux';
import { PopUp } from '../PopUp/PopUp';
import { useEffect, useState } from 'react';
import { Calendar } from '../../DateInput/DateInput';
import { getListOfTransactions } from '../../../redux/operations/cashflowOperations';

export const Item = ({
  _id,
  date,
  comment,
  category,
  sum,
  setActive,
  setData,
  type
}) => {
  const dispatch = useDispatch();
  const getPopUp = setTransData => {
    setActive(true);
    setData(setTransData);
  };

  return (
    <>
      <li key={_id} className={s.wrapper_expense}>
        <div className={s.comment_block}>
          <div>
            <p className={s.expense_date}>{date}</p>
            <p className={s.expense_comment}>{comment}</p>
          </div>
          <p className={s.expense_sum}> {sum} UAH</p>
        </div>
        <div className={s.category_block}>
          <p className={s.expense_category}> {category}</p>
          <div className={s.icon_block}>
            {iconSvg('edit', '#3A6AF5', '20', () =>
              getPopUp({ _id, date, comment, category, sum, type })
            )}
            {iconSvg('delete', 'white', '20', () =>
              dispatch(deleteOneTransaction(_id))
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export const ExpensesList = () => {
  const [popupActive, setPopupActive] = useState(false); //активація модального
  const [dataIn, setDataIn] = useState(''); //данні по обраній транзакції
  const [dateFilter, setDateFilter] = useState(); //обрані дати
  const [transactionData, setTransactionData] = useState([]); //отримання транзакцій
  const[errorIn, setErrorIn] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfTransactions(dateFilter)).then(data =>{
      console.log(data)
      if(typeof(data.payload)==='object')
      {setTransactionData(data.payload)
        setErrorIn()}
      else {
        setErrorIn(data.payload)
        setTransactionData([]) 
      }}
    );
  }, [dateFilter, dispatch]);
console.log(errorIn)
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Calendar onDate={setDateFilter} />
        <StatisticsNav />
        <ul>
          {(transactionData!==[]) ? (transactionData.map(item => (
            <Item
              key={item._id}
              {...item}
              setActive={setPopupActive}
              setData={setDataIn}
            />
          ))):('No transactions for this period')}
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
  );
};
