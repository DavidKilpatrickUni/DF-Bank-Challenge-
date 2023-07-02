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

    static creditColor(transactionList) {
        transactionList.forEach((transaction) => {
            Printer.assignCreditColor(transaction);
        })
    }

    static assignCreditColor(input) {
        if (input.getAmountDeposited() > 0) { input.setAmountDeposited(Printer.colorGreen() + input.getAmountDeposited() + Printer.resetColor()) }
    }

    static getHeader() {
        console.log('date       || credit  || debit  || balance');
    }




}
export default Printer;