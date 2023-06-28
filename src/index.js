import Account from './Account.js';
import Printer from './Printer.js';
import Transaction from './Transaction.js';

const account = new Account();

const date1 = new Date(2012, 1, 10).toLocaleDateString('en-UK');
const date2 = new Date(2012, 1, 13).toLocaleDateString('en-UK');
const date3 = new Date(2012, 1, 14).toLocaleDateString('en-UK');

account.accountDeposit(new Transaction(account.getBalance(), date1), 1000.00)
account.accountDeposit(new Transaction(account.getBalance(), date2), 2000.00)
account.accountWithdraw(new Transaction(account.getBalance(), date3), 500.00)
account.accountWithdraw(new Transaction(account.getBalance()), 500.00)

Printer.displayTransactions(account.getTransactions());
