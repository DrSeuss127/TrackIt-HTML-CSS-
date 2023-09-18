let allExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
let loggedInUsername = sessionStorage.getItem("loggedInUsername");
let expensesToLoad = [];
//
const saveExpenses = () => localStorage.setItem("expenses", JSON.stringify(allExpenses));

const filterExpensesByOwner = () => {
  expensesToLoad = allExpenses.filter((expense) => expense.owner === loggedInUsername);
};

const displayExpenses = () => {
  const expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = "";

  expensesToLoad.forEach((expense, i) => {
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
  if (index >= 0 && index < allExpenses.length) {
    allExpenses.splice(index, 1);
    filterExpensesByOwner();
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

  if (name && !isNaN(amount) && dateDueOrPayed) {
    const newExpense = { name, amount, dateDueOrPayed, owner: loggedInUsername };
    allExpenses.push(newExpense);
    nameInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
    filterExpensesByOwner();
    displayExpenses();
    saveExpenses();
  }
};

const logout = () => {
  sessionStorage.setItem("loggedInUsername", "");
  expensesToLoad = [];
  window.location.href = index.html";
};

filterExpensesByOwner();
displayExpenses();
