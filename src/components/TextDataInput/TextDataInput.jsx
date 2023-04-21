import s from './TextDataInput.module.scss';

export const TextDataInput = ({
  label,
  placeholder,
  hint = null,
  getChange,
}) => {
  return (
    <>
      <div className={s.TextDataInputWrapper}>
        <input
          className={s.TextDataInput}
          type="text"
          placeholder={placeholder}
          //   onChange={getChange}
        />
        <label>
          <span className={s.TextDataInputTitle}>{label}</span>
        </label>
        {hint && <span className={s.Hint}>{hint}</span>}
      </div>
    </>
  );
};
