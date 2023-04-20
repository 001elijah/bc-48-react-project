import s from './ModalCash.module.scss';
export const ModalCash = ({ title, isModal }) => {
  return (
    <div className={s.backdrop}>
      <div className={s.modal_box}>
        <button className={s.closeButton} onClick={isModal}>
          Close
        </button>
        <div className={s.boxInput}>
          <input type="text" placeholder={title} className={s.input} />
          <ul className={s.buttonList}>
            <li>
              <button
                className={s.buttonAdd}
                onClick={() => {
                  // якийсь запрос наверно
                  console.log('sdsdfsfdsfd');
                }}
              >
                Add
              </button>
            </li>
            <li>
              <button className={s.buttonClose} onClick={isModal}>
                Cancel
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
