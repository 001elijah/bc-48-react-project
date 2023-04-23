import { TextDataInput } from 'components/TextDataInput/TextDataInput';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';

import s from './FinanceForm.module.scss';
import { FinanceDataBoard } from 'components/FinanceDataBoard/FinanceDataBoard';
import {
  selectMonth,
  selectPlan,
  selectSavings,
  selectYear,
} from 'redux/selectors/personalPlanSelectors';
import {
  getPlan,
  postPlan,
  prePostPlan,
} from '../../redux/operations/personalPlanOperations';
import { selectAuthorized } from 'redux/selectors/authSelectors';
import _ from 'lodash';
import { useEffect } from 'react';

const OwnPlanSchema = Yup.object().shape({
  salary: Yup.string()
    .required('Required')
    .matches(/^[1-9][0-9]*$/, {
      message: 'Must be greater than 0 and start from 1',
    }),
  passiveIncome: Yup.string()
    .required('Required')
    .matches(/^[1-9][0-9]*$/, {
      message: 'Must be greater than 0 and start from 1',
    }),
  savings: Yup.string()
    .required('Required')
    .matches(/^[1-9][0-9]*$/, {
      message: 'Must be greater than 0 and start from 1',
    }),
  cost: Yup.string()
    .required('Required')
    .matches(/^[1-9][0-9]*$/, {
      message: 'Must be greater than 0 and start from 1',
    }),
  footage: Yup.string()
    .required('Required')
    .matches(/^[1-9][0-9]*$/, {
      message: 'Must be greater than 0 and start from 1',
    }),
  procent: Yup.string()
    .required('Required')
    .matches(/\b(0*(?:[1-9][0-9]?|100))\b/, {
      message: 'Must be greater than 0 and less or equal to 100',
    }),
});

export const FinanceForm = () => {
  const dispatch = useDispatch();
  const plan = useSelector(selectPlan);
  const savings = useSelector(selectSavings)
  const authorized = useSelector(selectAuthorized);
  const year = useSelector(selectYear);
  const month = useSelector(selectMonth);

  useEffect(() => {
    authorized && dispatch(getPlan());
  }, [authorized, dispatch]);

  const formik = useFormik({
    initialValues: plan || '',
    enableReinitialize: true,
    onSubmit: values => {
      console.log(values);
      if (plan) console.log('You have the plan');
      dispatch(
        postPlan({
          salary: +values.salary,
          passiveIncome: +values.passiveIncome,
          savings: +values.savings,
          cost: +values.cost,
          footage: +values.footage,
          procent: +values.procent,
        })
      );
    },
    validationSchema: OwnPlanSchema,
  });

  function deepEqual(values, initValues) {
    const keysFromValues = Object.keys(values);
    const keysFromInitValues = Object.keys(initValues);

    if (keysFromValues.length !== keysFromInitValues.length) {
      return false;
    }

    for (const key of keysFromValues) {
      const value = +values[key];
      const initValue = +initValues[key];
      const areObjects = isObject(value) && isObject(initValue);
      if (
        (areObjects && !deepEqual(value, initValue)) ||
        (!areObjects && value !== initValue)
      ) {
        return false;
      }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

  const getPrePlan = _.debounce(() => {
    const { salary, passiveIncome, savings, cost, footage, procent } =
      formik.values;
    authorized &&
      !deepEqual(formik.values, formik.initialValues) &&
      (formik.touched.procent ||
        formik.touched.cost ||
        formik.touched.savings ||
        formik.touched.passiveIncome ||
        formik.touched.salary) &&
      dispatch(
        prePostPlan({
          salary: +salary,
          passiveIncome: +passiveIncome,
          savings: +savings,
          cost: +cost,
          footage: +footage,
          procent: +procent,
        })
      );
  }, 1000);
  getPrePlan();
  // console.log(formik.initialValues.salary);
  return (
    <div className={s.Container}>
      <form className={s.PlanFormWrapper} onSubmit={formik.handleSubmit}>
        <TextDataInput
          label={'1. RFP of both spouses, ₴'}
          htmlFor={'salary'}
          placeholder={'75 000'}
          id={'salary'}
          name={'salary'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.salary === 0 ? 10 : formik.values.salary}
          fieldError={formik.errors.salary}
          isFieldTouched={formik.touched.salary}
        />
        <TextDataInput
          label={'2. Passive income, months, ₴'}
          htmlFor={'passiveIncome'}
          placeholder={'Enter text'}
          id={'passiveIncome'}
          name={'passiveIncome'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={
            formik.values.passiveIncome === 0 ? '' : formik.values.passiveIncome
          }
          fieldError={formik.errors.passiveIncome}
          isFieldTouched={formik.touched.passiveIncome}
        />

        <TextDataInput
          label={'3. Savings, ₴'}
          htmlFor={'savings'}
          placeholder={'Enter text'}
          id={'savings'}
          name={'savings'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.savings === 0 ? '' : formik.values.savings}
          fieldError={formik.errors.savings}
          isFieldTouched={formik.touched.savings}
          isReadOnly={Boolean(savings)}
        />

        <TextDataInput
          label={'4. Specify the cost of your future apartment, ₴'}
          htmlFor={'cost'}
          placeholder={'90 000'}
          id={'cost'}
          name={'cost'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cost === 0 ? '' : formik.values.cost}
          fieldError={formik.errors.cost}
          isFieldTouched={formik.touched.cost}
        />

        <TextDataInput
          label={'5. Specify the number of sq.m. of your future apartment'}
          htmlFor={'footage'}
          placeholder={'Enter text'}
          id={'footage'}
          name={'footage'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.footage === 0 ? '' : formik.values.footage}
          fieldError={formik.errors.footage}
          isFieldTouched={formik.touched.footage}
        />

        <TextDataInput
          label={'6. Accumulation, %'}
          htmlFor={'procent'}
          placeholder={'Enter text'}
          hint={
            'Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal'
          }
          id={'procent'}
          name={'procent'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.procent === 0 ? '' : formik.values.procent}
          fieldError={formik.errors.procent}
          isFieldTouched={formik.touched.procent}
        />

        <FinanceDataBoard
          BoardTitle={'You will have apartment in:'}
          yearValue={year === 0 ? '' : year}
          monthValue={month === 0 ? '' : month}
          handleAddBalance
        />
      </form>
    </div>
  );
};
