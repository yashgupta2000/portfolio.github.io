  'use strict';

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  // BANKIST APP

  /////////////////////////////////////////////////
  // Data
  const account1 = {
      owner: 'Yash Gupta',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
  };

  const account2 = {
      owner: 'Shubham Verma',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
  };

  const account3 = {
      owner: 'Arjun Singh',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
  };

  const account4 = {
      owner: 'Riya Jain',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];

  /////////////////////////////////////////////////
  // Elements
  const logindetails = document.querySelector('.login-container');
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');

  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');

  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');

  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');


  let a = document.createElement('li');
  a.className = 'newbox';
  a.id = 'new';
  a.setAttribute('title', 'hello');
  let text = document.createTextNode('hello boys!!');
  a.appendChild(text)
  console.log(a);



  const displayMoments = function(movements, sort = false) {
      containerMovements.innerHTML = '';

      const mov = sort ? movements.slice().sort((a, b) => a - b) : movements
      mov.forEach(function(mov, index) {

          const type = mov > 0 ? 'deposit' : 'withdrawal'
          const html =
              `<div class="movements__row">
                <div class="movements__type movements__type--${type}">${index+1} ${type}</div>
            
                <div class="movements__value">${mov}€</div>
            </div>`
          containerMovements.insertAdjacentHTML('afterbegin', html);
      })

  }



  const calcDisplayBalance = function(acc) {
      acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
      labelBalance.textContent = `${acc.balance} EUR`
  }



  const calcDisplaySummary = function(acc) {
      const income = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
      labelSumIn.textContent = `${income}Euro`;

      const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
      labelSumOut.textContent = `${out}Euro`;

      const interst = acc.movements.filter(mov => mov > 0)
          .map(deposit => (deposit * 1.2) / 100)
          .reduce((acc, interst) => acc + interst, 0);
      labelSumInterest.textContent = `${interst}Euro`;
  }


  const createUserNames = function(accs) {

      accs.forEach(function(accs) {
          accs.username = accs.owner
              .toLocaleLowerCase().split(' ').map(function(name) {
                  return name[0];
              }).join('');
      })
  }

  const UpdateUi = function(acc) {
      displayMoments(acc.movements);

      calcDisplayBalance(acc);

      calcDisplaySummary(acc);
  }
  createUserNames(accounts);
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const eurToUsd = 1.1;
  const totalDepositUsd = movements.filter(mov => mov > 0)
      .map(mov => mov * eurToUsd)
      .reduce((acc, mov) => acc + mov, 0);

  console.log(totalDepositUsd);

  let currentAccount;
  btnLogin.addEventListener('click', function(e) {
      e.preventDefault();
      //logindetails.style.opacity = 0;
      logindetails.innerHTML = '';

      currentAccount = accounts.find(
          acc => acc.username === inputLoginUsername.value);

      if (currentAccount.pin === Number(inputLoginPin.value)) {

          labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`;
          containerApp.style.opacity = 1;
          console.log(currentAccount);
          inputLoginUsername.value = inputLoginPin.value = ' ';

          UpdateUi(currentAccount);
      }
  })

  btnTransfer.addEventListener('click', function(e) {
      e.preventDefault();
      const amount = Number(inputTransferAmount.value);
      const receiverAcc = accounts.find(acc => inputTransferTo.value === acc.username);

      inputTransferAmount.value = inputTransferTo.value = '';


      if (amount > 0 && currentAccount.balance >= amount && receiverAcc) {
          currentAccount.movements.push(-amount);
          receiverAcc.movements.push(amount);

          UpdateUi(currentAccount);

      }

  })


  btnLoan.addEventListener('click', function(e) {
      e.preventDefault();
      const amount = Number(inputLoanAmount.value);
      if (amount > 0 && amount > currentAccount.movements.some(mov => mov >= amount * 0.1)) {
          currentAccount.movements.push(amount);

          UpdateUi(currentAccount);
      }
      inputLoanAmount = '';
  })

  btnClose.addEventListener('click', function(e) {

      e.preventDefault();

      if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
          const index = accounts.findIndex(acc => acc.username === currentAccount.username);
          accounts.splice(index, 1);
          containerApp.style.opacity = 0;
      }
  })
  let sorted = false
  btnSort.addEventListener('click', function(e) {
      e.preventDefault();
      displayMoments(currentAccount.movements, !sorted);
      sorted = !sorted;
  })