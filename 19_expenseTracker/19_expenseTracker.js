const text = document.getElementById('text');
const amount = document.getElementById('amount')
const transaction = document.querySelector('.btn');
const list = document.querySelector('.list');
const history = document.getElementById('history');
const deletebtn = document.querySelector('.delete-btn');
const income = document.getElementById('money-plus');
const expense = document.getElementById('money-minus'); 



//Event Listener
transaction.addEventListener('click', addHistory);

function addHistory(e) {
    let totalIncome = 0;
    const expenseName = text.value;
    const expenseAmount = parseInt(amount.value);
    if (expenseAmount < 0) {
        const listEl = document.createElement('li');
        listEl.className = 'minus';
        listEl.innerHTML = `${expenseName}`;
        const spanEl = document.createElement('span');
        listEl.appendChild(spanEl);
        spanEl.innerHTML = `${expenseAmount}`
        const buttonEl = document.createElement('button');
        buttonEl.className = 'delete-btn';
        listEl.appendChild(buttonEl);
        buttonEl.innerHTML = 'X';
        list.appendChild(listEl);
        history.style.display = 'block';
        // income.innerText = `${-$,expenseAmount}`;

        
    } else {

        const listEl = document.createElement('li');
        listEl.className = 'plus';
        listEl.innerHTML = `${expenseName}`;
        const spanEl = document.createElement('span');
        listEl.appendChild(spanEl);
        spanEl.innerHTML = `${expenseAmount}`
        const buttonEl = document.createElement('button');
        buttonEl.className = 'delete-btn';
        listEl.appendChild(buttonEl);
        buttonEl.innerHTML = 'X';
        list.appendChild(listEl);
        history.style.display = 'block';
        totalIncome = totalIncome + parseInt(expenseAmount);
        console.log(totalIncome)
        

    }

    e.preventDefault()
}

