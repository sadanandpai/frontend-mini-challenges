import { KeyboardEvent, useState } from "react";

interface Props {
  onComplete: (value: string) => void;
  defaultValue?: string;
}

function Input({ onComplete, defaultValue = "" }: Props) {
  const [value, setValue] = useState(defaultValue);

  const onEntry = () => {
    onComplete(value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEntry();
    }
  };

  return (
    <input
      type="text"
      autoFocus={true}
      onBlur={onEntry}
      onKeyUp={onKeyUp}
      value={value}
      onChange={(e) => setValue((e.target as HTMLInputElement).value)}
    />
  );
}

export default Input;
