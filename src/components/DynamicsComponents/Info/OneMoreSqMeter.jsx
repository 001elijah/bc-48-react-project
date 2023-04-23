import image from 'assets/img/one-more-sq-meter.png';
import s from './OneMoreSqMeter.module.scss';
import {
  selectCost,
  selectFootage,
} from 'redux/selectors/personalPlanSelectors';
import { selectSquareMeters } from 'redux/selectors/dynamicsDataSelectors';
import { useSelector } from 'react-redux';

const OneMoreSqMeter = () => {
  const cost = useSelector(selectCost);
  const footage = useSelector(selectFootage);
  const squareMeters = useSelector(selectSquareMeters);
  const priceForOneSquareMeter = cost / footage;

  const oneMoreSqM = (priceForOneSquareMeter, squareMeters) => {
    const needToAccumulate = Math.round(
      priceForOneSquareMeter * (Math.ceil(squareMeters) - squareMeters)
    );
    return needToAccumulate === 0 ? priceForOneSquareMeter : needToAccumulate;
  };

  return (
    <div className={s.container}>
      <div className={s.info}>
        <p className={s.text}>
          To add more <span className={s.accent}>1 sq.m</span> for planning, it
          remains to accumulate
        </p>
        <p className={s.sum}>
          {oneMoreSqM(priceForOneSquareMeter, squareMeters) + '₴'}
        </p>
      </div>
      <img className={s.img} src={image} alt="Finance app" />
    </div>
  );
};

export default OneMoreSqMeter;
