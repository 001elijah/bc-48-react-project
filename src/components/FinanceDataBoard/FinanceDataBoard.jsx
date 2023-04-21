import s from './FinanceDataBoard.module.scss';

export const FinanceDataBoard = ({ BoardTitle = null }) => {
    return (
        <>
            {BoardTitle ? (<div className={s.BoardWrapper}>
                <span className={s.BoardTitle}>{BoardTitle}</span>
                <div className={s.FlexWrapper}>
                    <div className={s.DataFieldWrapper}>
                        <label><span className={s.DataLabel}>Number of years</span></label>
                        <input className={s.DataDisplayField} type="text" placeholder="0 years" readOnly/>
                    </div>
                    <div className={s.DataFieldWrapper}>
                        <label><span className={s.DataLabel}>Number of months</span></label>
                        <input className={s.DataDisplayField} type="text" placeholder="0 months" readOnly />
                    </div>
                    <div className={s.BoardButtonsWrapper}>
                        <button className={s.FitsBtn} type='submit'>Fits</button>
                        <button className={s.AddBalanceBtn} type='button'>Add Balance</button>
                    </div>
                </div>
            </div>) :
            (<div className={s.DailyBoardWrapper}>
                <span className={s.BoardTitle}>{BoardTitle}</span>
                <div className={s.DailyFlexWrapper}>
                    <div className={s.DataFieldWrapper}>
                            <input className={s.DataDisplayField} type="text" placeholder="-600$" readOnly />
                            <label><span className={s.DataLabelDaily}>Daily limit</span></label>
                    </div>
                    <div className={s.DataFieldWrapper}>
                            <input className={s.DataDisplayField} type="text" placeholder="-5000$" readOnly />
                            <label><span className={s.DataLabelDaily}>Monthly Limit</span></label>
                    </div>
                    <div className={s.DailyBoardButtonsWrapper}>
                        <button className={s.ReadyBtn} type='submit'>Ready</button>
                        <button className={s.AddIncomeBtn} type='button'>Add income</button>
                    </div>
                </div>
            </div>)}
        </>
    );
}
