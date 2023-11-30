import styles from './column-table.module.scss';

function MyTable({ columns, values }: { columns: number; values: number[][] }) {
  return (
    <table className={styles.grid} style={{ gridTemplateColumns: `repeat(${columns}, 50px)` }}>
      <tbody>
        {values.map((row, idx) => (
          <tr key={idx}>
            {row.map((value) => (
              <td key={value} className={styles.cell}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
