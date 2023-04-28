import { useDispatch } from 'react-redux';
import s from './ExpensesBoard.module.scss';
import { deleteOneTransaction } from '../../../redux/operations/cashflowOperations';
import iconSvg from '../Svg';
import moment from 'moment';

export const Item = ({
  _id,
  date,
  comment,
  category,
  sum,
  setActive,
  setData,
  type,
}) => {
  const dispatch = useDispatch();
  const getPopUp = setTransData => {
    setActive(true);
    setData(setTransData);
  };
const newDate =moment().format("DD MM YYYY");

  return (
    <>
      <li key={_id} className={s.wrapper_expense}>
        <div className={s.comment_block}>
          <div>
            <p className={s.expense_date}>{newDate}</p>
            <p className={s.expense_comment}>{comment}</p>
          </div>
          <p className={s.expense_sum}> {sum} UAH</p>
        </div>
        <div className={s.category_block}>
          <p className={s.expense_category}> {category}</p>
          <ul className={s.icon_block}>
            <li className={s.icon_svg}>
              {iconSvg('edit', '#3A6AF5', '20', () =>
                getPopUp({ _id, date, comment, category, sum, type })
              )}
            </li>
            <li className={s.icon_svg}>
              {iconSvg('delete', 'white', '20', () =>
                dispatch(deleteOneTransaction(_id))
              )}
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};
