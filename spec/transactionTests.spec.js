import Transaction from '../src/Transaction.js';

class MockAccount {

}

describe('Transaction Tests - User Story 2', () => {

    let account;
    let transaction1, transaction2, transaction3;

    beforeEach(() => {
        account = new MockAccount('Test Account');
        transaction1 = new Transaction();
        transaction2 = new Transaction();
        transaction3 = new Transaction();
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


})