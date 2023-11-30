import { FieldData } from '../utils/initialData';
import styles from '../styles.module.scss';

interface Props {
  fields: FieldData;
  dispatch: React.Dispatch<Partial<Record<keyof FieldData, string>>>;
}

function Fields({ fields, dispatch }: Props) {
  return (
    <form className={styles.form}>
      <div className={styles.formField}>
        <label htmlFor="name">Name: </label>
        <input
          className={styles.formInput}
          type="text"
          id="name"
          value={fields.name}
          onChange={(e) => dispatch({ name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="companyName">Company Name: </label>
        <input
          className={styles.formInput}
          type="text"
          id="companyName"
          value={fields.companyName}
          onChange={(e) => dispatch({ companyName: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="lastDate">Effective date: </label>
        <input
          className={styles.formInput}
          type="date"
          id="effectiveDate"
          value={fields.effectiveDate}
          onChange={(e) => dispatch({ effectiveDate: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="lastDate">Last date: </label>
        <input
          className={styles.formInput}
          type="date"
          id="lastDate"
          value={fields.lastDate}
          onChange={(e) => dispatch({ lastDate: e.target.value })}
        />
      </div>
    </form>
  );
}

export default Fields;
