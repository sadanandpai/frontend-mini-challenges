import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpensesList from "./ExpensesList";
import ExpenseSummary from "./ExpenseSummary";



function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="App">
      <h1></h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpensesList expenses={expenses} onDeleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
    </div>
  );
}

export default App;
