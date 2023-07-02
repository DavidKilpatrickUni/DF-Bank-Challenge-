import Printer from '../src/Printer.js';


class MockTransaction1 {
    getDate = () => new Date();
    getAmountDeposited = () => 1000;
    getAmountWithdrawn = () => 0;
    getTransactionBalance = () => 1000;
}

class MockTransaction2 {
    getDate = () => new Date();
    getAmountDeposited = () => 2000;
    getAmountWithdrawn = () => 0;
    getTransactionBalance = () => 3000;
}

class MockTransaction3 {
    getDate = () => new Date().toLocaleDateString('en-UK');
    getAmountDeposited = () => 0;
    getAmountWithdrawn = () => 500;
    getTransactionBalance = () => 2500;
}

class MockAccount {

};

describe('Printer Tests - User Story 4', () => {

    let account;
    let transaction1, transaction2, transaction3;
    let transactionArray;

    beforeEach(() => {
        account = new MockAccount();
        transaction1 = new MockTransaction1();
        transaction2 = new MockTransaction2();
        transaction3 = new MockTransaction3();
        transactionArray = [transaction1, transaction2, transaction3];
    });

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
        transaction2 = undefined;
        transaction3 = undefined;
        transactionArray = undefined;
    });

    it('should ', () => {

    });


})

