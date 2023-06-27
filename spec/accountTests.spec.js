import Account from '../src/Account.js';

class MockTransaction {
    getTransactionID = () => 'New Transaction1';
}

describe('Account Tests - User Story 1', () => {

    let account;
    let transaction1;

    beforeEach(() => {
        account = new Account('Test Account');
        transaction1 = new MockTransaction();
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


})