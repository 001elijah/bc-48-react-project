import DynamicsChart from '../components/DynamicsComponents/DynamicsChart/DynamicsChart';
import Statistic from '../components/DynamicsComponents/Statistic/Statistic';
import Info from '../components/DynamicsComponents/Info/Info';
import OneMoreSqMeter from '../components/DynamicsComponents/Info/OneMoreSqMeter';
import s from '../components/DynamicsComponents/DynamicsChart/DynamicsChart.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { getCustomerSavingsForChart } from 'redux/operations/dynamicsOperations';

export const DynamicsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomerSavingsForChart());
  }, [dispatch]);

  const isMobileTabletSize = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <div className={s.container}>
      <div className={s.chartContainer}>
        <div>
          <DynamicsChart />
          <Statistic />
        </div>
        <div className={s.infoContainer}>
          <Info />
          {isDesktopSize && <OneMoreSqMeter />}
        </div>
      </div>
      {isMobileTabletSize && <OneMoreSqMeter />}
    </div>
  );
};
