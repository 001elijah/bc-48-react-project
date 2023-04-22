import { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { FinanceModalForm } from 'components/FinanceModalForm/FinanceModalForm';
import { FormCashFlow } from 'components/FormCashFlow/FormCashFlow';

export const CashflowPage = () => {
  const [isModal, setIsModal] = useState(true);

  // const dispatch = useDispatch();

  // прийде з беку
  // const balance = 10000000;
  // const Daily = useSelector(state => state.cashflow.dailyLimit);
  // const Month = useSelector(state => state.cashflow.monthLimit);

  const handleToggle = () => {
    setIsModal(prev => !prev);
  };

  return (
    <section>
      {/* <p>CashflowPage</p> */}
      <FormCashFlow />
      {isModal ? (
        <FinanceModalForm
          title="qweeqw"
          handleToggle={handleToggle}
          // getModal={handleGetModal}
        />
      ) : null}
    </section>
  );
};
