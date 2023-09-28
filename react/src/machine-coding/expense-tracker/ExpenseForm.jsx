import React, { useState } from 'react';

import styles from './css/ExpenseForm.module.scss';

function ExpenseForm({ onAddExpense }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddExpense({
      id: Date.now(),
      date,
      amount: parseFloat(amount),
      category,
    });
    setDate('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input
        type="number"
        value={amount}
        placeholder="Please Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
        {/* Add more categories as needed */}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
