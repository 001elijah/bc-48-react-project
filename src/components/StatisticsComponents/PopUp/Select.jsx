import { useSelector } from 'react-redux';
import Select from 'react-select';
import '../../../components/Select/SelectCategory.scss';

const colourStyles = {
  control: styles => ({
    ...styles,
    width: '275px',
    border: 'none',
    boxShadow: 'none',
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
    return {
      ...styles,
      backgroundColor: ' #fff',
      fontFamily: 'Lato',
    };
  },
};

export default function SelectCategory({ currentCategory, setCategory }) {
  const categories = useSelector(state => state?.categories?.categories);

  const category = categories?.map(({ name, title }) => {
    return {
      value: name,
      label: title,
    };
  });

  const defaultcategory = category.find(categoryId => {
    return categoryId.value === currentCategory;
  });

  return (
    <Select
      classNamePrefix="react-select"
      className={'react-select-container'}
      styles={colourStyles}
      name="category"
      onChange={setCategory}
      options={category}
      isSearchable={false}
      defaultValue={defaultcategory}
    />
  );
}
