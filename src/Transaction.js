class Transaction {

    #transactionID;
    #usedAccount;
    #amountDeposited;
    #balance;
    #date;


    constructor(transactionID) {
        this.#transactionID = transactionID;
        this.#usedAccount = usedAccount;
        this.#amountDeposited;
        this.#balance = usedAccount.getBalance();
        this.#date = new Date();
    }

    getTransactionID() {
        return this.#transactionID;
    }

    setTransactionID(transactionID) {
        this.#transactionID = transactionID;
    }

    getTransactionBalance() {
        return this.#balance;
    }

    setAccountBalancePlus(amount) {
        this.#balance += amount;
    }

    getAmountDeposited() {
        return this.#amountDeposited;
    }

    setAmountDeposited(amount) {
        this.#amountDeposited = amount;
    }

    deposit(amount) {
        this.setAccountBalancePlus(amount);
        this.setAmountDeposited(amount);
        this.#usedAccount.setBalance(this.#usedAccount.getBalance() + amount);
    }

}

export default Transaction;