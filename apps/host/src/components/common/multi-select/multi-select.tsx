import React from 'react';
import ReactSelect, { MultiValueProps, OptionProps } from 'react-select';
import { components } from 'react-select';
import { OptionType } from '../../../../../../shared/data/types/common';
import PropTypes from 'prop-types';

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

Option.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired, // Added prop validation for 'label'
};
const MultiValue = (props: MultiValueProps) => (
  <components.MultiValue {...props}>
    <span>{(props.data as OptionType).label}</span>
  </components.MultiValue>
);

interface Props {
  data: OptionType[];
  width?: string;
  optionSelected: OptionType[] | null;
  setOptionSelected: (selected: OptionType[]) => void;
}
const CustomSelect: React.FC<Props> = ({
  data,
  width = '100%',
  optionSelected,
  setOptionSelected,
}) => {
  const handleChange = (selected: OptionType[]) => {
    setOptionSelected(selected);
  };
  return (
    <span style={{ width: width }}>
      <ReactSelect
        options={data}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option: Option as React.FC<OptionProps>,
          MultiValue: MultiValue as React.FC<MultiValueProps>,
        }}
        onChange={(newValue: unknown) => handleChange(newValue as OptionType[])}
        value={optionSelected}
        styles={{
          control: (base) => ({
            ...base,
            width: width,
            height: '0.1rem',
            textAlign: 'left',
            outline: 'none',
            borderRadius: '5px',
            border: '2px solid #ccc',
            maxHeight: '200px',
            overflowY: 'scroll',
          }),
          menuList: (base) => ({
            ...base,
            textAlign: 'left',
          }),
        }}
      />
    </span>
  );
};

export default CustomSelect;
