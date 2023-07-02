import Transaction from '../src/Transaction.js';

class MockAccount {
    balance = 0;
    getBalance = () => this.balance;
    setBalance = amount => { this.balance = amount };
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

    it('test 13 - should call withdraw method', () => {
        //Arrange
        const withdrawSpy = spyOn(transaction1, 'withdraw')
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(withdrawSpy).toHaveBeenCalled;
    });

    it('test 14 - should call withdraw method with parameter', () => {
        //Arrange
        const withdrawSpy = spyOn(transaction1, 'withdraw')
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(withdrawSpy).toHaveBeenCalledWith(amount);
    });

    it('test 15 - should call setAccountBalanceMinus method', () => {
        //Arrange
        const setAccountBalanceMinusSpy = spyOn(transaction1, 'setAccountBalanceMinus')
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(setAccountBalanceMinusSpy).toHaveBeenCalled;
    });

    it('test 16 - should call setAccountBalanceMinus method with parameter', () => {
        //Arrange
        const setAccountBalanceMinusSpy = spyOn(transaction1, 'setAccountBalanceMinus')
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(setAccountBalanceMinusSpy).toHaveBeenCalledWith(amount);
    });

    it('test 17 - should call setAmountWithdrawn method', () => {
        //Arrange
        const setAmountWithdrawnSpy = spyOn(transaction1, 'setAmountWithdrawn')
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(setAmountWithdrawnSpy).toHaveBeenCalled;
    });

    it('test 18 - should call setAmountWithdrawn method with parameter', () => {
        //Arrange
        const setAmountWithdrawnSpy = spyOn(transaction1, 'setAmountWithdrawn')
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(setAmountWithdrawnSpy).toHaveBeenCalledWith(amount);
    });

    it('test 19 - Check parameter (1000) is being stored as withdrawn amount', () => {
        //Arrange
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(transaction1.getAmountWithdrawn()).toBe(1000);
    });

    it('test 20 - Check parameter (-1000) is being stored as balance for that period in time after transaction', () => {
        //Arrange
        const amount = 1000;

        //Act
        transaction1.withdraw(amount);

        //Assert
        expect(transaction1.getTransactionBalance()).toBe(-1000);
    });

})