import { useEffect, useState } from 'react';
import s from './Popup.module.scss';
import iconSvg from '../Svg';
import clsx from 'clsx';
import {
  getListOfCategoryApi,
  putOneTransactionApi,
} from '../../../services/backendAPI';
import SelectCategory from './Select';
import { Notify } from 'notiflix';

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
// const options = [
//   { name: 'products', title: 'Products' },
//   { name: 'clothing', title: 'Clothing and footwear' },
//   { name: 'cafes', title: 'Cafes and restaurants' },
//   { name: 'beauty', title: 'Beauty and medicine' },
//   { name: 'health', title: 'Health' },
//   { name: 'transport', title: 'Transport' },
//   { name: 'house', title: 'House' },
//   { name: 'other', title: 'Other' },
// ];
export const PopUp = ({ isActive, setActive, setData }) => {
  const { id, date, comment, category, sum } = setData;
  // const [options, setOptions] = useState([]);
  const initialValues = {
    category,
    comment,
    sum,
  };
  const [form, setForm] = useState(initialValues);

  // useEffect(() => {
  //   getOptions();
  // }, []);

  // const getOptions = () => {
  //   getListOfCategoryApi().then(data => {
  //     console.log(JSON.stringify(data));
  //     setOptions(JSON.stringify(data));
  //   });
  // };
  // if (options.length === 0) return;
  // console.log(JSON.stringify(options));

  const getBackdropClass = () => clsx(s.backdrop, isActive && s.active);

  const handleChange = e => {
    const { name, value } = e.target;
    if (Boolean(Number(value)) === false) {
      Notify.warning('Please, input number');
      return;
    }
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: Number(value),
      };
    });
  };

  const handleSelect = data => {
    const { label, value } = data;
    setForm(prevForm => {
      return {
        ...prevForm,
        [label]: value,
      };
    });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    putOneTransactionApi({ id, date, ...form, type: 'expense' });
    setActive(false);
  };

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
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputField}>
            <label>
              <span className={s.labelTitle}>Per category</span>
              <SelectCategory
                options={options}
                category={category}
                onSelect={handleSelect}
              />
            </label>
          </div>
          <div className={s.inputField}>
            <label>
              <span className={s.labelTitle}>Expense comment</span>
              <input
                name="comment"
                onChange={handleChange}
                value={form.comment}
                className={s.inputText}
                type="text"
                placeholder="Expense comment"
              />
            </label>
          </div>
          <div className={s.inputField}>
            <label>
              <span className={s.labelTitle}>Sum</span>
              <input
                name="sum"
                onChange={handleChange}
                value={form.sum}
                className={s.inputText}
                type="text"
                placeholder="Sum"
              />
            </label>
          </div>
          <button type="submit" className={s.button}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};
