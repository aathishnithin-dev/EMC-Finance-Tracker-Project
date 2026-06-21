# 💰 Finance Tracker

A simple web app to track income, expenses, budgets, and spending habits — built as a group project using HTML, Tailwind CSS, and JavaScript.

---

## 📌 About the Project

Finance Tracker helps users manage their personal finances by recording transactions, setting category budgets, and viewing visual reports — all stored locally in the browser using `localStorage` (no backend required).

This project was built collaboratively by a 5-member team, with each member owning one module.

---

## 🚀 Live Demo

🔗 [View Live App](https://emc-finance-tracker-project.vercel.app/index.html)

---

## 🗂️ Pages / Modules

| Page | Description |
|---|---|
| **Dashboard** | Overview of balance, income, expense, and recent transactions |
| **Transactions** | Add, search, filter, and delete income/expense entries |
| **Budget** | Set category-wise spending limits with progress tracking |
| **Reports** | Visual charts — expense breakdown and income vs expense trends |
| **Settings** | Profile, dark mode toggle, manage categories, export/clear data |

---

## 🛠️ Tech Stack

- **HTML5** — page structure
- **Tailwind CSS** — styling (via CDN)
- **JavaScript** — app logic
- **Chart.js** — data visualization
- **localStorage** — data persistence (no backend/database)
- **Vercel** — deployment

---

## 👥 Team & Module Ownership

| Member | Module | File |
|---|---|---|
| Aathish Nithin (TL) | Dashboard | `index.html` |
| Selva | Transactions | `transactions.html` |
| Rishi | Budget | `budget.html` |
| Saravana kumar | Reports | `reports.html` |
| Shynthavi | Settings | `settings.html` |
| Shared | Data layer | `utils.js` |

---

## 📁 Project Structure

```
EMC-Finance-Tracker-Project/
├── index.html          # Dashboard
├── transactions.html   # Transactions
├── budget.html         # Budget
├── reports.html        # Reports
├── settings.html       # Settings
├── utils.js            # Shared localStorage functions
└── README.md
```

---

## ⚙️ How It Works

- All data (transactions, budgets, settings) is stored in the browser's `localStorage` under these keys:
  - `ft_transactions`
  - `ft_budgets`
  - `ft_settings`
- Every page loads `utils.js` first, which provides shared functions like `getTransactions()`, `addTransaction()`, `getBalance()`, etc.
- Each page then has its own inline or linked JS for page-specific logic.

---

## 💻 Running Locally

No installation needed — it's plain HTML/CSS/JS.

```bash
# Clone the repo
git clone https://github.com/aathishnithin-dev/EMC-Finance-Tracker-Project.git
cd EMC-Finance-Tracker-Project

# Open index.html directly in your browser
# or use VS Code's "Live Server" extension for auto-reload
```

---

## 🌳 Branching Workflow

```
main
 ├── module-dashboard
 ├── module-transactions
 ├── module-budget
 ├── module-reports
 └── module-settings
```

- Each member works only on their assigned branch and file.
- Changes are merged into `main` via Pull Requests, reviewed by the Team Lead.
- `main` is auto-deployed to Vercel on every merge.

---

## 📦 Deployment

This project is deployed on **Vercel**. Every push to `main` triggers an automatic redeploy — no manual steps needed.

---

## 📄 License

This project was built for academic purposes as part of a group assignment.
