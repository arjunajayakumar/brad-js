const text = document.getElementById('text');
const amount = document.getElementById('amount');
const transaction = document.querySelector('.btn');
const list = document.querySelector('.list');
const history = document.getElementById('history');
const deletebtn = document.querySelector('.delete-btn');
const income = document.getElementById('money-plus');
const expense = document.getElementById('money-minus');
const balance = document.getElementById('balance');
const warning = document.getElementById('warning');

let totalAmount = 0;
let expRate = 0;
//Event Listener
transaction.addEventListener('click', addHistory);
list.addEventListener('click', deleteItem);
document.addEventListener('DOMContentLoaded', getItems);


//add Income
function addIncome(expAmount) {
    totalAmount += parseInt(expAmount);
    text.value = '';
    amount.value = '';
    income.innerText = `₹ ${totalAmount}`;
    balance.innerText = `₹ ${totalAmount}`;
}

//add Expense
function addExpense(expAmount) {
    expRate += parseInt(expAmount);
    text.value = '';
    amount.value = '';
    expense.innerText = `₹ ${expRate}`;
    balance.innerHTML = `₹ ${parseInt(totalAmount)}` + `${parseInt(expRate)}`;
    
}

let expenseName;
let expenseAmount;

//Add entries
function addHistory(e) {
    expenseName = text.value;
    expenseAmount = parseInt(amount.value);

    if (expenseAmount === '' || expenseName === '') {
        warning.style.display = 'block';

    } else if (expenseAmount < 0) {
        const listEl = document.createElement('li');
        listEl.className = 'minus';
        listEl.innerHTML = `${expenseName}`;
        const spanEl = document.createElement('span');
        listEl.appendChild(spanEl);
        spanEl.innerHTML = `₹${expenseAmount}`;
        const buttonEl = document.createElement('button');
        buttonEl.className = 'delete-btn';
        listEl.appendChild(buttonEl);
        buttonEl.innerHTML = 'X';
        list.appendChild(listEl);
        history.style.display = 'block';
        // addExpense(expenseAmount);
        dataStore(expenseName, expenseAmount);
    } else {
        const listEl = document.createElement('li');
        listEl.className = 'plus';
        listEl.innerHTML = `${expenseName}`;
        const spanEl = document.createElement('span');
        listEl.appendChild(spanEl);
        spanEl.innerHTML = `₹${expenseAmount}`;
        const buttonEl = document.createElement('button');
        buttonEl.className = 'delete-btn';
        listEl.appendChild(buttonEl);
        buttonEl.innerHTML = 'X';
        list.appendChild(listEl);
        history.style.display = 'block';
        // addIncome(expenseAmount);
        dataStore(expenseName, expenseAmount);
    }
    e.preventDefault()
}

//Delete item
function deleteItem(e) {
    if (e.target.classList.contains('delete-btn')) {
        const expval = e.target.parentElement.children[0].textContent;
        const expName = e.target.parentElement.firstChild.textContent;

        if (e.target.parentElement.className === 'plus') {
            removeFromLs(expName);
            addIncome(expval);
        } else {
            removeFromLs(expName);
            addExpense(-1 * expval);
            console.log(expval)
        }
        e.target.parentElement.remove();
    }
}

//Local storage

function dataStore(name, money) {
    let entries;
    if (localStorage.getItem('entries') === null) {
        entries = [];
    } else {
        entries = JSON.parse(localStorage.getItem('entries'));
    }

    entries.push({ inputText: name, value: money });
    localStorage.setItem('entries', JSON.stringify(entries));

}

//get from localStorage
function getItems() {
    let getItems;

    if (localStorage.getItem('entries') === null) {
        getItems = [];
    } else {
        getItems = JSON.parse(localStorage.getItem('entries'));
    }

    //Populate UI
    getItems.forEach(res => {
        if (res.value > 0) {
            addIncome(res.value);
            const li = document.createElement('li');
            li.className = 'plus';
            li.innerHTML = `${res.inputText}`;

            const span = document.createElement('span');
            span.innerHTML = `${res.value}`;
            li.appendChild(span);

            const button = document.createElement('button');
            button.className = 'delete-btn';
            li.appendChild(button);
            button.innerHTML = 'X';
            list.appendChild(li);

            history.style.display = 'block';

        } else {
            addExpense(res.value);
            const li = document.createElement('li');
            li.className = 'minus';
            li.innerHTML = `${res.inputText}`;

            const span = document.createElement('span');
            span.innerHTML = `${res.value}`;
            li.appendChild(span);

            const button = document.createElement('button');
            button.className = 'delete-btn';
            li.appendChild(button);
            button.innerHTML = 'X';

            list.appendChild(li);

            history.style.display = 'block';

        }
    })

}

// Remove from LS
function removeFromLs(intemName) {
    let entries;

    if (localStorage.getItem('entries') === null) {
        entries = [];
    } else {
        entries = JSON.parse(localStorage.getItem('entries'));
    }

    entries.forEach((data, index) => {
        if (data.inputText === intemName) {
            entries.splice(index, 1);
        }
    })

    localStorage.setItem('entries', JSON.stringify(entries));
}
