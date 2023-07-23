import styles from './Password.module.css';

export default function PasswordTable({ saveNameAndPass }) {
  return (
    <table className={styles['password-table']}>
      <thead>
        <tr>
          <th>Name of password</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {saveNameAndPass.map((listItem, index) => {
          return (
            <tr key={index}>
              <td>{listItem.name}</td>
              <td>{listItem.pass}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

PasswordTable.propTypes;
