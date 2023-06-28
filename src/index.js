import Account from './Account.js';
import Printer from './Printer.js';
import Transaction from './Transaction.js';

const account = new Account('my account');

account.accountDeposit(new Transaction(account.getBalance()), 1000.00)
account.accountDeposit(new Transaction(account.getBalance()), 2000.00)
account.accountWithdraw(new Transaction(account.getBalance()), 500.00)

Printer.displayTransactions(account.getTransactions());
