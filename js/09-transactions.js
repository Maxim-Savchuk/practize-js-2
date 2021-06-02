import transationHistory from './data/transactions.js';

const makeTransactionTableRowMarkup = transaction => {
    const { id, amount, date, business, type, name, account } = transaction;
    return `
    <tr>
        <td>${id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
        <td>${type}</td>
        <td>${name}</td>
        <td>${account}</td>
    </tr>
    `;
};

const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transationHistory
    .map(makeTransactionTableRowMarkup)
    .join('');

console.log(makeTransactionTableRows);

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows)
