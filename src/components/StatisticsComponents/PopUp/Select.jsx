import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import '../../../components/Select/SelectCategory.scss';
// import s from './Popup.module.scss';

const colourStyles = {
  control: styles => ({
    ...styles,
    width: '275px',
    border: 'none',
    boxShadow: "none",
    backgroundColor: '#252C4180',
    height: '74px',
    outline: 'none',
    padding: '34px 18px 24px',
    marginBottom: '18px',
    borderRadius: '16px',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    color: '#fff',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: ' #fff',
      // cursor: isDisabled ? 'not-allowed' : 'default',
      fontFamily: 'Lato',
    };
  },
};

export default function SelectCategory({ currentCategory, changeCategory }) {
  const [categoryValue, setCategoryValue] = useState('');
  const dispatch = useDispatch();

  const categories = useSelector(state => state?.categories?.categories);

  useEffect(() => {
    changeCategory(categoryValue);
  }, [categoryValue]);

  const category = categories?.map(({ name, title }) => {
    return {
      value: name,
      label: title,
    };
  });

  useEffect(() => {
    setCategoryValue(
      category.find(categoryId => {
        return categoryId.value === currentCategory;
      })
    );
  }, []);

  return (
    <Select
      classNamePrefix="react-select"
      className={'react-select-container'}
      styles={colourStyles}
      name="category"
      onChange={setCategoryValue}
      options={category}
      value={categoryValue}
      isSearchable={false}
    />
  );
}
