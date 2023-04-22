import Select from 'react-select';
import './SelectCategory.scss';
import { getListOfCategory } from 'redux/operations/categoriesOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useState } from 'react';

// categories замість options

export default function SelectCategory({ getChange }) {
  const categories = useSelector(state => state?.categories?.categories);
  // console.log(categories);
  const dispatch = useDispatch();

  const option = categories?.map(({ name, title }) => {
    return {
      value: name,
      label: title,
    };
  });

  useEffect(() => {
    console.log('CashflowPage');
    dispatch(getListOfCategory());
  }, []);

  return (
    <Select
      classNamePrefix="react-select"
      className={'react-select-container'}
      onChange={getChange}
      options={option}
      theme={theme => ({ ...theme, borderRadius: '16px' })}
      isSearchable={false}
      indicatorSeparator={false}
    />
  );
}
