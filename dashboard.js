// ============================================
// dashboard.js
// Logic only for index.html (Dashboard page)
// ============================================

// Step 1: Apply saved dark/light theme
applyTheme();

// Step 2: Show the user's name in the welcome message
const settings = getSettings();
document.getElementById("welcome-msg").textContent = "Welcome back, " + settings.name + " 👋";

// Step 3: Fill in the 3 summary cards
document.getElementById("total-balance").textContent = formatAmount(getBalance());
document.getElementById("total-income").textContent = formatAmount(getTotalIncome());
document.getElementById("total-expense").textContent = formatAmount(getTotalExpense());

// Step 4: Show the last 5 transactions
showRecentTransactions();

function showRecentTransactions() {
  const allTransactions = getTransactions();

  // get last 5 transactions, newest first
  const recent = allTransactions.slice(-5).reverse();

  const listElement = document.getElementById("recent-list");

  // if no transactions yet, show a message
  if (recent.length === 0) {
    listElement.innerHTML = '<li class="text-[#6B7280] dark:text-[#64748B] text-sm py-3">No transactions yet.</li>';
    return;
  }

  // build the HTML for each transaction
  let html = "";

  for (let i = 0; i < recent.length; i++) {
    const t = recent[i];

    // pick color based on income or expense
    let amountColor = "text-expense dark:text-[#FCA5A5]";
    let sign = "-";
    if (t.type === "income") {
      amountColor = "text-income dark:text-[#86EFAC]";
      sign = "+";
    }

    html += `
      <li class="flex justify-between items-center py-3">
        <div>
          <p class="font-medium text-sm">${t.category}</p>
          <p class="text-xs text-[#6B7280] dark:text-[#64748B]">${t.date} · ${t.note || "—"}</p>
        </div>
        <span class="font-semibold text-sm ${amountColor}">
          ${sign}${formatAmount(t.amount)}
        </span>
      </li>
    `;
  }

  listElement.innerHTML = html;
}
