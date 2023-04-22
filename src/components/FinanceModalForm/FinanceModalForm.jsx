import s from './FinanceModalForm.module.scss';
import svg from 'assets/icons/sprite.svg';

// import sprite from '../../assets/icons/sprite.svg';
export const FinanceModalForm = ({ title, handleToggle, getModal }) => {
  // getModal це пропс для передачі запиту по кліку на кнопку Add
  return (
    <div className={s.backdrop}>
      <div className={s.modal_box}>
        <button className={s.closeButton} onClick={handleToggle}>
          <svg className={s.iconClose} width="30" height="30" fill="#fff">
            <use xlinkHref={`${svg}#icon-stats`} />
          </svg>
        </button>
        <div className={s.boxInput}>
          <input type="text" placeholder={title} className={s.input} />
          <ul className={s.buttonList}>
            <li>
              <button className={s.buttonAdd} onClick={getModal}>
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
