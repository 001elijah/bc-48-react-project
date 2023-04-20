import s from './Statistic.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MonthlyStats = () => {
  return (
    <>
      <div className={s.select}>
        <div className={s.monthInfo}>
          <p className={s.title}>Month</p>
          <p className={s.exactMonth}>January 2020</p>
        </div>
        <div className={s.iconWrapper}>
          <KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: 24 }} />
        </div>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.descr}>Income, ₴</span>
          <span className={s.sum}>60 000</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Expenses, ₴</span>
          <span className={s.sum}>30 000</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Accumulated, ₴</span>
          <span className={s.sum}>30 000</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Plan, ₴</span>
          <span className={s.sum}>45 000</span>
        </li>
        <li className={s.item}>
          <span className={s.descr}>Plan, %</span>
          <span className={s.sum}>45 000</span>
        </li>
      </ul>
    </>
  );
};

export default MonthlyStats;
