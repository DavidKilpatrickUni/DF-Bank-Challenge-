class Printer {

    static displayTransactions(transactionList) {
        transactionList.forEach((transaction) => {
            console.log('' + transaction.getDate() + '||' + transaction.getAmountDeposited() + '||' + transaction.getAmountWithdrawn() + '||' + transaction.getTransactionBalance() + '');
        })
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
        transactionList.forEach((transaction) => {
            (transaction.getAmountDeposited() != undefined) ? transaction.setAmountDeposited(transaction.getAmountDeposited().toFixed(2)) : transaction.setAmountDeposited('');
            (transaction.getAmountWithdrawn() != undefined) ? transaction.setAmountWithdrawn(transaction.getAmountWithdrawn().toFixed(2)) : transaction.setAmountWithdrawn('');
            transaction.setTransactionBalance(transaction.getTransactionBalance().toFixed(2));
        })
    }

    static padding(transactionList) {
        transactionList.forEach((transaction) => {
            transaction.setDate(transaction.getDate().padEnd(11));
            transaction.setAmountDeposited(transaction.getAmountDeposited().padStart(8).padEnd(9));
            transaction.setAmountWithdrawn(transaction.getAmountWithdrawn().padStart(7).padEnd(8));
            transaction.setTransactionBalance(transaction.getTransactionBalance().padStart(8).padEnd(9));
        })
    }

    static getHeader() {
        console.log('date       || credit  || debit  || balance');
    }

    static colorGreen() {
        return `\x1b[0;32m`;
    }

    static resetColor() {
        return `\x1b[0m`;
    }

}
export default Printer;