import React from 'react';
import styles from './css/ExpenseList.module.scss';

function ExpenseSummary({ expenses }) {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className={styles.mainContainer}>
      <h2>Summary</h2>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      {/* Additional filters and summaries can be added here */}
    </div>
  );
}

export default ExpenseSummary;
