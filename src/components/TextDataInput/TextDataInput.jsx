import s from './TextDataInput.module.scss';

export const TextDataInput = ({ ...props }) => {
    const { label, htmlFor, placeholder, hint = null, id, name, onChange, onBlur, value, fieldError, isFieldTouched, isReadOnly = null } = props;

    return (
        <>
            <div className={s.TextDataInputWrapper}>
                <input
                    id={id}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    className={s.TextDataInput}
                    type="text"
                    placeholder={placeholder}
                    readOnly={isReadOnly}
                />
                <label htmlFor={htmlFor}><span className={s.TextDataInputTitle}>{label}</span></label>
                { isFieldTouched && fieldError && <p className={s.Error}>{fieldError}</p> }
                {hint && <span className={s.Hint}>{hint}</span>}
            </div>
            
        </>
    );
}
