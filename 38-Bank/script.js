"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Michael Elliott",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Glenmore Vinoya",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Mauricio Moreno",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Shay Rosner",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
function query(classEl) {
  // input: class element. ex. '.welcome'
  return document.querySelector(classEl);
}
const labelWelcome = query(".welcome");
const labelDate = query(".date");
const labelBalance = query(".balance__value");
const labelSumIn = query(".summary__value--in");
const labelSumOut = query(".summary__value--out");
const labelSumInterest = query(".summary__value--interest");
const labelTimer = query(".timer");

const containerApp = query(".app");
const containerMovements = query(".movements");

const btnLogin = query(".login__btn");
const btnTransfer = query(".form__btn--transfer");
const btnLoan = query(".form__btn--loan");
const btnClose = query(".form__btn--close");
const btnSort = query(".btn--sort");

const inputLoginUsername = query(".login__input--user");
const inputLoginPin = query(".login__input--pin");
const inputTransferTo = query(".form__input--to");
const inputTransferAmount = query(".form__input--amount");
const inputLoanAmount = query(".form__input--loan-amount");
const inputCloseUsername = query(".form__input--user");
const inputClosePin = query(".form__input--pin");

/* PArt 1: New code to add movement to bank */
//function displayMov(mov) {
const displayMov = function (mov) {
  //erase html hardcoded data
  containerMovements.innerHTML = "";
  for (let i = 0; i < mov.length; i++) {
    // movement at every iteration is less than 0 or more than
    // less than 0 = withdrawal
    //more than 0 = deposit
    let type = "";
    if (mov[i] > 0) type = "deposit";
    else type = "withdrawal";

    //template literal to add to DOM every iteration
    const html = `
    <div class='movements__row'>
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}
      </div>
      <div className="movements__value">${mov[i]}</div>
    </div>
  `;
    //insert html constant after beginning containerMovements
    containerMovements.insertAdjacentHTML("afterbegin", html);
  }
};
/*  Part 1: Refactor ES6+, arrow functions, ternary conditionals*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.19;
const displayTransactionsDOM = (transactions) => {
  containerMovements.innerHTML = "";
  transactions.forEach((transaction, i) => {
    const type = transaction > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class='movements__row'>
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">$${(transaction * eurToUsd).toFixed(
          2
        )}</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayTransactionsDOM(movements);
/* Part 2: conversion currency */
const movementsUSDforOfLoop = [];
//for of loop
for (const trans of movements) movementsUSDforOfLoop.push(trans * eurToUsd);
//console.log(movementsUSDforOfLoop);

/* ES6+, arrow function*/
const transactionsUSD = movements.map((transaction) => transaction * eurToUsd);
//console.log(transactionsUSD);

const transactionsDesc = movements.map(
  (trans, i) =>
    `Transaction ${i + 1}: You ${
      trans > 0 ? "deposited" : "withdrew"
    } ${Math.abs(trans)}`
);
//console.log(transactionsDesc);

/* Part 3: create usernames */

function userName(accounts) {
  for (let i = 0; i < accounts.length; i++) {
    let userParts = accounts[i].owner.toLowerCase().split(" ");
    let firstLetters = "";

    for (let j = 0; j < userParts.length; j++) {
      firstLetters += userParts[j][0];
    }
    accounts[i].username = firstLetters;
  }
  console.log(accounts);
  return accounts;
}
//userName(accounts);
/* ES6+, arrow functions */
const createUserNames = (accounts) => {
  accounts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((firstLetter) => firstLetter[0])
      .join("");
  });
};
createUserNames(accounts);
//console.log(accounts);
/* Part 4:  Create an array of deposits*/
const deposits = function (transactions) {
  // console.log(movements);
  let depositsTotal = 0;
  for (let tran of transactions) {
    if (tran > 0) {
      depositsTotal += tran;
    }
  }
  return depositsTotal;
};
// console.log(deposits(account2.movements));
const deposit = movements.filter((trans) => trans > 0);
//console.log(deposit);

/* Part 5: array of withdrawals */
const withdrawal = movements.filter((trans) => trans < 0);
//console.log(withdrawal);

/* Part 6: array of totals */
let balanceForLoop = 0;
for (const trans of movements) balanceForLoop += trans;

const total = movements.reduce((total, transaction) => total + transaction, 0);
//DOM
const displayBalance = (transactions) => {
  const balance = transactions
    .reduce((total, trans) => total * eurToUsd + trans, 0)
    .toFixed(2);
  labelBalance.textContent = `$${balance}`;
};
displayBalance(account1.movements);

/* Part 7: Change EUR to USD */
const exchange = function (trans) {
  const newArr = [];
  for (const i in trans) {
    newArr.push(trans[i] * eurToUsd);
  }
  return newArr;
};
//console.log(exchange(movements));

const totalUSD = movements
  .map((num) => num * eurToUsd)
  .reduce((total, trans) => total + trans, 0);
//console.log(totalUSD);

const depositsUSD = movements
  .filter((trans) => trans > 0)
  .map((num) => num * eurToUsd)
  .reduce((total, trans) => total + trans, 0);
//console.log(depositsUSD);

const withdrawalsUSD = movements
  .filter((trans) => trans < 0)
  .map((num) => num * eurToUsd)
  .reduce((total, trans) => total + trans, 0);
//console.log(withdrawalsUSD);

const displaySummary = (transactions) => {
  const totalDepositsUSD = transactions
    .filter((trans) => trans > 0)
    .map((num) => num * eurToUsd)
    .reduce((total, trans) => total + trans, 0)
    .toFixed(2);
  labelSumIn.textContent = `$${totalDepositsUSD}`;
  const totalWithdrawalsUSD = transactions
    .filter((trans) => trans < 0)
    .map((num) => num * eurToUsd)
    .reduce((total, trans) => total + trans, 0)
    .toFixed(2).slice(1);
  labelSumOut.textContent = `$${totalWithdrawalsUSD}`;
  const interestTotalUSD = transactions
    .filter((trans) => trans > 0)
    .map((num) => (num * eurToUsd * 1.2) / 100)
    .reduce((interest, trans) => interest + trans, 0)
    .toFixed(2);
  labelSumInterest.textContent = `$${Math.abs(interestTotalUSD)}`;
};
displaySummary(movements);

/* Part 8: find account to log in */

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  containerApp.style.opacity = 100;
});

/* Extra tasks */
/* add movements max and min functions and elements to the DOM */
/* Create Unit tests */
