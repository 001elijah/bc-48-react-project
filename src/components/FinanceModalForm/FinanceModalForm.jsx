import { useDispatch } from 'react-redux';
import s from './FinanceModalForm.module.scss';
import svg from 'assets/icons/sprite.svg';
import { useState } from 'react';
import { postTransaction } from 'redux/operations/cashflowOperations';

// import sprite from '../../assets/icons/sprite.svg';
export const FinanceModalForm = ({ title, handleToggle }) => {
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();

  const handleGetModal = () => {
    const form = { sum, type: 'income' };
    dispatch(postTransaction(form));
    handleToggle();
  };

  return (
    <div className={s.backdrop}>
      <div className={s.modal_box}>
        <button className={s.closeButton} onClick={handleToggle}>
          <svg className={s.iconClose} width="30" height="30" fill="#fff">
            <use xlinkHref={`${svg}#icon-stats`} />
          </svg>
        </button>
        <div className={s.boxInput}>
          <input
            type="text"
            placeholder={title}
            className={s.input}
            onChange={e => setSum(e.target.value)}
          />
          <ul className={s.buttonList}>
            <li>
              <button className={s.buttonAdd} onClick={handleGetModal}>
                Add
              </button>
            </li>
            <li>
              <button className={s.buttonCancel} onClick={handleToggle}>
                Cancel
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
