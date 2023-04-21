import s from './TextDataInput.module.scss';

export const TextDataInput = ({ ...props }) => {
    const { label, htmlFor, placeholder, hint = null, id, name, onChange, value } = props;

    return (
        <>
            <div className={s.TextDataInputWrapper}>
                <input
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    className={s.TextDataInput}
                    type="text"
                    placeholder={placeholder}
                />
                <label htmlFor={htmlFor}><span className={s.TextDataInputTitle}>{label}</span></label>
                {hint && <span className={s.Hint}>{hint}</span>}
            </div>
            
        </>
    );
}