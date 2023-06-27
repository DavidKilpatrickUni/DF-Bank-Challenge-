import Account from '../src/Account.js';

class MockTransaction {

}

describe('Account Tests', () => {

    let account;
    let transaction;

    beforeEach(() => {
        account = new Account('Test Account');
        transaction = new MockTransaction('New Transaction');
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
        account.addTransaction(transaction);

        //Assert
        expect(addTransactionSpy).toHaveBeenCalledOnceWith(transaction);

    });

    it('test 4 - should call getTransactions method', () => {
        //Arrange
        const getTransactionsSpy = spyOn(account, 'getTransactions')

        //Act
        account.getTransactions();

        //Assert
        expect(getTransactionsSpy).toHaveBeenCalled;
    });


})