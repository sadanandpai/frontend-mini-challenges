import styles from './InlineOptions.module.css';
import { OptionType } from './OptionType';

type OptionProps = OptionType & {
  isSelected?: boolean;
  setOption: (id: string) => void;
};

export default function Option({ id, text, setOption, isDisabled, isSelected }: OptionProps) {
  const selectOption = (id: string) => {
    if (isDisabled) return;
    setOption(id);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const id = target.getAttribute('data-option-id');
    if (!id) return;
    selectOption(id);
  };

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
