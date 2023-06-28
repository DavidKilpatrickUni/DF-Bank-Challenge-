class Printer {


    //Old implementation
    // static displayTransactions(transactionList) {

    //     Printer.getHeader()

    //     for (let loop = 0; loop < transactionList.length; loop++) {

    //         let date = transactionList[loop].getDate();
    //         let credit = (transactionList[loop].getAmountDeposited() != undefined) ? transactionList[loop].getAmountDeposited().toFixed(2) : '';
    //         let debit = (transactionList[loop].getAmountWithdrawn() != undefined) ? transactionList[loop].getAmountWithdrawn().toFixed(2) : '';
    //         let balance = transactionList[loop].getTransactionBalance().toFixed(2);

    //         let colorOfCredit;
    //         let colorOfDebit;
    //         let colorOfBalance;
    //         let colorReset = Printer.resetColor();

    //         if (credit >= 0) { colorOfCredit = Printer.colorGreen() };
    //         if (debit >= 0) { colorOfDebit = Printer.colorRed() };
    //         (balance >= 0) ? colorOfBalance = Printer.colorGreen() : colorOfBalance = Printer.colorRed();

    //         console.log(`${date} || ${colorOfCredit}${credit.padEnd(8)}${colorReset}|| ${colorOfDebit}${debit.padEnd(7)}${colorReset}|| ${colorOfBalance}${balance}${colorReset}`);

    //     }

    // }

    static displayTransactions2(transactionList) {
        for (let loop = 0; loop < transactionList.length; loop++) {
            console.log('' + transactionList[loop].getDate() + '||' + transactionList[loop].getAmountDeposited() + '||' + transactionList[loop].getAmountWithdrawn() + '||' + transactionList[loop].getTransactionBalance() + '');
        }
    }

    static printTransaction(transactionList) {
        Printer.getHeader();
        Printer.getFormat(transactionList);
        Printer.displayTransactions2(transactionList);
    }

    static printTransaction2(transactionList) {
        Printer.getHeader();
        Printer.getFormat(transactionList);
        Printer.getColors(transactionList);
        Printer.displayTransactions2(transactionList);
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
    }

    static padding(transactionList) {
        for (let loop = 0; loop < transactionList.length; loop++) {
            transactionList[loop].setDate(transactionList[loop].getDate().padEnd(11));
            transactionList[loop].setAmountDeposited(transactionList[loop].getAmountDeposited().padStart(8).padEnd(9));
            transactionList[loop].setAmountWithdrawn(transactionList[loop].getAmountWithdrawn().padStart(7).padEnd(8));
            transactionList[loop].setTransactionBalance(transactionList[loop].getTransactionBalance().padStart(8).padEnd(9));
        }
    }

    static getColors(transactionList) {
        Printer.creditColor(transactionList);
        Printer.debitColor(transactionList);
        Printer.balanceColor(transactionList);
    }

    static creditColor(transactionList) {
        for (let loop = 0; loop < transactionList.length; loop++) {
            Printer.assignCreditColor(transactionList[loop]);
        }
    }

    static assignCreditColor(input) {
        if (input.getAmountDeposited() > 0) { input.setAmountDeposited(Printer.colorGreen() + input.getAmountDeposited() + Printer.resetColor()) }
    }

    static debitColor(transactionList) {
        for (let loop = 0; loop < transactionList.length; loop++) {
            Printer.assignDebitColor(transactionList[loop]);
        }
    }

    static assignDebitColor(input) {
        if (input.getAmountWithdrawn() > 0) { input.setAmountWithdrawn(Printer.colorRed() + input.getAmountWithdrawn() + Printer.resetColor()) }
    }

    static balanceColor(transactionList) {
        for (let loop = 0; loop < transactionList.length; loop++) {
            Printer.assignBalanceColor(transactionList[loop]);
        }
    }

    static assignBalanceColor(input) {
        (input.getTransactionBalance() >= 0) ? input.setTransactionBalance(Printer.colorGreen() + input.getTransactionBalance() + Printer.resetColor()) : input.setTransactionBalance(Printer.colorRed() + input.getTransactionBalance() + Printer.resetColor())
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