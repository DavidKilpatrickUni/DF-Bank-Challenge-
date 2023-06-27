class Transaction {

    #transactionID = 0;
    //#usedAccount;
    #amountDeposited;
    #balance;
    #date;


    constructor(balance) {  // Now pass just balance of account instead of whole account
        //this.#usedAccount = usedAccount;    Details about the account not required
        this.#transactionID++;
        this.#amountDeposited;
        //this.#balance = usedAccount.getBalance();   Balance of Account not required
        this.#balance = balance;
        this.#date = new Date();
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
        // this.#usedAccount.setBalance(this.#usedAccount.getBalance() + amount); 
        // Discussed this. Even though transaction isnt made, balance can be changed in Account class. Perhaps some sort of check in account that transaction was success would solve my overthinking issue
    }

}

export default Transaction;