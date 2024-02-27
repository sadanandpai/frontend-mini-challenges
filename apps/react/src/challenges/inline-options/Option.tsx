import { useCallback } from 'react';
import styles from './InlineOptions.module.css';
import { OptionType } from './OptionType';

type OptionProps = OptionType & {
  isSelected?: boolean;
  setOption: (id: string) => void;
};

export default function Option({ id, text, setOption, isDisabled, isSelected }: OptionProps) {
  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;
    const target = e.target as HTMLButtonElement;
    const id = target.getAttribute('data-option-id');
    if (!id) return;
    setOption(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      data-option-id={id}
      onClick={onClick}
      className={`${styles['option']} ${isSelected ? styles['option-selected'] : ''} ${
        isDisabled ? styles['option-disabled'] : ''
      }`}
    >
      {text}
    </button>
  );
}
