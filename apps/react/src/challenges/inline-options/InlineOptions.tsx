import { useCallback, useState } from 'react';
import { OptionType } from './OptionType';
import styles from './InlineOptions.module.css';
import Option from './Option';

type InlineOptionsProps = {
  options: OptionType[];
};

export default function InlineOptions({ options }: InlineOptionsProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string>(options[0].id);

  const setOption = useCallback((id) => setSelectedOptionId(id), []);

  return (
    <div className={styles['inline-options']}>
      {options.map((option) => (
        <Option
          key={option.id}
          {...option}
          isSelected={option.id === selectedOptionId}
          setOption={setOption}
        />
      ))}
    </div>
  );
}
