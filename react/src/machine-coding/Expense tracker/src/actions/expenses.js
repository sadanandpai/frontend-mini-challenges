import database from '../firebase/firebase';
import { toast } from 'react-toastify';

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = expenseData;
  const expense = {
    description, note, amount, createdAt
  };

  toast.success('🤑 Expense is saved!', {
    autoClose: 5000,
    closeButton: false,
    closeOnClick: true,
    hideProgressBar: true,
    position: 'bottom-center'
  });

  return database.ref(`users/${uid}/expenses`).push(expense).then(ref => {
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }));
  });
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => (dispatch, getState) => {
  toast.warning('👎 Expense is removed!', {
    autoClose: 5000,
    closeButton: false,
    closeOnClick: true,
    hideProgressBar: true,
    position: 'bottom-center'
  });

  const uid = getState().auth.uid;
  return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
    dispatch(removeExpense({ id }));
  });
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => (dispatch, getState) => {
  toast.success('🤑 Expense is saved!', {
    autoClose: 5000,
    closeButton: false,
    closeOnClick: true,
    hideProgressBar: true,
    position: 'bottom-center'
  });
  
  const uid = getState().auth.uid;
  return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
    dispatch(editExpense(id, updates));
  });
};

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return database.ref(`users/${uid}/expenses`).once('value').then(snapshot => {
    const expenses = [];

    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    dispatch(setExpenses(expenses));
  });
};
