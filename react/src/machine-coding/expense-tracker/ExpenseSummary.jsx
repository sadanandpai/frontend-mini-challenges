import React from "react";
import './css/ExpenseList.css'
function ExpenseSummary({ expenses }) {
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <div className="main-container">
      <h2>Summary</h2>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      {/* Additional filters and summaries can be added here */}
    </div>
  );
}

export default ExpenseSummary;
