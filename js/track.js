let initialExpenses = [];
let loggedInUsername = sessionStorage.getItem("loggedInUsername");
let expensesToLoad = [];

const saveExpenses = () =>
  localStorage.setItem("expenses", JSON.stringify(initialExpenses));

const loadExpenses = () => {
  const savedExpenses = localStorage.getItem("expenses");
  if (savedExpenses) {
    initialExpenses = JSON.parse(savedExpenses);
  }

  initialExpenses.forEach((expense) => {
    if (loggedInUsername === expense.owner) {
      expensesToLoad.push(expense);
    }
  });
  initialExpenses = expensesToLoad;
};

const displayExpenses = () => {
  const expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = "";

  initialExpenses.map((expense, i) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
                <div class="grid-row">
                    <div class="grid-cell labels">
                        <div>Name:</div>
                        <div>Amount:</div>
                        <div>Date:</div>
                    </div>
                    <div class="grid-cell data">
                        <div>${expense.name}</div>
                        <div>${expense.amount}</div>
                        <div>${expense.dateDueOrPayed}</div>
                    </div>
                </div>
                <div class="flex-row">
                    <button onclick="deleteExpense(${i})" class="delete-button">Delete</button>
                </div>
            `;

    expensesList.appendChild(listItem);
  });
};

const deleteExpense = (index) => {
  if (index >= 0 && index < initialExpenses.length) {
    initialExpenses.splice(index, 1);
    displayExpenses();
    saveExpenses();
  }
};

const addExpense = () => {
  const nameInput = document.getElementById("expenseName");
  const amountInput = document.getElementById("expenseAmount");
  const dateInput = document.getElementById("expenseDate");
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);
  const dateDueOrPayed = dateInput.value;
  const owner = loggedInUsername;

  if (name && !isNaN(amount) && dateDueOrPayed) {
    const newExpense = { name, amount, dateDueOrPayed, owner };
    initialExpenses.push(newExpense);
    nameInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
    displayExpenses();
    saveExpenses();
  }
};

const logout = () => {
  sessionStorage.setItem("loggedInUsername", "");
  window.location.href = "/html/index.html";
};

loadExpenses();
displayExpenses();
