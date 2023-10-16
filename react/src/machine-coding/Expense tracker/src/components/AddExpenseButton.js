import React from 'react';
import { Link } from 'react-router-dom';

const AddExpenseButton = () => (
  <Link
    className="button button--add__fixed"
    title="Add Expense"
    to="/create"
  >
    +
  </Link>
);

export default AddExpenseButton;