import styles from '../styles.module.scss';

function TemplateSelector({ template, setTemplate }: any) {
  const onchange = (e: any) => {
    setTemplate(e.target.value);
  };

  return (
    <form className="text-center">
      <label htmlFor="template">Template: </label>
      <select id="template" value={template} onChange={onchange} className={styles.select}>
        {/* <option value="jobApplication">Job Application</option> */}
        {/* <option value="jobSelection">Job Selection</option> */}
        <option value="resignation">Resignation</option>
      </select>
    </form>
  );
}

export default TemplateSelector;
