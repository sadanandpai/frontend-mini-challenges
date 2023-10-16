const balanceAmount = document.getElementById('balance-amount');
const transactionList = document.getElementById('transaction-list');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionTypeInput = document.getElementById('transaction-type');
const addButton = document.getElementById('add-button');

let balance = 0;

function updateBalance() {
  balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

function addTransaction(description, amount, type) {
  const transaction = document.createElement('li');
  transaction.classList.add(type);
  transaction.innerHTML = `
        <span>${description}</span>
        <span>$${amount.toFixed(2)}</span>
    `;
  transactionList.appendChild(transaction);
  balance += type === 'income' ? amount : -amount;
  updateBalance();
}

addButton.addEventListener('click', () => {
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  const type = transactionTypeInput.value;

  if (description.trim() === '' || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid description and amount.');
    return;
  }

  addTransaction(description, amount, type);
  descriptionInput.value = '';
  amountInput.value = '';
});

// Initialize balance
updateBalance();
