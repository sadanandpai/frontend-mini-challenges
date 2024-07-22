import { maxLimit, minLimit } from '../constants';

interface Props {
  value: number;
  lowerLimit: number;
  upperLimit: number;
  setLowerLimit: React.Dispatch<React.SetStateAction<number>>;
  setUpperLimit: React.Dispatch<React.SetStateAction<number>>;
}

export function LimitControls({
  value,
  lowerLimit,
  upperLimit,
  setLowerLimit,
  setUpperLimit,
}: Props) {
  function lowerLimitHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.valueAsNumber;

    if (Number.isNaN(inputValue)) {
      return setLowerLimit(minLimit);
    } else if (inputValue > upperLimit) {
      setLowerLimit(upperLimit);
    } else if (inputValue < minLimit) {
      setLowerLimit(minLimit);
    } else if (inputValue > value) {
      setLowerLimit(value);
    } else {
      setLowerLimit(inputValue);
    }
  }

  function upperLimitHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.valueAsNumber;

    if (Number.isNaN(inputValue)) {
      return setUpperLimit(maxLimit);
    } else if (inputValue < lowerLimit) {
      setUpperLimit(lowerLimit);
    } else if (inputValue > maxLimit) {
      setUpperLimit(maxLimit);
    } else if (inputValue < value) {
      setLowerLimit(value);
    } else {
      setUpperLimit(inputValue);
    }
  }

  return (
    <>
      <div>
        <label htmlFor="lowerLimit">Lower Limit</label>
        <input
          type="number"
          id="lowerLimit"
          title="Lower Limit"
          value={lowerLimit}
          onChange={lowerLimitHandler}
        />
      </div>

      <div>
        <label htmlFor="upperLimit">Upper Limit</label>
        <input
          type="number"
          id="upperLimit"
          title="Upper Limit"
          value={upperLimit}
          onChange={upperLimitHandler}
        />
      </div>
    </>
  );
}
