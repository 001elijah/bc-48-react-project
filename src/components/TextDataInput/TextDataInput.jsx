import s from './TextDataInput.module.scss';

export const TextDataInput = () => {

    return (
        <div className={s.TextDataInputWrapper}>
            <input className={s.TextDataInput} type="text" />
            <label><span className={s.TextDataInputTitle}>2. Passive income, months, ₴</span></label>
        </div>
    );
}