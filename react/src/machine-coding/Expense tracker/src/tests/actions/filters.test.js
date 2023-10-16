import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('should generate set text filter with provided text action object', () => {
  const action = setTextFilter('Search this text');
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: 'Search this text',
  });
});

test('should generate set text filter with default text action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: '',
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});
