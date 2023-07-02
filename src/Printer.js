class Printer {

    static displayTransactions(transactionList) {
        for (let loop = 0; loop < transactionList.length; loop++) {
            console.log('' + transactionList[loop].getDate() + '||' + transactionList[loop].getAmountDeposited() + '||' + transactionList[loop].getAmountWithdrawn() + '||' + transactionList[loop].getTransactionBalance() + '');
        }

        // transactionList.forEach((transaction) => {
        //     console.log('' + transaction.getDate() + '||' + transaction.getAmountDeposited() + '||' + transaction.getAmountWithdrawn() + '||' + transaction.getTransactionBalance() + '');
        // })
    }

    static printTransactions(transactionList) {
        Printer.getFormat(transactionList);
        Printer.getHeader();
        Printer.displayTransactions(transactionList);
    }

    static printTransactionsWithColor(transactionList) {
        Printer.getFormat(transactionList);
        Printer.getColors(transactionList);
        Printer.getHeader();
        Printer.displayTransactions(transactionList);
    }

    static getFormat(transactionList) {
        Printer.toFixed(transactionList);
        Printer.padding(transactionList);
    }

    static toFixed(transactionList) {

        for (let loop = 0; loop < transactionList.length; loop++) {
            (transactionList[loop].getAmountDeposited() != undefined) ? transactionList[loop].setAmountDeposited(transactionList[loop].getAmountDeposited().toFixed(2)) : transactionList[loop].setAmountDeposited('');
            (transactionList[loop].getAmountWithdrawn() != undefined) ? transactionList[loop].setAmountWithdrawn(transactionList[loop].getAmountWithdrawn().toFixed(2)) : transactionList[loop].setAmountWithdrawn('');
            transactionList[loop].setTransactionBalance(transactionList[loop].getTransactionBalance().toFixed(2));
        }

        // transactionList.forEach((transaction) => {
        //     (transaction.getAmountDeposited() != undefined) ? transaction.setAmountDeposited(transaction.getAmountDeposited().toFixed(2)) : transaction.setAmountDeposited('');
        //     (transaction.getAmountWithdrawn() != undefined) ? transaction.setAmountWithdrawn(transaction.getAmountWithdrawn().toFixed(2)) : transaction.setAmountWithdrawn('');
        //     transaction.setTransactionBalance(transaction.getTransactionBalance().toFixed(2));
        // })
    }

    static padding(transactionList) {

        for (let loop = 0; loop < transactionList.length; loop++) {
            transactionList[loop].setDate(transactionList[loop].getDate().toString().padEnd(11));
            transactionList[loop].setAmountDeposited(transactionList[loop].getAmountDeposited().toString().padStart(8).padEnd(9));
            transactionList[loop].setAmountWithdrawn(transactionList[loop].getAmountWithdrawn().toString().padStart(7).padEnd(8));
            transactionList[loop].setTransactionBalance(transactionList[loop].getTransactionBalance().toString().padStart(8).padEnd(9));
        }

        // transactionList.forEach((transaction) => {
        //     transaction.setDate(transaction.getDate().padEnd(11));
        //     transaction.setAmountDeposited(transaction.getAmountDeposited().padStart(8).padEnd(9));
        //     transaction.setAmountWithdrawn(transaction.getAmountWithdrawn().padStart(7).padEnd(8));
        //     transaction.setTransactionBalance(transaction.getTransactionBalance().padStart(8).padEnd(9));
        // })
    }

    static getColors(transactionList) {
        Printer.creditColor(transactionList);
        Printer.debitColor(transactionList);
        Printer.balanceColor(transactionList);
    }

    static creditColor(transactionList) {
        transactionList.forEach((transaction) => {
            Printer.assignCreditColor(transaction);
        })
    }

    static assignCreditColor(input) {
        if (input.getAmountDeposited() > 0) { input.setAmountDeposited(Printer.colorGreen() + input.getAmountDeposited() + Printer.resetColor()) }
    }

    static debitColor(transactionList) {
        transactionList.forEach((transaction) => {
            Printer.assignDebitColor(transaction);
        })
    }

    static assignDebitColor(input) {
        if (input.getAmountWithdrawn() > 0) { input.setAmountWithdrawn(Printer.colorRed() + input.getAmountWithdrawn() + Printer.resetColor()) }
    }

    static balanceColor(transactionList) {
        transactionList.forEach((transaction) => {
            Printer.assignBalanceColor(transaction);
        })
    }

    static assignBalanceColor(input) {
        //Do you prefer two ifs that do 1 thing or the ternary. I know you are suggest against IF/Else statements but this apply to ternary. (Thinking) The code runs quicker once the If is not met and moves on in this scenario 

        if (input.getTransactionBalance() >= 0) { input.setTransactionBalance(Printer.colorGreen() + input.getTransactionBalance() + Printer.resetColor()) };

        if (input.getTransactionBalance() < 0) { input.setTransactionBalance(Printer.colorRed() + input.getTransactionBalance() + Printer.resetColor()) };

        // (input.getTransactionBalance() >= 0) ? input.setTransactionBalance(Printer.colorGreen() + input.getTransactionBalance() + Printer.resetColor()) : input.setTransactionBalance(Printer.colorRed() + input.getTransactionBalance() + Printer.resetColor())
    }

    static getHeader() {
        console.log('date       || credit  || debit  || balance');
    }

    static colorGreen() {
        return `\x1b[0;32m`;
    }

    static colorRed() {
        return `\x1b[0;31m`;
    }

    static resetColor() {
        return `\x1b[0m`;
    }


}
export default Printer;