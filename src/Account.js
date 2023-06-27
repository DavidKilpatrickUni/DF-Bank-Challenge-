class Account {

    #accountID;
    #balance;
    #transactionList

    constructor(accountID) {
        this.#accountID = accountID;
        this.#balance = 0;
        this.#transactionList = [];
    }

    getAccountID() {
        return this.#accountID;
    }

    setAccountID(accountID) {
        this.#accountID = accountID;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(newBalance) {
        this.#balance = newBalance;
    }

    addTransaction() {
        this.#transactionList = [transactionObject, ...this.#transactionList]
    }

    getTransactions() {
        return this.#transactionList;
    }

}

export default Account;