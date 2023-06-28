class Printer {

    static displayTransactions(transactionList) {


        console.log('date     || credit  || debit  || balance')

        transactionList.forEach(displayTransactions)


        function displayTransactions(transaction) {

            let date = transaction.getDate();
            let credit = transaction.getAmountDeposited();
            let debit = transaction.getAmountWithdrawn();
            let balance = transaction.getTransactionBalance();

            console.log(`${date} || ${credit}|| ${debit}|| ${balance}`)

        }


    }
}
export default Printer;