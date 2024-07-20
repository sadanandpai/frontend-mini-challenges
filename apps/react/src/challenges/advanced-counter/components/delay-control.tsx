import { maxDelay, minDelay } from '../constants';

interface Props {
  delay: number;
  setDelay: React.Dispatch<React.SetStateAction<number>>;
}

export function DelayControl({ delay, setDelay }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputDelay = (e.target as HTMLInputElement).valueAsNumber;
    setDelay(inputDelay);
  }

  return (
    <div className="flex-center">
      <label htmlFor="delay">Delay</label>

      <input
        type="range"
        id="delay"
        title="Delay value"
        value={delay}
        onChange={handleChange}
        min={minDelay}
        max={maxDelay}
        step="1"
      />

      <output htmlFor="delay">{delay}s</output>
    </div>
  );
}
