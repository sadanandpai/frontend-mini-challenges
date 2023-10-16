import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { v1 as uuid } from 'uuid';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onRemove = e => {
    e.preventDefault();

    this.props.onRemove({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10) * 100,
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note
    });
  };

  onSubmitSave = e => {
    this.onSubmit(e, 'save');
  };

  onSubmitRemove = e => {
    this.onSubmit(e, 'remove');
  };

  onSubmit = (e, action) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      }, action);
    }
  };

  render() {
    return (
      <form className="expense-form" onSubmit={ this.onSubmit }>
        {this.state.error && <p className="form__error">{ this.state.error }</p> }
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          className="expense-form--item expense-form--item__title"
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          className="expense-form--item expense-form--item__amount"
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={ () => false }
          displayFormat="DD-MM"
          noBorder={true}
          id={uuid()}
        />
        <textarea
          placeholder="Description (optional)"
          value={this.state.note}
          onChange={ this.onNoteChange }
          className="expense-form--item expense-form--item__description"
        >
        </textarea>
        <label htmlFor="submit">
          {
            location.pathname !== '/create' && (
              <button
                className="button button--s button-remove"
                type="submit"
                onClick={ this.onSubmitRemove }
              >Remove</button>
            )
          }
          <button
            className="button button--m"
            type="submit"
            onClick={ this.onSubmitSave }
          >Save</button>
        </label>
      </form>
    );
  }
}