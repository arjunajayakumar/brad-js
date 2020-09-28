const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');



const localStorageTrnasactions = JSON.parse(localStorage.getItem('transactions'))

let transactions = localStorage.getItem('transactions') !== null ? localStorageTrnasactions : [];

// Add Transaction
function addTransaction(e) {
    e.preventDefault()

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Fields cannot be Empty')
    } else {
        const transaction = {
            id: generateID(),
            item: text.value,
            amount: +amount.value
        }

        transactions.push(transaction);
        addHistory(transaction)
        updateExpense();

        updateExpenseLOcalStorage()
        text.value = '';
        amount.value = '';
    }
}

// Generate ID
function generateID() {
    return Math.floor(Math.random() * 10000)
}


function addHistory(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.item} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})" >X</button>`;
    list.appendChild(item)

}

// add income & balance
function updateExpense() {
    const amounts = transactions.map(transactions => transactions.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    // console.log(income);

    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    // console.log(expense);

    balance.innerText = `₹${total}`;
    money_plus.innerText = `₹${income}`;
    money_minus.innerText = `₹${expense}`;
}

// Remove transaction
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    init();

    updateExpenseLocalStorage()
}

// Update Local Storage
function updateExpenseLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateExpense()
}

updateExpense()
// Init app
function init() {
    list.innerHTML = '';
    transactions.forEach(addHistory);
}

init()

form.addEventListener('submit', addTransaction)