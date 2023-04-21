// import { ModalCash } from 'components/Modal/ModalCash';
import SelectCategory from 'components/Select/SelectCategory';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListOfCategory } from 'redux/operations/categoriesOperations';
// import s from './CashflowPage.module.scss';
import './CashflowPage.scss';
import { ModalCash } from 'components/Modal/ModalCash';
import {
  getDailyLimit,
  // postTransaction,
} from 'redux/operations/cashflowOperations';
import { TextDataInput } from 'components/TextDataInput/TextDataInput';
import { FinanceDataBoard } from 'components/FinanceDataBoard/FinanceDataBoard';
import { SelectData } from 'components/Select/SelectData';

export const CashflowPage = () => {
  const [isModal, setIsModal] = useState(false);
  // const [sum, setSum] = useState(0);
  // const [coment, setComent] = useState('');
  // const [categories, setCategories] = useState(null);

  // console.log(coment);
  const dispatch = useDispatch();

  // прийде з беку
  const balance = 10000000;
  const Daily = useSelector(state => state.cashflow.dailyLimit);
  const Month = useSelector(state => state.cashflow.monthLimit);

  const handleToggle = () => {
    setIsModal(prev => !prev);
  };

  // const handleGetModal = () => {
  //   console.log(123312132);
  //   const form = {
  //     type: 'expense',
  //     category: categories,
  //     comment: coment,
  //     sum,
  //     date: null,
  //   };
  //   // dispatch(postTransaction(form));
  // };

  useEffect(() => {
    console.log('CashflowPage');
    // console.log(getListOfCategory());
    // dispatch(getListOfCategory());
    // dispatch(getDailyLimit());
  }, [dispatch]);

  // useEffect(() => {}, [dispatch]);

  return (
    <section>
      <p>CashflowPage</p>
      <div>
        <form className="Form">
          <TextDataInput
            label={'Account balance'}
            // value={`Account balance: UAN ${balance}`}
            placeholder={'75 000'}
          />

          <label className="labelForm">
            <p className="labelText">Per category</p>
            <SelectCategory getChange={e => console.log(e)} />
          </label>

          <TextDataInput
            label={'Sum'}
            // value={`Account balance: UAN ${balance}`}
            placeholder={'00.00'}
            // getChange={e => console.log(e.target.value)}
          />

          <TextDataInput
            label={'Expense comment'}
            // value={`Account balance: UAN ${balance}`}
            placeholder={'Concert tickets'}
          />
        </form>
        <FinanceDataBoard />
        {/* onClick={handleReade}
        onClick={handleToggle} */}
      </div>
      {isModal ? (
        <ModalCash
          title="qweeqw"
          handleToggle={handleToggle}
          // getModal={handleGetModal}
        />
      ) : null}
      {/* <SelectData /> */}
    </section>
  );
};
