import Select, {
  //   OptionProps,
  // components,
  //   ControlProps,
  //   Props,
  StylesConfig,
} from 'react-select';
import { useState } from 'react';
import s from './SelectCategory.module.scss';

//   <Select
//        value={value}
//        onChange={handleChange}
//        sx={() => styles(height)}
//   >

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

export default function SelectCategory() {
  const [selectedOption, setSelectedOption] = useState(null);

  // console.log(selectedOption);

  const styles: StylesConfig<options, false> = {
    control: css => ({
      ...css,
      paddingLeft: '1rem',
      width: '343px',
      height: '74px',
      color: 'blue',
      background: '#252C41',
      borderRadius: '16px',
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none',
    }),
    option: ccs => ({
      //   ...css,
      //   background: 'red',
      //   position: 'relative',
      padding: '5px',

      paddingLeft: '15px',
      marginBottom: '5px',

      ':hover': {
        background: ' #3A6AF5',
        borderRadius: '10px',
        color: 'white',
      },
      '::before': {
        position: 'absolute',
        backgroundImage: 'url("./sprait.svg#icon-vector")',
        //   borderRadius: 10,
        content: '""',
        display: 'block',
        marginRight: '18px',

        height: '10',
        width: '10',
      },
    }),
  };

  // //// start стрелка

  //   const CaretDownIcon = () => {
  //     return <i className="fas fa-caret-down"></i>;
  //   };
  //    // /// //// стрелка которая зозварачивает список

  //   const DropdownIndicator = props => {
  //     return (
  //       <components.DropdownIndicator {...props}>
  //         <CaretDownIcon />
  //       </components.DropdownIndicator>
  //     );
  //   };

  //    // /// //// стрелка которая зозварачивает список end strelka

  //   const indCont = ({}) => {
  //     <components.IndicatorsContainer></components.IndicatorsContainer>;
  //   };

  return (
    <div className="App">
      <Select
        // {...props}
        // defaultValue={options[0]}
        className={s.select}
        // components={{ Option: CustomOption }}
        // components={{ Control }}
        styles={styles}
        onChange={setSelectedOption}
        placeholder={'Per category'}
        options={options}
        theme={theme => ({ ...theme, borderRadius: '16px' })}
        isSearchable={false}
        indicatorSeparator={false}
      />
    </div>
  );
}
