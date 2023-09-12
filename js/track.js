// Initialize an empty array to store expenses
let initialExpenses = [];

// Function to save expenses to local storage
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(initialExpenses));
}

// Function to load expenses from local storage
function loadExpenses() {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
        initialExpenses = JSON.parse(savedExpenses);
    }
}

// Function to display expenses
function displayExpenses() {
    const expensesList = document.getElementById("expensesList");
    expensesList.innerHTML = "";

    for (let i = 0; i < initialExpenses.length; i++) {
        const expense = initialExpenses[i];

        // Create a list item for each expense
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${expense.name}</span>
            <span>${expense.amount}</span>
            <span>${expense.dateDueOrPayed}</span>
            <button onclick="deleteExpense(${i})">Delete</button>
        `;

        // Append the list item to the expenses list
        expensesList.appendChild(listItem);
    }
}

// Function to delete an expense
function deleteExpense(index) {
    if (index >= 0 && index < initialExpenses.length) {
        initialExpenses.splice(index, 1);
        displayExpenses();
    }
}

// Function to add a new expense
function addExpense() {
    const nameInput = document.getElementById("expenseName");
    const amountInput = document.getElementById("expenseAmount");
    const dateInput = document.getElementById("expenseDate");

    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);
    const dateDueOrPayed = dateInput.value;

    if (name && !isNaN(amount) && dateDueOrPayed) {
        const newExpense = { name, amount, dateDueOrPayed };
        initialExpenses.push(newExpense);
        nameInput.value = "";
        amountInput.value = "";
        dateInput.value = "";
        displayExpenses();
        saveExpenses(); // Save expenses to local storage
    }
}

// Load expenses from local storage on page load
loadExpenses();

// Display initial expenses
displayExpenses();
