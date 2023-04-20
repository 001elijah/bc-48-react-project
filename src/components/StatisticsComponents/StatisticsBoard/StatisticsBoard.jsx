import s from './StatisticsBoard.module.scss';
import LetterSvg from './Svg'
import { StatisticsNav } from '../StatisticsNav/StatisticsNav';

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


export const Item = ({ id, date, comment, category, sum }) => {
  return (
    <>
      <li key={id} className={s.wrapper}>
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
            {LetterSvg('edit', '#3A6AF5', '20')}
            {LetterSvg('delete', 'white', '20')}
          </div>
        </div>
      </li>
    </>
  );
};

export const ExpensesList = () => {
  return (
    <>
      <StatisticsNav />
      <ul>
        {data.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};


