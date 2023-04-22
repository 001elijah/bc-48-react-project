import Select, { components } from 'react-select';
import './SelectCategory.scss';
import { getListOfCategory } from 'redux/operations/categoriesOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Icon } from './Icon/Icon';

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
    // console.log('CashflowPage');
    dispatch(getListOfCategory());
  }, [dispatch]);

  const { Option } = components;
  const IconOption = props => {
    return (
      <Option {...props}>
        <Icon
          name={props.data.value}
          width={18}
          height={18}
          // secondaryClassName={s.categoryIcon}
        />
        {props.data.label}
      </Option>
    );
  };

  return (
    <Select
      classNamePrefix="react-select"
      className={'react-select-container'}
      // components={{ Option: IconOption }}
      onChange={getChange}
      options={option}
      theme={theme => ({ ...theme, borderRadius: '16px' })}
      isSearchable={false}
      indicatorSeparator={false}
    />
  );
}
