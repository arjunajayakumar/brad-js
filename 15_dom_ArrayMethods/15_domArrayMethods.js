const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show_millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate_wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();


//Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000)
  }

  addData(newUser);
}



//Double everyOnes Money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 }
  });

  updateDOM();
}

//sort By Richest
function sortByMillionare() {
  data.sort((a, b) => b.money - a.money);

  updateDOM()
}

//Filter millionares
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);
  updateDOM()
}

//calculate Wealth
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc +=  user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);

}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM()
}

//Update DOM
function updateDOM(providedData = data) {
  //Clear the main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
    main.appendChild(element)

  })
}

//Format Number as Money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Event Listeers
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByMillionare);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
