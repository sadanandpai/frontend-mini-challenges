import React from "react";
import './css/ExpenseList.css';

function ExpensesList({ expenses, onDeleteExpense }) {
  return (
    <div className="main-container">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.date} - ${expense.amount} - {expense.category}
            <button className="btn-red" onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;
