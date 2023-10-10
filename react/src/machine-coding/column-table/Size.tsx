import styles from './column-table.module.scss';

function Size({ rows, setRows, columns, setColumns }) {
  return (
    <section className={styles.size}>
      <label htmlFor="rows">Rows :: {rows}</label>
      <input
        type="range"
        name="rows"
        id="rows"
        min="2"
        max="8"
        value={rows}
        onChange={(e) => setRows(+e.target.value)}
      />

      <label htmlFor="columns">Columns :: {columns}</label>
      <input
        type="range"
        name="columns"
        id="columns"
        min="2"
        max="8"
        value={columns}
        onChange={(e) => setColumns(+e.target.value)}
      />
    </section>
  );
}

export default Size;
