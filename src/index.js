import Account from './Account.js';
import Printer from './Printer.js';
import Transaction from './Transaction.js';

console.log('-----------------------------------------------------')
console.log(`Base requirement printed statement`)
console.log('-----------------------------------------------------')

const account = new Account('Base Account');
const date1 = new Date(2012, 1, 10).toLocaleDateString('en-UK');
const date2 = new Date(2012, 1, 13).toLocaleDateString('en-UK');
const date3 = new Date(2012, 1, 14).toLocaleDateString('en-UK');

account.accountDeposit(new Transaction(account.getBalance(), date1), 1000)
account.accountDeposit(new Transaction(account.getBalance(), date2), 2000)
account.accountWithdraw(new Transaction(account.getBalance(), date3), 500)

Printer.printTransaction(account.getTransactions())

console.log('-----------------------------------------------------')
console.log(`Extended requirement printed statement`)
console.log('-----------------------------------------------------')

const account2 = new Account('Extended Account');

account2.accountDeposit(new Transaction(account2.getBalance()), 1000)
account2.accountWithdraw(new Transaction(account2.getBalance()), 2000)
account2.accountDeposit(new Transaction(account2.getBalance()), 3500)
account2.accountWithdraw(new Transaction(account2.getBalance()), 2500)
account2.accountWithdraw(new Transaction(account2.getBalance()), 0.01)

Printer.printTransaction2(account2.getTransactions())

console.log('-----------------------------------------------------')

// Printer.displayTransactions(account.getTransactions()); old implementation
