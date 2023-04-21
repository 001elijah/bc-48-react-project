import s from './Popup.module.scss';

export const FormInput = ({ ...props }) => {
    const { label, htmlFor, placeholder, hint = null, id, name, onChange, value } = props;

    return (
        <>
            <div className={s.inputField}>
                <input
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    className={s.inputText}
                    type="text"
                    placeholder={placeholder}
                />
                <label htmlFor={htmlFor}><span className={s.labelTitle}>{label}</span></label>
                {hint && <span className={s.Hint}>{hint}</span>}
            </div>
            
        </>
    );
}