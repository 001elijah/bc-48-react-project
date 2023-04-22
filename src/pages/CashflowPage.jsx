import { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { FinanceModalForm } from 'components/FinanceModalForm/FinanceModalForm';
import { FormCashFlow } from 'components/FormCashFlow/FormCashFlow';

export const CashflowPage = () => {
  const [isModal, setIsModal] = useState(true);

  const handleToggle = () => {
    setIsModal(prev => !prev);
  };

  // const isModal = () => {};
  return (
    <section>
      <FormCashFlow handleToggle={handleToggle} />
      {isModal ? (
        <FinanceModalForm title="qweeqw" handleToggle={handleToggle} />
      ) : null}
    </section>
  );
};
