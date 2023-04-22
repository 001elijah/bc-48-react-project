import { useMediaQuery } from 'react-responsive';
import s from './FinanceModalForm.module.scss';
import svg from 'assets/icons/sprite.svg';

// import sprite from '../../assets/icons/sprite.svg';
export const FinanceModalForm = ({ title, handleToggle, handleGetModal }) => {
  // getModal це пропс для передачі запиту по кліку на кнопку Add
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div className={s.modal_box}>
      {isMobile && (
        <div onClick={handleToggle} className={s.close}>
          <svg width="11" height="11" fill="#F3F3F3">
            <use xlinkHref={`${svg}#icon-close`} />
          </svg>
        </div>
      )}
      {!isMobile && (
        <div onClick={handleToggle} className={s.close}>
          <svg width="24" height="24" fill="#F3F3F3">
            <use xlinkHref={`${svg}#icon-close`} />
          </svg>
        </div>
      )}
      <div className={s.boxInput}>
        <input type="text" placeholder={title} className={s.input} />
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
  );
};
