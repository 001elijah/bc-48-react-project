import Calendar from './Calendar'
import { StatisticsNav } from '../StatisticsNav/StatisticsNav';
import s from './StatisticsBoard.module.scss';


const data = [
    {
      id: 1,
      date: '30.01.2023',
      category: 'House',
      sum: '200',
    },
    {
      id: 2,
      date: '25.01.2023',
      category: 'Other ',
      sum: '7000',
    },
    {
      id: 3,
      date: '15.01.2023',
      category: 'Products ',
      sum: '4000',
    },
    {
      id: 4,
      date: '08.01.2023',
      category: 'Clothing and footwear',
      sum: '800',
    },
    { id: 5, date: '05.01.2023',category: 'Other', sum: '1500' },
  ];
  
  
  export const Item = ({ id, date,  category, sum }) => {
    return (
      <>
        <li key={id} className={s.wrapper}>
          <div >
          <p className={s.expense_category}> {category}</p>
          <p > 9%</p>
          </div>
          <p className={s.expense_sum}> {sum} UAH</p>
        </li>
      </>
    );
  };
   



export const CategoriesList = () => {
    return (
      <>
        <Calendar />
        <StatisticsNav />
        <ul>
          {data.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </>
    );
  };