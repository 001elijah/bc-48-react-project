import { FormInput } from './PopUpItem';
import { useEffect, useState } from 'react';
import s from './Popup.module.scss';
import iconSvg from '../Svg';
import clsx from 'clsx';
// import { putOneTransaction } from '../../../redux/operations/cashflowOperations';
import { getListOfCategoryApi } from '../../../services/backendAPI';
import { useFormik } from 'formik';
import shortid from 'shortid';

export const PopUp = ({ isActive, setActive, setData }) => {
  const { id, date, comment, category, sum } = setData;
  const [incomeData, setIncomeData] = useState();
  const [categoryList, setCategoryList] = useState();

  // setIncomeData(putOneTransactionApi(id))
  // console.log(category)
  const formik = useFormik({
    initialValues: {
      category,
      comment,
      sum,
    },
    onSubmit: values => {
      console.log('submit', values);
    },
    // validationSchema: //,
  });

  useEffect(() => {
    getListOfCategoryApi().then(data => {
      console.log('1');
      setCategoryList(data);
    });
  }, []);

  console.log(categoryList);

  const options = [
    { value: 'Products', label: 'Products' },
    { value: 'Clothing and footwear', label: 'Clothing and footwear' },
    { value: 'Cafes and restaurants', label: 'Cafes and restaurants' },
    { value: 'Beauty and medicine', label: 'Beauty and medicine' },
    { value: 'Health', label: 'Health' },
    { value: 'Transport', label: 'Transport' },
    { value: 'House', label: 'House' },
    { value: 'Other', label: 'Other' },
  ];

  const getBackdropClass = () => clsx(s.backdrop, isActive && s.active);

  const PopUpForm = [
    {
      label: 'Per category',
      htmlFor: 'category',
      placeholder: '',
      id: 'category',
      name: 'category',
      onChange: formik.handleChange,
      value:formik.values.comment,
    },
    {
      label: 'Expense comment',
      htmlFor: 'comment',
      placeholder: '',
      id: 'comment',
      name: 'comment',
      onChange: formik.handleChange,
      value: formik.values.comment,
    },
    {
      label: 'Sum',
      htmlFor: 'sum',
      placeholder: '',
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
              id,
              name,
              onChange,
              value,
              select,
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
                select={options}
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
