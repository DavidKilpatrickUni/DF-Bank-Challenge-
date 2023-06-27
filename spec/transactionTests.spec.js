import Transaction from '../src/Transaction.js';

class MockAccount {
    getBalance = () => 0;
    setBalance(amount) {
        this.getBalance += amount
    };
}

describe('Transaction Tests - User Story 2', () => {

    let account;
    let transaction1, transaction2, transaction3;

    beforeEach(() => {
        account = new MockAccount('Test Account');
        transaction1 = new Transaction(account);
        transaction2 = new Transaction(account);
        transaction3 = new Transaction(account);
    });

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
        transaction2 = undefined;
        transaction3 = undefined;
    });

    it('test 1 - should call deposit method', () => {
        //Arrange
        const depositSpy = spyOn(transaction1, 'deposit')
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(depositSpy).toHaveBeenCalled;
    });

    it('test 2 - should call deposit method with parameter', () => {
        //Arrange
        const depositSpy = spyOn(transaction1, 'deposit')
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(depositSpy).toHaveBeenCalledWith(amount);
    });

    it('test 3 - Check parameter (1000) is being stored as deposited amount', () => {
        //Arrange
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(transaction1.getAmountDeposited()).toBe(1000);
    });


})