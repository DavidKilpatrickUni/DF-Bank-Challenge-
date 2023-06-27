class Transaction {

    #transactionID;

    constructor(transactionID) {
        this.#transactionID = transactionID;
    }

    getTransactionID() {
        return this.#transactionID;
    }

    setTransactionID(transactionID) {
        this.#transactionID = transactionID;
    }
}

export default Transaction;