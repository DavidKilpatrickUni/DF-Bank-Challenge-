import Account from './Account.js';
import Printer from './Printer.js';
import Transaction from './Transaction.js';

class BankProgramExample {

    static main() {
        console.log('-----------------------------------------------------')
        console.log(`Base requirement printed statement`)
        console.log('-----------------------------------------------------\n\n')

        let account = new Account('Base Account');
        const date1 = new Date("2012-1-10").toLocaleDateString('en-UK');
        const date2 = new Date(2012, 0, 13).toLocaleDateString('en-UK');
        const date3 = new Date(2012, 0, 14).toLocaleDateString('en-UK');

        account.accountDeposit(new Transaction(account.getBalance(), date1), 1000)
        account.accountDeposit(new Transaction(account.getBalance(), date2), 2000)
        account.accountWithdraw(new Transaction(account.getBalance(), date3), 500)

        Printer.printTransactions(account.getTransactions())
    }

}


BankProgramExample.main();
