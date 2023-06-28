class Transaction {

    #transactionID = 0;
    //#usedAccount;
    #amountDeposited;
    #amountWithdrawn;
    #balance;
    #date;


    constructor(balance, date = new Date().toLocaleDateString('en-UK')) {  // Now pass just balance of account instead of whole account + added date at latter stage
        //this.#usedAccount = usedAccount;    Details about the account not required
        this.#transactionID++;
        this.#amountDeposited;
        this.#amountWithdrawn;
        //this.#balance = usedAccount.getBalance();   Balance of Account not required
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
        this.#amountWithdrawn = 0;
    }

    getAmountWithdrawn() {
        return this.#amountWithdrawn;
    }

    setAmountWithdrawn(amount) {
        this.#amountWithdrawn = amount;
        this.#amountDeposited = 0;
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
        // this.#usedAccount.setBalance(this.#usedAccount.getBalance() + amount); 
        // Discussed this. Even though transaction is not made, balance can be changed in Account class. Perhaps some sort of check in account that transaction was success would solve my overthinking issue
    }

    withdraw(amount) {
        this.setAccountBalanceMinus(amount);
        this.setAmountWithdrawn(amount);
    }

}

export default Transaction;