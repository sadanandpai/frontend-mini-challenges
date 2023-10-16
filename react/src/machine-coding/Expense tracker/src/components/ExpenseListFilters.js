import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { v1 as uuid } from 'uuid';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <form className="filter-form">
        <input
          type="text"
          placeholder="Search expenses..."
          value={ this.props.filters.text }
          onChange={ this.onTextChange }
          className="filter-form--item filter-form--item__search"
        />
        <label htmlFor="sort-by">
          <span>Sort by:</span>
          <select
            value={ this.props.filters.sortBy }
            onChange={ this.onSortChange }
            name="sort-by"
            className="filter-form--item filter-form--item__sort"
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </label>
        <label htmlFor="filter-by">
          <span>Filter by date:</span>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId={uuid()}
            endDate={this.props.filters.endDate}
            endDateId={uuid()}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={false}
            numberOfMonths={1}
            isOutsideRange={ () => false }
            displayFormat='DD-MM'
            firstDayOfWeek={ 1 }
            noBorder={ true }
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
