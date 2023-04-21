import { FormInput } from './ModalItem';
// import { Alert, TextField } from "@mui/material";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Popup.module.scss';
import iconSvg from '../Svg';
import clsx from 'clsx';
import { putOneTransaction } from '../../../redux/operations/cashflowOperations';
import { putOneTransactionApi } from '../../../services/backendAPI';

import { useFormik } from 'formik';


import shortid from 'shortid';

export const PopUp = ({ isActive, setActive, id }) => {
 
  const [incomeData, setIncomeData] = useState();

  setIncomeData(putOneTransactionApi(id))
  console.log(incomeData)
  const formik = useFormik({
    initialValues: {
      category: '',
      comment: '',
      sum: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    // validationSchema: OwnPlanSchema,
  });



  const getBackdropClass = () => clsx(s.backdrop, isActive && s.active);


  const PopUpForm = [
    {
      label: 'Per category',
      htmlFor: 'category',
      placeholder: '',
      hint: null,
      id: 'category',
      name: 'category',
      onChange: formik.handleChange,
      value: formik.values.category,
    },
    {
      label: 'Expense comment',
      htmlFor: 'comment',
      placeholder: '',
      hint: null,
      id: 'comment',
      name: 'comment',
      onChange: formik.handleChange,
      value: formik.values.comment,
    },
    {
      label: 'Sum',
      htmlFor: 'sum',
      placeholder: '',
      hint: null,
      id: 'sum',
      name: 'sum',
      onChange: formik.handleChange,
      value: formik.values.sum,
    },
  ];

  return (
    <div
      className={getBackdropClass()}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className={s.popup_block} onClick={e => e.stopPropagation()}>
        <button className={s.svg_icon}>
          {iconSvg('close', '#3A6AF5', '20', () => {
            setActive(false);
          })}
        </button>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          {PopUpForm.map(
            ({
              label,
              htmlFor,
              placeholder,
              hint,
              id,
              name,
              onChange,
              value,
            }) => (
              <FormInput
                key={shortid.generate()}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                label={label}
                htmlFor={htmlFor}
                placeholder={placeholder}
                hint={hint}
              />
            )
          )}
          <button type="submit" className={s.button}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};
