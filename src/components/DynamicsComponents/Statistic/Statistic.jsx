import s from './Statistic.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getCustomerSavingsForStatistic } from 'redux/operations/dynamicsOperations';
import { useState, useEffect } from 'react';
import { selectCustomerSavingStatistic } from 'redux/selectors/dynamicsDataSelectors';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

// const initState = {
//   income: '00 000',
//   expense: '00 000',
//   accumulated: '00 000',
//   plan: '00 000',
//   planInProcent: '00%',
// };
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
  const [datepicker, setDatepicker] = useState({ month: null, year: null });
  const [
    month,
    // setMonth
  ] = useState(monthNames[new Date().getMonth()]);
  const [
    year,
    // setYear
  ] = useState(new Date().getFullYear());
  const requstMonth = monthNames.findIndex(monthName => monthName === month);
  const savingStatistics = useSelector(selectCustomerSavingStatistic);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomerSavingsForStatistic({ year, month: requstMonth + 1 }));
  }, [month, year]);

  const onChangeSelect = e => {
    console.log(e.currentTarget.children.dateBox.children.date.textContent);
  };

  return (
    <>
      <div className={s.select} onClick={onChangeSelect}>
        <div name="dateBox" className={s.monthInfo}>
          <p className={s.title}>Month</p>
          <p name="date" className={s.exactMonth}>
            {month} {year}
          </p>
        </div>
        <div className={s.iconWrapper}>
          <KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: 24 }} />
        </div>
      </div>
      <div className={clsx(s.datepicker, s.ninja)}></div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.descr}>Income, ₴</span>
          <span className={s.sum}>{savingStatistics.income}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Expenses, ₴</span>
          <span className={s.sum}>{savingStatistics.expense}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Accumulated, ₴</span>
          <span className={s.sum}>{savingStatistics.accumulated}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Plan, ₴</span>
          <span className={s.sum}>{savingStatistics.plan}</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Plan, %</span>
          <span className={s.sum}>{savingStatistics.planInProcent}</span>
        </li>
      </ul>
    </>
  );
};

export default MonthlyStats;
