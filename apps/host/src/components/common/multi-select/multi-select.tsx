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
      controlShouldRenderValue={false}
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
        option: (base, state) => {
          return {
            ...base,
            color: state.isSelected
              ? '#ffffff'
              : theme === 'dark' && state.isFocused
                ? '#000000'
                : 'inherit',
          };
        },
        placeholder: (base) => ({
          ...base,
          color: '#777',
        }),
      }}
    />
  );
}
