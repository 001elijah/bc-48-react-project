import s from './Statistic.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getCustomerSavingsForStatisticApi } from 'services/backendAPI';
import { useState, useEffect } from 'react';

const initState = {
  income: '00 000',
  expense: '00 000',
  accumulated: '00 000',
  plan: '00 000',
  planInProcent: '00%',
};
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MonthlyStats = () => {
  const [statistics, setStatistics] = useState(initState);
  const [month,
    // setMonth
  ] = useState(monthNames[new Date().getMonth()]);
  const [year,
    // setYear
  ] = useState(new Date().getFullYear());

  useEffect(() => {
    getCustomerSavingsForStatisticApi({ year, month })
      .then(({ results }) => {
        const { income, expense, accumulated, plan, planInProcent } = results;
        setStatistics({ income, expense, accumulated, plan, planInProcent });
      })
      .catch(err => console.log(err));
  }, [month, year]);
  return (
    <>
      <div className={s.select}>
        <div className={s.monthInfo}>
          <p className={s.title}>Month</p>
          <p className={s.exactMonth}>
            {month} {year}
          </p>
        </div>
        <div className={s.iconWrapper}>
          <KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: 24 }} />
        </div>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.descr}>Income, ₴</span>
          <span className={s.sum}>{statistics.income}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Expenses, ₴</span>
          <span className={s.sum}>{statistics.expense}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Accumulated, ₴</span>
          <span className={s.sum}>{statistics.accumulated}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Plan, ₴</span>
          <span className={s.sum}>{statistics.plan}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Plan, %</span>
          <span className={s.sum}>{statistics.planInProcent}</span>
        </li>
      </ul>
    </>
  );
};

export default MonthlyStats;
