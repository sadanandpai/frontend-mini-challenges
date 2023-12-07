import { type ChangeEvent, type KeyboardEvent, useState } from "react";
import styles from '../styles.module.css'

interface Props {
  defaultValue?: string;
  onComplete: (value: string) => void;
  validateNode: (name: string) => boolean;
}

function Input({ onComplete, validateNode, defaultValue = "" }: Props) {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = (e.target as HTMLInputElement).value;
    setValue(newVal);

    if (newVal === '') setError('File or folder name cannot be empty');
    else if (!validateNode(newVal)) setError('A file or folder already exists with that name');
    else setError(null);
  }

  const onEntry = () => {
    onComplete(value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEntry();
    }
  };

  return (
    <div className={styles.editableInputContainer}>
      <input
        type="text"
        autoFocus={true}
        onBlur={onEntry}
        onKeyUp={onKeyUp}
        value={value}
        onChange={onChange}
      />
      {error && (
        <div className={styles.editableInputError}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Input;
