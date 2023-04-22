import image from 'assets/img/one-more-sq-meter.png';
import s from './OneMoreSqMeter.module.scss';

const OneMoreSqMeter = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <p className={s.text}>
          To add more <span className={s.accent}>1 sq.m</span> for planning, it
          remains to accumulate
        </p>
        <p className={s.sum}>14 000 ₴</p>
      </div>
      <img className={s.img} src={image} alt="Finance app" />
    </div>
  );
};

export default OneMoreSqMeter;
