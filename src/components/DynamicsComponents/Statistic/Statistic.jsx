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
  const [date, setDate] = useState({
    month: monthNames[new Date().getMonth()],
    year: new Date().getFullYear(),
  });
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const requstMonth = monthNames.findIndex(
    monthName => monthName === date.month
  );
  const savingStatistics = useSelector(selectCustomerSavingStatistic);
  const dispatch = useDispatch();
  const selectDatepicker = document.querySelector('#datepicker');

  useEffect(() => {
    dispatch(
      getCustomerSavingsForStatistic({
        year: date.year,
        month: requstMonth + 1,
      })
    );
  }, [date]);

  useEffect(() => {
    if (month === null) return;
    setDate({ month, year });
  }, [month, year]);

  const onChangeSelect = e => {
    selectDatepicker.classList.toggle(s.ninja);
    setYear(null);
    setMonth(null);
  };

  const onSelectYear = e => {
    const selectedYear = e.target.textContent;
    setYear(Number(selectedYear));
  };
  const onSelectMonth = e => {
    const selectedMonth = e.target.textContent;
    setMonth(selectedMonth);
    selectDatepicker.classList.toggle(s.ninja);
  };

  return (
    <>
      <div className={s.select} onClick={onChangeSelect}>
        <div className={s.monthInfo}>
          <p className={s.title}>Month</p>
          <p id="date" className={s.exactMonth}>
            {date.month} {date.year}
          </p>
        </div>
        <div className={s.iconWrapper}>
          <KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: 24 }} />
        </div>
      </div>
      <div id="datepicker" className={clsx(s.datepicker, s.ninja)}>
        {!year ? (
          <ul onClick={onSelectYear}>
            <li key="1" className={s.selectItem}>
              2023
            </li>
            <li key="2" className={s.selectItem}>
              2022
            </li>
            <li key="3" className={s.selectItem}>
              2021
            </li>
            <li key="4" className={s.selectItem}>
              2020
            </li>
          </ul>
        ) : (
          <ul onClick={onSelectMonth} className={s.selectList}>
            {monthNames.map((monthName, idx) => (
              <li key={idx} className={s.selectItem}>
                {monthName}
              </li>
            ))}
          </ul>
        )}
      </div>
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
