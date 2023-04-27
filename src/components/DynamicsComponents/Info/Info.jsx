import s from './Info.module.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DreamHomePicUpload from './DreamHomePicUpload';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectYear,
  selectMonth,
  selectAccumulatedProc,
  selectAccumulatedUah,
  selectSquareMeters,
} from 'redux/selectors/dynamicsDataSelectors';
import { selectFootage } from 'redux/selectors/personalPlanSelectors';
import { GreetingCard } from 'components/GreetingCard/GreetingCard';

const Info = () => {
  const year = useSelector(selectYear);
  const month = useSelector(selectMonth);
  const accumulatedUah = useSelector(selectAccumulatedUah);
  const accumulatedProc = useSelector(selectAccumulatedProc);
  const squareMeters = useSelector(selectSquareMeters);
  const footage = useSelector(selectFootage);

  const [showCard, setShowCard] = useState(false);
  const handleCardClose = () => setShowCard(false);

  useEffect(() => {
    if ((squareMeters / footage) * 100 >= 100) {
      setShowCard(true);
    }
  }, [footage, squareMeters]);

  return (
    <div className={s.info}>
      {showCard && <GreetingCard onClose={handleCardClose} />}
      <div>
        <p className={s.allPeriod}>
          After {year || 0} years {month || 0} month
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <span className={s.text}>Accumulated, %:</span>
            <span className={s.value}>{accumulatedProc || 0}%</span>
          </li>
          <li className={s.item}>
            <span className={s.text}>Accumulated, UAH:</span>
            <span className={s.value}>{accumulatedUah || 0} ₴</span>
          </li>
          <li className={s.item}>
            <span className={s.text}>And this:</span>
            <span className={s.value}>{squareMeters || 0} sq.m</span>
          </li>
        </ul>
        <p className={s.acumulated}>
          {squareMeters || 0} out of {footage} sq.m accumulated
        </p>
        <div className={s.progress}>
          <ProgressBar
            style={{ height: '8px' }}
            now={(squareMeters / footage) * 100}
          />
        </div>
      </div>
      <DreamHomePicUpload />
    </div>
  );
};

export default Info;
