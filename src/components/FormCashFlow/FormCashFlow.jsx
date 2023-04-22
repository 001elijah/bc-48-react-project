import {
  getDailyLimit,
  postTransaction,
} from 'redux/operations/cashflowOperations';
import { TextDataInput } from 'components/TextDataInput/TextDataInput';
import { FinanceDataBoard } from 'components/FinanceDataBoard/FinanceDataBoard';
import SelectCategory from 'components/Select/SelectCategory';
import './FormCashFlow.scss';
import {
  // useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors/authSelectors';
// import { dailyLimit, monthLimit } from 'redux/selectors/cashFlowSelector';

export const FormCashFlow = () => {
  const [sum, setSum] = useState(0);
  const [coment, setComent] = useState('');
  const [categories, setCategories] = useState(null);
  const balance = useSelector(selectUser).balance;
  // console.log()
  const dispatch = useDispatch();
  const monthLimit = useSelector(state => state.cashflow.monthLimit);
  const dailyLimit = useSelector(state => state.cashflow.dailyLimit);

  const handleGetModal = () => {
    if (sum === 0 && categories === null) {
      alert('asdasdasdasd');
    } else {
      const form = {
        type: 'expense',
        category: `${categories.value}`,
        comment: coment ? coment : 'comment',
        sum,
      };

      dispatch(postTransaction(form));
      dispatch(getDailyLimit());
    }
  };

  //   useEffect(() => {
  //     console.log('FormCashFlow');
  //   }, [dispatch]);

  return (
    <>
      <form className="Form">
        <TextDataInput
          label={'Account balance'}
          // value={`Account balance: UAN ${balance}`}
          placeholder={'75 000'}
          value={balance}
          isReadOnly={true}
        />

        <label className="labelForm">
          <p className="labelText">Per category</p>
          <SelectCategory getChange={e => setCategories(e)} />
        </label>

        <TextDataInput
          onChange={e => setSum(e.target.value)}
          label={'Sum'}
          // value={`Account balance: UAN ${balance}`}
          placeholder={'00.00'}
          // getChange={e => console.log(e.target.value)}
          value={sum === 0 ? '' : sum}
        />

        <TextDataInput
          label={'Expense comment'}
          onChange={e => setComent(e.target.value)}
          value={coment}
          // value={`Account balance: UAN ${balance}`}
          placeholder={'Concert tickets'}
        />
      </form>
      <FinanceDataBoard
        onSubmit={handleGetModal}
        dailyLimit={!dailyLimit ? 600 : dailyLimit}
        monthLimit={!monthLimit ? 1600 : monthLimit}
      />
    </>
  );
};
