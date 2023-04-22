import s from './ExpensesBoard.module.scss';
import iconSvg from '../Svg';
import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import { deleteOneTransaction } from '../../../redux/operations/cashflowOperations';
import { useDispatch } from 'react-redux';
import { PopUp } from '../PopUp/PopUp';
import { useState } from 'react';

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

export const Item = ({
  id,
  date,
  comment,
  category,
  sum,
  setActive,
  setData,
}) => {
  const dispatch = useDispatch();
  const getPopUp =(setTransData) => {
    setActive(true);
    setData(setTransData);
  };
  return (
    <>
      <li key={id} className={s.wrapper_expense}>
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
            {iconSvg('edit', '#3A6AF5', '20', () => getPopUp({id, date, comment, category, sum}))}
            {iconSvg('delete', 'white', '20', () =>
              dispatch(deleteOneTransaction(id))
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export const ExpensesList = () => {
  const [popupActive, setPopupActive] = useState(false);
  const [dataIn, setDataIn] = useState('');
  return (
    <div className={s.container}>
      <StatisticsNav />
      <ul>
        {data.map(item => (
          <Item
            key={item.id}
            {...item}
            setActive={setPopupActive}
            setData={setDataIn}
          />
        ))}
      </ul>
      {popupActive && (
        <PopUp isActive={popupActive} setActive={setPopupActive} setData={dataIn} />
      )}
    </div>
  );
};
