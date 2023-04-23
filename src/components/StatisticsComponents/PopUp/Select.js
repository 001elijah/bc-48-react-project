import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getListOfCategory } from '../../../redux/operations/categoriesOperations';
import '../../../components/Select/SelectCategory.scss';
// import s from './Popup.module.scss';

const colourStyles = {
  control: styles => ({
    ...styles,
    width: '275px',
    border: 'none',
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
    color: '#f3f3f3',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: ' #191D28',
      color: '#f3f3f3',
      cursor: isDisabled ? 'not-allowed' : 'default',
      fontFamily: 'Lato',
    };
  },
};

export default function SelectCategory({ currentCategory, changeCategory }) {
  const [categoryValue, setCategoryValue] = useState('');
  const dispatch = useDispatch();

  const categories = useSelector(state => state?.categories?.categories);
  useEffect(() => {
    dispatch(getListOfCategory());
  }, [dispatch]);

  useEffect(() => {
    changeCategory(categoryValue);
  }, [categoryValue, changeCategory]);

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
  }, [currentCategory, category]);

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
