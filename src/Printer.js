class Printer {

    static displayTransactions(transactionList) {


        console.log('date       || credit  || debit  || balance')

        transactionList.forEach(displayTransactions)


        function displayTransactions(transaction) {

            let date = transaction.getDate();
            let credit = (transaction.getAmountDeposited() != 0) ? transaction.getAmountDeposited().toFixed(2) : '';
            let debit = (transaction.getAmountWithdrawn() != 0) ? transaction.getAmountWithdrawn().toFixed(2) : '';
            let balance = transaction.getTransactionBalance().toFixed(2);

            console.log(`${date} || ${credit.padEnd(8)}|| ${debit.padEnd(7)}|| ${balance}`)

        }


    }
}
export default Printer;