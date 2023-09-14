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
            <!-- First row with grid -->
            <div class="grid-row">
                <!-- First column for labels -->
                <div class="grid-cell labels">
                    <div>Name:</div>
                    <div>Amount:</div>
                    <div>Date:</div>
                </div>
                <!-- Second column for data -->
                <div class="grid-cell data">
                    <div>${expense.name}</div>
                    <div>${expense.amount}</div>
                    <div>${expense.dateDueOrPayed}</div>
                </div>
            </div>
            <!-- Second row with flexbox -->
            <div class="flex-row">
                <!-- Delete button with 30% width -->
                <button onclick="deleteExpense(${i})" class="delete-button">Delete</button>
            </div>
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
        // saveExpenses();
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
