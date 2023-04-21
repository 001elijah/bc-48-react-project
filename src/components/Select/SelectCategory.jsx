import Select, { StylesConfig } from 'react-select';
import './SelectCategory.scss';
import { useState } from 'react';

// categories замість options

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

export default function SelectCategory({ getChange }) {
  // const [selectedOption, setSelectedOption] = useState(null);
  // const [option, getOption] = useState([]);
  //  //  записать категорії в локальний стейт
  //  //  помістить прийшовші категорії в селект

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

  // console.log(getListOfCategory());
  // useEffect(() => {
  //   console.log('CashflowPage');
  //   // dispatch(getListOfCategory());
  // }, [dispatch]);

  return (
    <Select
      classNamePrefix="react-select"
      className={'react-select-container'}
      onChange={getChange}
      options={options}
      theme={theme => ({ ...theme, borderRadius: '16px' })}
      isSearchable={false}
      indicatorSeparator={false}
    />
  );
}
