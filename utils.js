// ============================================================
//  utils.js — Finance Tracker  |  Shared by ALL pages
//  DO NOT EDIT without telling the TL
// ============================================================

// ── Transaction Helpers ──────────────────────────────────────
function getTransactions() {
  return JSON.parse(localStorage.getItem("ft_transactions")) || [];
}
function saveTransactions(data) {
  localStorage.setItem("ft_transactions", JSON.stringify(data));
}
function addTransaction(entry) {
  const list = getTransactions();
  list.push(entry);
  saveTransactions(list);
}
function deleteTransaction(id) {
  const list = getTransactions().filter((t) => t.id !== id);
  saveTransactions(list);
}

// ── Budget Helpers ───────────────────────────────────────────
function getBudgets() {
  return JSON.parse(localStorage.getItem("ft_budgets")) || {};
}
function saveBudgets(data) {
  localStorage.setItem("ft_budgets", JSON.stringify(data));
}

var budgets = [];

function addBudget() {

    var category = document.getElementById("category").value;
    var amount = document.getElementById("amount").value;

    if(category === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    budgets.push({
        category: category,
        amount: Number(amount)
    });

    displayBudget();

    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
}

function displayBudget() {

var table = document.getElementById("budgetTable");

    table.innerHTML = "";

    var total = 0;

    budgets.forEach((item, index) => {

        total += item.amount;

        table.innerHTML += `
        <tr>
            <td>${item.category}</td>
            <td>₹${item.amount}</td>
            <td>
                <button class="delete" onclick="deleteBudget(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("totalBudget").innerHTML =
        "Total Budget: ₹" + total;
}

function deleteBudget(index) {

    budgets.splice(index, 1);

    displayBudget();
}

// ── Settings Helpers ─────────────────────────────────────────
function getSettings() {
  return (
    JSON.parse(localStorage.getItem("ft_settings")) || {
      name: "User",
      currency: "₹",
      theme: "light",
      categories: [
        "Food",
        "Transport",
        "Shopping",
        "Bills",
        "Health",
        "Other",
      ],
    }
  );
}
function saveSettings(data) {
  localStorage.setItem("ft_settings", JSON.stringify(data));
}

// ── Theme Helper (call on every page load) ───────────────────
function applyTheme() {
  const { theme } = getSettings();
  document.documentElement.classList.toggle("dark", theme === "dark");
}

// ── Currency Helper ──────────────────────────────────────────
function getCurrency() {
  return getSettings().currency || "₹";
}

// ── Summary Helpers ──────────────────────────────────────────
function getTotalIncome() {
  return getTransactions()
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
}
function getTotalExpense() {
  return getTransactions()
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
}
function getBalance() {
  return getTotalIncome() - getTotalExpense();
}

// ── Format Currency ──────────────────────────────────────────
function formatAmount(amount) {
  return `${getCurrency()}${amount.toLocaleString("en-IN")}`;
}
