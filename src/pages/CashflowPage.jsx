import { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { FinanceModalForm } from 'components/FinanceModalForm/FinanceModalForm';
import { FormCashFlow } from 'components/FormCashFlow/FormCashFlow';

export const CashflowPage = () => {
  const [isModal, setIsModal] = useState(true);

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
