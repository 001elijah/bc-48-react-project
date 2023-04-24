import {
  selectCost,
  selectFootage,
} from 'redux/selectors/personalPlanSelectors';
import { selectSquareMeters } from 'redux/selectors/dynamicsDataSelectors';
import { useSelector } from 'react-redux';

const useCalcPrice = () => {
  const cost = useSelector(selectCost);
  const footage = useSelector(selectFootage);
  const squareMeters = useSelector(selectSquareMeters);
  const priceForOneSquareMeter = cost / footage;

  return ((priceForOneSquareMeter, squareMeters) => {
    const needToAccumulate = Math.round(
      priceForOneSquareMeter * (Math.ceil(squareMeters) - squareMeters)
    );
    return needToAccumulate === 0 ? priceForOneSquareMeter : needToAccumulate;
  })(priceForOneSquareMeter, squareMeters);
};

export default useCalcPrice;
