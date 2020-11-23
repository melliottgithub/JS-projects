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
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
};

const account2 = {
  owner: "Glenmore Vinoya",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
};

const account3 = {
  owner: "Mauricio Moreno",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
};

const account4 = {
  owner: "Shay Rosner",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
  ],
};

const account5 = {
  owner: "Zen G",
  movements: [-430, -1000, -700, -50, -90],
  interestRate: 0,
  pin: 5555,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
  ],
};

const accounts = [account1, account2, account3, account4, account5];

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
const displayTransactionsDOM = (transactions, sort = false) => {
  containerMovements.innerHTML = "";
  /* Part 12: Sort transaction DOM */
  const trans = sort
    ? transactions.slice().sort((a, b) => a - b)
    : transactions;

  trans.forEach((transaction, i) => {
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
/* Part 2: conversion currency */
const movementsUSDforOfLoop = [];
//for of loop
for (const trans of movements) movementsUSDforOfLoop.push(trans * eurToUsd);

/* ES6+, arrow function*/
const transactionsUSD = movements.map((transaction) => transaction * eurToUsd);

const transactionsDesc = movements.map(
  (trans, i) =>
    `Transaction ${i + 1}: You ${
      trans > 0 ? "deposited" : "withdrew"
    } ${Math.abs(trans)}`
);
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
  return accounts;
}
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
/* Part 4:  Create an array of deposits*/
const deposits = function (transactions) {
  let depositsTotal = 0;
  for (let trans of transactions) {
    if (trans > 0) {
      depositsTotal += trans;
    }
  }
  return depositsTotal;
};
const deposit = movements.filter((trans) => trans > 0);

/* Part 5: array of withdrawals */
const withdrawal = movements.filter((trans) => trans < 0);

/* Part 6: array of totals */
let balanceForLoop = 0;
for (const trans of movements) balanceForLoop += trans;

const total = movements.reduce((total, transaction) => total + transaction, 0);
//DOM
const displayBalance = (account) => {
  account.balance = account.movements.reduce(
    (total, trans) => total + trans * eurToUsd,
    0
  );
  labelBalance.textContent = `$${account.balance.toFixed(2)}`;
};

/* Part 7: Change EUR to USD */
const exchange = function (trans) {
  const newArr = [];
  for (const i in trans) {
    newArr.push(trans[i] * eurToUsd);
  }
  return newArr;
};

const totalUSD = movements
  .map((num) => num * eurToUsd)
  .reduce((total, trans) => total + trans, 0);

const depositsUSD = movements
  .filter((trans) => trans > 0)
  .map((num) => num * eurToUsd)
  .reduce((total, trans) => total + trans, 0);

const withdrawalsUSD = movements
  .filter((trans) => trans < 0)
  .map((num) => num * eurToUsd)
  .reduce((total, trans) => total + trans, 0);
//display summary
const displaySummary = (account) => {
  const totalDepositsUSD = account.movements
    .filter((trans) => trans > 0)
    .map((num) => num * eurToUsd)
    .reduce((total, trans) => total + trans, 0);

  labelSumIn.textContent = `$${totalDepositsUSD.toFixed(2)}`;

  const totalWithdrawalsUSD = account.movements
    .filter((trans) => trans < 0)
    .map((num) => num * eurToUsd)
    .reduce((total, trans) => total + trans, 0);
  labelSumOut.textContent = `$${Math.abs(totalWithdrawalsUSD).toFixed(2)}`;

  const interestTotalUSD = account.movements
    .filter((trans) => trans > 0)
    .map((num) => (num * eurToUsd * account.interestRate) / 100)
    .reduce((interest, trans) => interest + trans, 0);
  labelSumInterest.textContent = `$${Math.abs(interestTotalUSD).toFixed(2)}`;
};

/* Part 8: find account to log in */
const ownerAcc = "Michael Elliott";
const findAcc = function (accounts) {
  for (let i in accounts) {
    if (accounts[num].username === inputLoginUsername.value) {
      if (accounts[num].pin === +inputLoginPin.value) {
        containerApp.style.opacity = 100;
      }
    }
  }
};

accounts.find((acc) => acc.username === inputLoginUsername.value);
/* Part 9:  */
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
createUserNames(accounts);

const updateDisplayTransactions = (currentAccount) => {
  displayTransactionsDOM(currentAccount.movements);
  displayBalance(currentAccount);
  displaySummary(currentAccount);
};

let currentAccount;
inputLoginPin.value = "1111";
inputLoginUsername.value = "me";

const now = new Date();
const day = now.getDate();

//Not ES6+
/* btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const findAccount = function (accounts) {
    for (const num in accounts) {
      if (accounts[num].username === inputLoginUsername.value) {
        return accounts[num];
      }
    }
  };
  currentAccount = findAccount(accounts);
  if (currentAccount.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = "";
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }!`;
    inputLoginPin.blur()
    displayTransactionsDOM(currentAccount.movements);
    displayBalance(currentAccount.movements);
    displaySummary(currentAccount);
  }
}); */
/* Event Listeners */
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }!`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    updateDisplayTransactions(currentAccount);
  }
});
/* Part 9: Transfer money */
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  const accountTransferTo = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (
    transferAmount > 0 &&
    accountTransferTo &&
    currentAccount.balance >= transferAmount &&
    currentAccount?.username !== accountTransferTo.username
  ) {
    currentAccount.movements.push((transferAmount / eurToUsd) * -1);
    accountTransferTo.movements.push(transferAmount / eurToUsd);
    updateDisplayTransactions(currentAccount);
    inputTransferAmount.value = inputTransferTo.value = "";
    inputTransferAmount.blur();
  }
});
/* Part 10: Request Loan */
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(currentAccount);
  const amount = Math.round(inputLoanAmount.value);
  const loanTerms = currentAccount.movements.some(
    (trans) => trans >= (amount * 10) / 100
  );
  if (amount > 0 && loanTerms) {
    currentAccount.movements.push(amount / eurToUsd);
    updateDisplayTransactions(currentAccount);
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
  }
});

/* Part 11: close account */
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const findAccountIndex = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(findAccountIndex, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername.value = "";
    inputClosePin.blur();
    //inputCloseUsername.blur()
  }
});
/* Part 12: sort displayDOM */
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayTransactionsDOM(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/* Extra tasks */
/* add movements max and min functions and elements to the DOM */
/* Add interest only to deposits more than 1$ */
/* Create Unit tests */
