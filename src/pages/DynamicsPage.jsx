import DynamicsChart from '../components/DynamicsComponents/DynamicsChart/DynamicsChart';
import Statistic from '../components/DynamicsComponents/Statistic/Statistic';
import s from '../components/DynamicsComponents/DynamicsChart/DynamicsChart.module.scss';
import Info from '../components/DynamicsComponents/Info/Info';
import OneMoreSqMeter from '../components/DynamicsComponents/Info/OneMoreSqMeter';

export const DynamicsPage = () => {
  return (
    <div className={s.container}>
      <DynamicsChart />
      <Statistic />
      <Info />
      <OneMoreSqMeter />
    </div>
  );
};
