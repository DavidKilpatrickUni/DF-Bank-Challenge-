class Transaction {

    #transactionID;
    #amountDeposited;
    #amountWithdrawn;
    #balance;
    #date;


    constructor(balance, date = new Date().toLocaleDateString('en-UK')) {
        this.#transactionID;
        this.#amountDeposited;
        this.#amountWithdrawn;
        this.#balance = balance;
        this.#date = date;
    }

    static checkInputIsTransactionObject(input) {
        return input instanceof Transaction;
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

    setTransactionBalance(amount) {
        this.#balance = amount;
    }

    // Next two methods are so the amount is correctly added or removed from balance as the parameter passed to both is a positive value i.e withdraw 500 is not -500
    setAccountBalancePlus(amount) {
        this.#balance += amount;
    }

    setAccountBalanceMinus(amount) {
        this.#balance -= amount;
    }

    getAmountDeposited() {
        return this.#amountDeposited;
    }

    setAmountDeposited(amount) {
        this.#amountDeposited = amount;
    }

    getAmountWithdrawn() {
        return this.#amountWithdrawn;
    }

    setAmountWithdrawn(amount) {
        this.#amountWithdrawn = amount;
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
    }

    withdraw(amount) {
        this.setAccountBalanceMinus(amount);
        this.setAmountWithdrawn(amount);
    }

}

export default Transaction;