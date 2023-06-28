import Account from './Account.js';
import Printer from './Printer.js';
import Transaction from './Transaction.js';

const account = new Account('my account');

account.accountWithdraw(new Transaction(account), 500.00)
account.accountWithdraw(new Transaction(account), 2500.00)
account.accountWithdraw(new Transaction(account), 1000.00)

Printer.displayTransactions(account.getTransactions());
