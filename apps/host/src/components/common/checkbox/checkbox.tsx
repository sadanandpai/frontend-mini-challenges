interface Props {
  checked: boolean;
  setNewChallenge: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  className: string;
  containerClass: string;
}
const CustomCheckbox = ({ checked, setNewChallenge, label, className, containerClass }: Props) => {
  return (
    <div className={containerClass}>
      <input
        className={className}
        type="checkbox"
        id="checkbox"
        name="checkbox"
        onChange={(e) => setNewChallenge(e.target.checked)}
        checked={checked}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};
export default CustomCheckbox;
