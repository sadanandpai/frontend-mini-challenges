import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import AddExpenseButton from './AddExpenseButton';
import 'react-toastify/dist/ReactToastify.min.css';

const ExpenseDashboardPage = () => (
  <React.Fragment>
    <header className="page-header">
      <ExpenseListFilters />
      <ExpenseSummary />
    </header>
    <ExpenseList />
    <AddExpenseButton />
  </React.Fragment>
);

export default ExpenseDashboardPage;
