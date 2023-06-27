class Transaction {

    #transactionID = 0;
    #usedAccount;
    #amountDeposited;
    #balance;
    #date;


    constructor(usedAccount) {
        this.#usedAccount = usedAccount;
        this.#transactionID++;
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

    getDate() {
        return this.#date;
    }

    setDate(date) {
        this.#date = date;
    }

    deposit(amount) {
        this.setAccountBalancePlus(amount);
        this.setAmountDeposited(amount);
        this.#usedAccount.setBalance(this.#usedAccount.getBalance() + amount);
    }

}

export default Transaction;