import Select, {
  //   OptionProps,
  //   components,
  //   ControlProps,
  //   Props,
  StylesConfig,
} from 'react-select';
import s from './SelectData.module.scss';
const date = Date.now();
console.log(date);

const options = [
  { value: date, label: date },
  //   { value: 'Clothing and footwear', label: 'Clothing and footwear' },
  //   { value: 'Cafes and restaurants', label: 'Cafes and restaurants' },
  //   { value: 'Beauty and medicine', label: 'Beauty and medicine' },
  //   { value: 'Health', label: 'Health' },
  //   { value: 'Transport', label: 'Transport' },
  //   { value: 'House', label: 'House' },
  //   { value: 'Other', label: 'Other' },
];

export const SelectData = () => {
  const styles: StylesConfig<options, false> = {
    control: css => ({
      ...css,
      paddingLeft: '1rem',
      width: '223px',
      height: '52px',
      color: 'blue',
      background: '#3A6AF5',
      borderRadius: '16px',
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none',
    }),
    placeholder: base => ({
      ...base,
      fontFamily: '"Lato"',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '19px',
      color: 'rgba(243, 243, 243, 0.4)',
    }),

    option: ccs => ({
      padding: '5px',
      borderRadius: '10px',
      paddingLeft: '15px',
      marginBottom: '5px',
      //   width: '223px',

      ':hover': {
        background: ' #3A6AF5',
        borderRadius: '10px',
        color: 'white',
      },
    }),
  };

  return (
    <Select
      // defaultValue="date"
      placeholder="Month"
      isSearchable={false}
      options={options}
      className={s.select}
      styles={styles}
    />
  );
};
