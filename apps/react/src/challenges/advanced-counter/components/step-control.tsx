import { maxStep, minStep } from '../constants';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const StepControl = function Step({ step, setStep }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.valueAsNumber;

    if (Number.isNaN(value)) {
      return setStep(1);
    } else if (value > maxStep) {
      setStep(maxStep);
    } else if (value < minStep) {
      setStep(minStep);
    } else {
      setStep(value);
    }
  }

  return (
    <div>
      <label htmlFor="step">Increment/Decrement by</label>
      <input
        id="step"
        type="number"
        title="Step value"
        min={minStep}
        max={maxStep}
        value={step}
        onChange={handleChange}
      />
    </div>
  );
};
