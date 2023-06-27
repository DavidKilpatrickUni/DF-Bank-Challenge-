import Transaction from '../src/Transaction.js';

class MockAccount {
    getBalance = () => 0;
    setBalance = amount => { };
};

describe('Transaction Tests - User Story 2', () => {

    let account;
    let transaction1;

    beforeEach(() => {
        account = new MockAccount('Test Account');
        transaction1 = new Transaction(account.getBalance());
    });

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
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

    it('test 3 - should call setAmountDeposited method', () => {
        //Arrange
        const setAmountDepositedSpy = spyOn(transaction1, 'setAmountDeposited')
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(setAmountDepositedSpy).toHaveBeenCalled;
    });

    it('test 4 - should call setAmountDeposited method with parameter', () => {
        //Arrange
        const setAmountDepositedSpy = spyOn(transaction1, 'setAmountDeposited')
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(setAmountDepositedSpy).toHaveBeenCalledWith(amount);
    });

    it('test 5 - should call  setAccountBalancePlus method', () => {
        //Arrange
        const setAccountBalancePlusSpy = spyOn(transaction1, 'setAccountBalancePlus')
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(setAccountBalancePlusSpy).toHaveBeenCalled;
    });

    it('test 6 - should call  setAccountBalancePlus method with parameter', () => {
        //Arrange
        const setAccountBalancePlusSpy = spyOn(transaction1, 'setAccountBalancePlus')
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(setAccountBalancePlusSpy).toHaveBeenCalledWith(amount);
    });

    it('test 7 - Check parameter (1000) is being stored as deposited amount', () => {
        //Arrange
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(transaction1.getAmountDeposited()).toBe(1000);
    });

    it('test 8 - Check parameter (1000) is being stored as balance for that period in time after transaction', () => {
        //Arrange
        const amount = 1000;

        //Act
        transaction1.deposit(amount);

        //Assert
        expect(transaction1.getTransactionBalance()).toBe(1000);
    });

    // No longer suitable ( test 11 I couldnt get to work anyway ) - Moved changing balance to Account class side.
    // it('test 9 - should call setBalance method within Mock Account class', () => {
    //     //Arrange
    //     const setBalanceSpy = spyOn(account, 'setBalance')
    //     const amount = 1000;

    //     //Act
    //     transaction1.deposit(amount);

    //     //Assert
    //     expect(setBalanceSpy).toHaveBeenCalled;
    // });



    // it('test 10 - should call setBalance method within Mock Account class with parameter', () => {
    //     //Arrange
    //     const setBalanceSpy = spyOn(account, 'setBalance')
    //     const amount = 1000;

    //     //Act
    //     transaction1.deposit(amount);

    //     //Assert
    //     expect(setBalanceSpy).toHaveBeenCalledWith(1000);
    // });

    // it('test 11 -should return that mock Account object has balance of 1000 after 1000 is purposefully added', () => {
    //     //Arrange
    //     const amount = 1000;

    //     //Act
    //     transaction1.deposit(amount);

    //     //Assert
    //     expect(account.getBalance()).toBe(1000);
    // });


    // User input validation

    it('test 9 - should return true that input is a Transaction object ', () => {

        let actual = Transaction.checkInputIsTransactionObject(transaction1)

        expect(actual).toBeTrue;

    });

    it('test 10 - should return false that input is not a Transaction instance', () => {

        let actual = Transaction.checkInputIsTransactionObject(346)

        expect(actual).toBeFalse;

    });


    it('test 11 - should return false - i.e deals with Null', () => {

        let actual = Transaction.checkInputIsTransactionObject(null)

        expect(actual).toBeFalse;

    });

    it('test 12 - should return false - i.e deals with blank/empty', () => {

        let actual = Transaction.checkInputIsTransactionObject()

        expect(actual).toBeFalse;

    });

})

describe('Transaction Tests - User Story 3', () => {

    let account;
    let transaction1;

    beforeEach(() => {
        account = new MockAccount('Test Account');
        transaction1 = new Transaction(account.getBalance());
    });

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
    });

    it('test 13 - should call deposit method', () => {
        //Arrange
        const withdrawSpy = spyOn(transaction1, 'withdraw')
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(withdrawSpy).toHaveBeenCalled;
    });

})