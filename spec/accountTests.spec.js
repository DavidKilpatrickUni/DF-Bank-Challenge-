import Account from '../src/Account.js';

class MockTransaction1 {
    getTransactionID = () => 'New Transaction1';
}

class MockTransaction2 {
    getTransactionID = () => 'New Transaction2';
}

class MockTransaction3 {
    getTransactionID = () => 'New Transaction3';
}

describe('Account Tests - User Story 1', () => {

    let account;
    let transaction1, transaction2, transaction3;

    beforeEach(() => {
        account = new Account('Test Account');
        transaction1 = new MockTransaction1();
        transaction2 = new MockTransaction2();
        transaction3 = new MockTransaction3();
    });

    it('test 1 - should create a new instance of an Account', () => {
        //Arrange

        //Act

        //Assert
        expect(account).toBeInstanceOf(Account);
    });

    it('test 2 - should call addTransaction method', () => {
        //Arrange
        const addTransactionSpy = spyOn(account, 'addTransaction')

        //Act
        account.addTransaction();

        //Assert
        expect(addTransactionSpy).toHaveBeenCalled;
    });

    it('test 3 - should call addTransaction method with new transaction object', () => {
        //Arrange
        const addTransactionSpy = spyOn(account, 'addTransaction')

        //Act
        account.addTransaction(transaction1);

        //Assert
        expect(addTransactionSpy).toHaveBeenCalledOnceWith(transaction1);

    });

    it('test 4 - should call getTransactions method', () => {
        //Arrange
        const getTransactionsSpy = spyOn(account, 'getTransactions')

        //Act
        account.getTransactions();

        //Assert
        expect(getTransactionsSpy).toHaveBeenCalled;
    });

    it('test 5 - should return transaction array length of 1 after a transaction is made', () => {
        //Arrange

        //Act
        account.addTransaction(transaction1);

        //Assert
        expect(account.getTransactions().length).toBe(1);

    });

    it('test 6 - should return New Transaction1 as accountID. Checking object added is expected ', () => {
        //Arrange

        //Act
        account.addTransaction(transaction1);

        //Assert
        expect(account.getTransactions()[0].getTransactionID()).toBe('New Transaction1');

    });

    it('test 7 - should return value of 3 after 3 mock transactions have been added to account', () => {
        //Arrange

        //Act
        account.addTransaction(transaction1);
        account.addTransaction(transaction2);
        account.addTransaction(transaction3);

        //Assert
        expect(account.getTransactions().length).toBe(3);

    });


})