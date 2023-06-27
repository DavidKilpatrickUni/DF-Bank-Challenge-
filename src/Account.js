class Account {

    #accountID;
    #balance;
    #transactionList

    constructor(accountID) {
        this.#accountID = accountID;
        this.#balance = 0;
        this.#transactionList = [];
    }

    static checkInputIsAccountObject(input) {
        return input instanceof Account;
    }

    static checkInputOfAccountID(input) {
        return (input?.accountID && typeof input.accountID === 'string');
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

    makeTransaction(transactionObject) {
        this.#transactionList = [transactionObject, ...this.#transactionList];
    }

    getTransactions() {
        return this.#transactionList;
    }

    accountDeposit(transactionObject, amount) {
        transactionObject.deposit(amount);
        this.makeTransaction(transactionObject);
        this.setBalance(this.getBalance() + amount);
    }


}

export default Account;