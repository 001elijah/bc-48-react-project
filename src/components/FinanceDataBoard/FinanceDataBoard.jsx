import { useEffect, useState } from 'react';
import s from './FinanceDataBoard.module.scss';
import Modal from 'components/Modal/Modal';
import { FinanceModalForm } from 'components/FinanceModalForm/FinanceModalForm';
import {
  postTransaction,
  // getDailyLimit,
  getLimitsAndTotals,
} from 'redux/operations/cashflowOperations';
import { useDispatch, useSelector } from 'react-redux';
import { addBalance } from 'redux/operations/authOperations';
import { selectUser } from 'redux/selectors/authSelectors';

export const FinanceDataBoard = ({
  BoardTitle = null,
  yearValue = 0,
  monthValue = 0,
  onSubmit,
  dailyLimit,
  monthLimit,
}) => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  const balance = useSelector(selectUser).balance;
  const [isSum, setIsSum] = useState(false);

  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    // console.log(sum);
    setSum(e.target.value);
  };

  const handleAddIncome = () => {
    // const form = {
    //   sum: Number(sum),
    //   type: 'income',
    // };
    // dispatch(postTransaction(form));
    // handleModalWindowClose();

    if (sum === 0) {
      setIsSum(true);
    } else {
      const form = {
        sum: Number(sum),
        type: 'income',
      };
      // console.log(sum);
      dispatch(postTransaction(form));
      handleModalWindowClose();
      setSum(0);
    }
    setTimeout(() => {
      setIsSum(false);
    }, 1500);
  };

  const handleAddBalance = () => {
    if (balance) console.log('You already have the balance');

    // console.log(typeof sum);

    if (sum === 0) {
      setIsSum(true);
    } else {
      dispatch(addBalance(sum));
      handleModalWindowClose();
      setSum(0);
    }
    setTimeout(() => {
      setIsSum(false);
    }, 1500);
  };

  useEffect(() => {
    dispatch(getLimitsAndTotals());
  }, [dispatch]);

  return (
    <>
      {BoardTitle ? (
        <div className={s.BoardWrapper}>
          <span className={s.BoardTitle}>{BoardTitle}</span>
          <div className={s.FlexWrapper}>
            <div className={s.DataFieldWrapper}>
              <label>
                <span className={s.DataLabel}>Number of years</span>
              </label>
              <input
                className={s.DataDisplayField}
                type="text"
                value={yearValue && `${yearValue} years`}
                readOnly
              />
            </div>
            <div className={s.DataFieldWrapper}>
              <label>
                <span className={s.DataLabel}>Number of months</span>
              </label>
              <input
                className={s.DataDisplayField}
                type="text"
                value={monthValue && `${monthValue} months`}
                readOnly
              />
            </div>
            <div className={s.BoardButtonsWrapper}>
              <button className={s.FitsBtn} type="submit">
                Fits
              </button>
              <button
                className={s.AddBalanceBtn}
                onClick={handleModalWindowOpen}
                type="button"
                disabled={Boolean(balance)}
              >
                Add Balance
              </button>
              {showModalWindow && (
                <Modal closeModal={handleModalWindowClose}>
                  <FinanceModalForm
                    handleInputChange={handleInputChange}
                    handleToggle={handleModalWindowClose}
                    title={'Enter balance'}
                    handleAddBalance={handleAddBalance}
                  />
                </Modal>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={s.DailyBoardWrapper}>
          <span className={s.BoardTitle}>{BoardTitle}</span>
          <div className={s.DailyFlexWrapper}>
            <div className={s.DataFieldWrapper}>
              <input
                className={s.DataDisplayField}
                type="text"
                placeholder={`${dailyLimit}$`}
                readOnly
              />
              <label>
                <span className={s.DataLabelDaily}>Daily limit</span>
              </label>
            </div>
            <div className={s.DataFieldWrapper}>
              <input
                className={s.DataDisplayField}
                type="text"
                placeholder={`${monthLimit}$`}
                readOnly
              />
              <label>
                <span className={s.DataLabelDaily}>Monthly Limit</span>
              </label>
            </div>
            <div className={s.DailyBoardButtonsWrapper}>
              <button className={s.ReadyBtn} type="submit" onClick={onSubmit}>
                Ready
              </button>
              <button
                className={s.AddIncomeBtn}
                onClick={handleModalWindowOpen}
                type="button"
              >
                Add income
              </button>
              {showModalWindow && (
                <Modal closeModal={handleModalWindowClose}>
                  <FinanceModalForm
                    handleInputChange={handleInputChange}
                    handleToggle={handleModalWindowClose}
                    title={'Enter income'}
                    handleAddIncome={handleAddIncome}
                    isSum={isSum}
                  />
                </Modal>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
