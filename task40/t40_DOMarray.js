const addUser = document.getElementById("add-user");
const doubleMoney = document.getElementById("double-money");
const millionaire = document.getElementById("millionaire");
const sortMoney = document.getElementById("sort");
const wealth = document.getElementById("wealth");
const main = document.getElementById("heading");

let userArray = [];

fetchUser();
fetchUser();
fetchUser();

//Event Listeners
addUser.addEventListener("click", fetchUser);
doubleMoney.addEventListener("click", doubleMny);
millionaire.addEventListener("click", showMillionaires);
sortMoney.addEventListener("click", sortRichest);
wealth.addEventListener("click", calcTotalWealth);

//Fetch user Data
async function fetchUser() {
  const userInfo = await fetch("https://randomuser.me/api");
  const user = await userInfo.json();

  const data = user.results[0];

  let newUser = {
    name: `${data.name.first} ${data.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

//add userData
function addData(data) {
  userArray.push(data);
  updateUI(userArray);
}

//Double money
function doubleMny() {
  userArray = userArray.map((data) => {
    return { ...data, money: data.money * 2 };
  });

  updateUI(userArray);
}

//Show Millionaire
function showMillionaires() {
  userArray = userArray.filter((data) => data.money > 1000000);
  updateUI(userArray);
}

//sort Richest
function sortRichest() {
  userArray = userArray.sort((a, b) => {
    return b.money - a.money;
  });
  updateUI(userArray);
}

//Calculate total Wealth
function calcTotalWealth() {
  const totalWealth = userArray.reduce((acc, data) => acc + data.money, 0);
  const div = document.createElement("div");
  div.innerHTML = `<h3>Total wealth: <strong>${formatMoney(
    totalWealth
  )}</strong></h3>`;
  main.appendChild(div);
}

//Update UI
function updateUI(userDetails) {
  //Clear the main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  userDetails.forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("person");
    div.innerHTML = `<strong>${data.name}</strong>${formatMoney(data.money)}`;
    main.appendChild(div);
  });
}

//Format Money
function formatMoney(moneyInfo) {
  return "$" + moneyInfo.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
