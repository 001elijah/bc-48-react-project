import Select, {
  //   OptionProps,
  components,
  //   ControlProps,
  //   Props,
  StylesConfig,
} from 'react-select';
import { useState } from 'react';
import s from './Select.module.scss';

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

export default function Selected() {
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(selectedOption);
  //   const EMOJIS = ['👍'];

  //   const Control = ({ children, ...props }: ControlProps<options, false>) => {
  //     // @ts-ignore
  //     // const { emoji, onEmojiClick } = props.selectProps;
  //     const style = { cursor: 'pointer' };

  //     return (
  //       <components.Control {...props}>
  //         <span style={style}>{EMOJIS}</span>
  //         {children}
  //       </components.Control>
  //     );
  //   };

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
        // color: 'white',
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

  //   const customStyles = {
  //     control: base => ({
  //       //   ...base,
  //       //   height: '74px',
  //     }),
  //     placeholder: () => ({
  //       color: 'red',
  //     }),
  //     indicatorSeparator: base => ({
  //       ...base,
  //       minHeight: '1px',
  //       height: '2px',
  //     }),
  //     indicatorsContainer: base => ({
  //       ...base,
  //       height: 200,
  //       minHeight: 100,
  //       width: 204,
  //     }),
  //   };

  const Control = ({ children, ...props }) => (
    // console.log(props),
    // console.log(children),
    <components.Control {...props}>👍{children}</components.Control>
    // (<components.Option {...props}>👍{children}</components.Option>)
    // <compo
  );

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
        components={{ Control }}
        styles={styles}
        onChange={setSelectedOption}
        placeholder={'Choose'}
        options={options}
        theme={theme => ({ ...theme, borderRadius: '16px' })}
        isSearchable={false}
      />
    </div>
  );
}

// const CustomOption = ({ innerProps, isDisabled }) =>
//   !isDisabled ? (
//     <div {...innerProps}>{/* your component internals */}</div>
//   ) : null;

// class Component extends React.Component {
//   render() {
//     return <Select components={{ Option: CustomOption }} />;
//   }
// }
