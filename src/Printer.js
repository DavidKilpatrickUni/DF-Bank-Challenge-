class Printer {




    static displayTransactions(transactionList) {

        console.log('date       || credit  || debit  || balance')

        transactionList.forEach(displayTransactions)

        function displayTransactions(transaction) {

            let date = transaction.getDate();
            let credit = (transaction.getAmountDeposited() != 0) ? transaction.getAmountDeposited().toFixed(2) : '';
            let debit = (transaction.getAmountWithdrawn() != 0) ? transaction.getAmountWithdrawn().toFixed(2) : '';
            let balance = transaction.getTransactionBalance().toFixed(2);

            let colorReset = "\x1b[0m";
            let colorOfCredit = Printer.creditColor(credit);

            console.log(`${date} || ${colorOfCredit}${credit.padEnd(8)}${colorReset}|| ${debit.padEnd(7)}|| ${balance}`)

        }

    }


    static creditColor(input) {

        let textColor = '';

        if (input != '') { textColor = `\x1b[0;32m` }

        return textColor;
    }





}
export default Printer;