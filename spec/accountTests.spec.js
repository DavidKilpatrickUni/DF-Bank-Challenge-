import Account from '../src/Account.js';

describe('Account Tests', () => {

    let account;

    beforeEach(() => {
        account = new Account('Test Account');
        transaction = new Transaction('New Transaction');
    });

    it('should create a new instance of an Account', () => {
        //Arrange

        //Act

        //Assert
        expect(account).toBeInstanceOf(Account);
    });

    it('should call addTransaction method', () => {
        //Arrange

        const addTransactionSpy = spyOn(account, 'addTransaction')
        //Act

        //Assert
        expect(addTransactionSpy).toHaveBeenCalled;
    });

    it('should call addTransaction method with new transaction object', () => {
        //Arrange

        const addTransactionSpy = spyOn(account, 'addTransaction')
        //Act

        //Assert
        expect(addTransactionSpy).toHaveBeenCalledOnceWith(transaction);

    });


})