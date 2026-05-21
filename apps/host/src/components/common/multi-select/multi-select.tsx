import React, { useContext } from 'react';
import ReactSelect, { OptionProps } from 'react-select';

import { OptionType } from '@fmc/data/types';
import { ThemeContext } from '@/components/theme-context';
import { components } from 'react-select';

const Option = (props: OptionProps) => {
  return (
    <div>
      <components.Option {...props}>
        <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

interface Props {
  data: OptionType[];
  optionSelected: OptionType[] | null;
  setOptionSelected: (selected: OptionType[]) => void;
  selectPlaceholder?: string;
}

export function CustomSelect({
  data,
  optionSelected,
  setOptionSelected,
  selectPlaceholder,
}: Props) {
  const { theme } = useContext(ThemeContext);

  const handleChange = (selected: OptionType[]) => {
    setOptionSelected(selected);
  };

  return (
    <ReactSelect
      options={data}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option: Option as React.FC<OptionProps>,
      }}
      onChange={(newValue: unknown) => handleChange(newValue as OptionType[])}
      value={optionSelected}
      placeholder={selectPlaceholder}
      // Show selected values as pills inside the control
      controlShouldRenderValue={true}
      styles={{
        control: (base) => ({
          ...base,
          textAlign: 'left',
          border: '1px solid #ccc',
          background: theme === 'dark' ? '#000000' : '#ffffff',
          '&:hover': {
            border: '1px solid #4a6cf7',
          },
        }),
        menuList: (base) => ({
          ...base,
          textAlign: 'left',
          background: theme === 'dark' ? '#000000' : '#ffffff',
        }),
        option: (base, state) => ({
          ...base,
          color: state.isSelected
            ? '#ffffff'
            : theme === 'dark' && state.isFocused
              ? '#000000'
              : 'inherit',
          backgroundColor: state.isSelected ? 'var(--primary-color)' : undefined,
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: 'var(--primary-color)',
          borderRadius: '4px',
          padding: '2px 6px',
          color: '#fff',
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: '#fff',
          padding: 0,
          margin: 0,
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: '#fff',
          ':hover': { backgroundColor: 'var(--primary-color-dark)' },
        }),
        placeholder: (base) => ({
          ...base,
          color: '#777',
        }),
      }}
    />
  );
}
