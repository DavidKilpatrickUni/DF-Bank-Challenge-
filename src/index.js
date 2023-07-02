import Account from './Account.js';
import Printer from './Printer.js';
import Transaction from './Transaction.js';

class BankProgramExample {

    static main() {
        console.log('-----------------------------------------------------')
        console.log(`Base requirement printed statement`)
        console.log('-----------------------------------------------------\n\n')

        const date1 = new Date("2012-1-10").toLocaleDateString('en-UK');
        const date2 = new Date(2012, 0, 13).toLocaleDateString('en-UK');
        const date3 = new Date(2012, 0, 14).toLocaleDateString('en-UK');
        const date4 = new Date(2015, 7, 23).toLocaleDateString('en-UK');
        const date5 = new Date(2018, 3, 4).toLocaleDateString('en-UK');

        let account = new Account('Base Account');

        account.accountDeposit(new Transaction(account.getBalance(), date1), 1000)
        account.accountDeposit(new Transaction(account.getBalance(), date2), 2000)
        account.accountWithdraw(new Transaction(account.getBalance(), date3), 500)

        Printer.printTransactions(account.getTransactions())

        console.log('\n\n-----------------------------------------------------')
        console.log(`Extended requirement printed statement`)
        console.log('-----------------------------------------------------\n\n')

        let account2 = new Account('Extended Account');

        account2.accountDeposit(new Transaction(account2.getBalance(), date1), 1000)
        account2.accountDeposit(new Transaction(account2.getBalance(), date2), 2000)
        account2.accountWithdraw(new Transaction(account2.getBalance(), date3), 500)
        account2.accountDeposit(new Transaction(account2.getBalance(), date4), 2000)
        account2.accountWithdraw(new Transaction(account2.getBalance(), date5), 5000)
        account2.accountDeposit(new Transaction(account2.getBalance()), 3500)
        account2.accountWithdraw(new Transaction(account2.getBalance()), 3000)
        account2.accountWithdraw(new Transaction(account2.getBalance()), 0.01)

        Printer.printTransactionsWithColor(account2.getTransactions())

    }

}

BankProgramExample.main();
