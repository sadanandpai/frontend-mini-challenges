import React, { useContext } from 'react';
import ReactSelect, { MultiValueProps, OptionProps } from 'react-select';
import { components } from 'react-select';
import PropTypes from 'prop-types';
import { ThemeContext } from '@/components/ThemeWrapper';
import { OptionType } from '@fmc/data/types';

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
  const { theme } = useContext(ThemeContext);
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
            overflowY: 'auto',
            background: theme === 'dark' ? '#000000' : '#ffffff',
          }),
          menu: (base) => ({
            ...base,
            zIndex: '2',
          }),
          menuList: (base) => ({
            ...base,
            textAlign: 'left',
            background: theme === 'dark' ? '#000000' : '#ffffff',
          }),
          option: (base, state) => {
            const isDarkTheme = theme === 'dark';
            const isLightTheme = theme === 'light';
            const isSelected = state.isSelected;
            const isFocused = state.isFocused;
            return {
              ...base,
              color: isSelected ? '#ffffff' : isDarkTheme && isFocused ? '#000000' : 'inherit',
              background: (() => {
                if (isDarkTheme) {
                  if (isSelected) return 'blue';
                  if (isFocused) return '#ffffff';
                }
                if (isLightTheme) {
                  if (isSelected) return '#2684FF';
                  if (isFocused) return '#B2D4FF';
                }
                return 'initial';
              })(),
            };
          },
          placeholder: (base) => ({
            ...base,
            color: theme === 'dark' ? '#b0b3b8' : 'grey',
          }),
        }}
      />
    </span>
  );
};

export default CustomSelect;
