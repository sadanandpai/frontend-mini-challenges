import { useState } from 'react';
import styles from './InlineOptions.module.css';

type OptionType = {
  id: string;
  text: string;
  isDisabled?: boolean;
};

const OPTIONS: OptionType[] = [
  {
    id: '1',
    text: '100gm',
  },
  {
    id: '2',
    text: '200gm',
  },
  {
    id: '3',
    text: '400gm',
  },
  {
    id: '4',
    text: '500ml',
    isDisabled: true,
  },
  {
    id: '5',
    text: '800ml',
  },
];

export default function App() {
  return (
    <div className={styles['main']}>
      <div className={styles['select-dahi']}>
        <h2>Select Size of Dahi</h2>
        <InlineOptions options={OPTIONS} />
      </div>
    </div>
  );
}

type InlineOptionsProps = {
  options: OptionType[];
};

function InlineOptions({ options }: InlineOptionsProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string>(OPTIONS[0].id);

  const setOption = (id: string) => setSelectedOptionId(id);

  return (
    <div className={styles['inline-options']}>
      {options.map((option, index) => (
        <Option
          key={index}
          {...option}
          isSelected={option.id === selectedOptionId}
          setOption={setOption}
        />
      ))}
    </div>
  );
}

type OptionProps = OptionType & {
  isSelected?: boolean;
  setOption: (id: string) => void;
};

function Option({ id, text, setOption, isDisabled, isSelected }: OptionProps) {
  const selectOption = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) return;

    const target = e.target as HTMLDivElement;
    const id = target.getAttribute('data-option-id');
    if (!id) return;

    setOption(id);
  };

  return (
    <div
      role="button"
      data-option-id={id}
      onClick={selectOption}
      className={`${styles['option']} ${isSelected ? styles['option-selected'] : ''} ${
        isDisabled ? styles['option-disabled'] : ''
      }`}
    >
      {text}
    </div>
  );
}
