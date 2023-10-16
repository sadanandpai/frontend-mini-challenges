import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense, action) => {
    action === 'save'
      ? this.props.startEditExpense(this.props.expense.id, expense)
      : this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <React.Fragment>
        <header className="page-header">
          <h1 className="page-header__title">Edit Expense</h1>
        </header>
        <ExpenseForm
          expense={ this.props.expense }
          onSubmit={ this.onSubmit }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
