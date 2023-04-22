import { useEffect, useState } from 'react';
import Select from 'react-select';
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

export default function SelectCategory({ category, options }) {

  const [fieldValue, setFieldValue] = useState();

  useEffect(() => {
    console.log('selrct',category)
    setFieldValue(
      options.find(categoryID => {
        return categoryID.title === category;
      })
    );
  }, [options, category]);

  return (
    <Select
      styles={colourStyles}
      name="category"
      onChange={setFieldValue}
      options={options}
      value={fieldValue}
    />
  );
}
