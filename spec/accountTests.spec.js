import Account from '../src/Account.js';

class MockTransaction1 {
    getTransactionID = () => 'New Transaction1';
    deposit = amount => { };
    withdraw = amount => { };
}

class MockTransaction2 {
    getTransactionID = () => 'New Transaction2';
    deposit = amount => { };
}

class MockTransaction3 {
    getTransactionID = () => 'New Transaction3';
    deposit = amount => { };
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

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
        transaction2 = undefined;
        transaction3 = undefined;
    });

    it('test 1 - should create a new instance of an Account', () => {
        //Arrange

        //Act

        //Assert
        expect(account).toBeInstanceOf(Account);
    });

    it('test 2 - should call addTransaction method', () => {
        //Arrange
        const addTransactionSpy = spyOn(account, 'makeTransaction')

        //Act
        account.makeTransaction();

        //Assert
        expect(addTransactionSpy).toHaveBeenCalled;
    });

    it('test 3 - should call addTransaction method with new transaction object', () => {
        //Arrange
        const addTransactionSpy = spyOn(account, 'makeTransaction')

        //Act
        account.makeTransaction(transaction1);

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
        account.makeTransaction(transaction1);

        //Assert
        expect(account.getTransactions().length).toBe(1);

    });

    it('test 6 - should return New Transaction1 as accountID. Checking object added is expected ', () => {
        //Arrange

        //Act
        account.makeTransaction(transaction1);

        //Assert
        expect(account.getTransactions()[0].getTransactionID()).toBe('New Transaction1');

    });

    it('test 7 - should return value of 3 after 3 mock transactions have been added to account', () => {
        //Arrange

        //Act
        account.makeTransaction(transaction1);
        account.makeTransaction(transaction2);
        account.makeTransaction(transaction3);

        //Assert
        expect(account.getTransactions().length).toBe(3);

    });

    it('test 8 - should return transaction list same as expected list ', () => {
        //Arrange
        let testArray = [transaction1, transaction2, transaction3]

        //Act
        account.makeTransaction(transaction1);
        account.makeTransaction(transaction2);
        account.makeTransaction(transaction3);

        //Assert
        expect(JSON.stringify(testArray)).toBe(JSON.stringify(account.getTransactions()));

    });


    // User input validation

    it('test 9 - should return true that input exists and is a String', () => {

        let actual = Account.checkInputOfAccountID(account)

        expect(actual).toBeTrue;

    });

    it('test 10 - should return false that input exists', () => {

        let actual = Account.checkInputOfAccountID()

        expect(actual).toBeFalse;

    });

    it('test 11 - should return false that input is not a String', () => {

        let actual = Account.checkInputOfAccountID(346)

        expect(actual).toBeFalse;

    });


    it('test 12 - should return false - i.e deals with Null', () => {

        let actual = Account.checkInputOfAccountID(null)

        expect(actual).toBeFalse;

    });


    it('test 13 - should return false - i.e deals with blank/empty', () => {

        let actual = Account.checkInputOfAccountID()

        expect(actual).toBeFalse;

    });

    // Test 14 - Not required here, but is good to check an account is an Account object if adding to an array of accounts or customers at a certain bank etc

    it('test 14 - should return true that input is a Account object ', () => {

        let actual = Account.checkInputIsAccountObject(account)

        expect(actual).toBeTrue;

    });

    it('test 15 - should return false that input is not a Account instance', () => {

        let actual = Account.checkInputIsAccountObject(346)

        expect(actual).toBeFalse;

    });


    it('test 16 - should return false - i.e deals with Null', () => {

        let actual = Account.checkInputIsAccountObject(null)

        expect(actual).toBeFalse;

    });

    it('test 17 - should return false - i.e deals with blank/empty', () => {

        let actual = Account.checkInputIsAccountObject()

        expect(actual).toBeFalse;

    });

})

describe('Account Tests - User Story 2', () => {

    let account;
    let transaction1;

    beforeEach(() => {
        account = new Account('Test Account');
        transaction1 = new MockTransaction1();
    });

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
    });

    it('test 18 - should call accountDeposit method within the Account class ', () => {
        //Arrange
        const accountDepositSpy = spyOn(account, 'accountDeposit')
        const amount = 1000;

        //Act
        account.accountDeposit(transaction1, amount);

        //Assert
        expect(accountDepositSpy).toHaveBeenCalled;
    });

    it('test 19 - should call accountDeposit method within the Account class with parameters', () => {
        //Arrange
        const accountDepositSpy = spyOn(account, 'accountDeposit')
        const amount = 1000;

        //Act
        account.accountDeposit(transaction1, amount);

        //Assert
        expect(accountDepositSpy).toHaveBeenCalledWith(transaction1, amount);
    });

    it('test 20 - should increase transactions list by 1', () => {
        //Arrange
        const amount = 1000;

        //Act
        account.accountDeposit(transaction1, amount);

        //Assert
        expect(account.getTransactions().length).toBe(1);
    });

    it('test 21 - should call Deposit method within the (Mock) Transaction class ', () => {
        //Arrange
        const depositSpy = spyOn(transaction1, 'deposit')
        const amount = 1000;

        //Act
        account.accountDeposit(transaction1, amount);

        //Assert
        expect(depositSpy).toHaveBeenCalled;
    });

    it('test 22 - should call Deposit method within the (Mock) Transaction class with parameter', () => {
        //Arrange
        const depositSpy = spyOn(transaction1, 'deposit')
        const amount = 1000;

        //Act
        account.accountDeposit(transaction1, amount);

        //Assert
        expect(depositSpy).toHaveBeenCalledWith(amount);
    });

    it('test 23 - should return balance of 1000 in Account since 1000 was deposited', () => {
        //Arrange
        const amount = 1000;

        //Act
        account.accountDeposit(transaction1, amount);

        //Assert
        expect(account.getBalance()).toBe(1000);
    });


})

describe('Account Tests - User Story 3', () => {

    let account;
    let transaction1;

    beforeEach(() => {
        account = new Account('Test Account');
        transaction1 = new MockTransaction1();
    });

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
    });

    it('test 24 - should call accountWithdraw method within the Account class ', () => {
        //Arrange
        const accountWithdrawSpy = spyOn(account, 'accountWithdraw')
        const amount = 1000;

        //Act
        account.accountWithdraw(transaction1, amount);

        //Assert
        expect(accountWithdrawSpy).toHaveBeenCalled;
    });

    it('test 25 - should call accountWithdraw method within the Account class with parameters', () => {
        //Arrange
        const accountWithdrawSpy = spyOn(account, 'accountWithdraw')
        const amount = 1000;

        //Act
        account.accountWithdraw(transaction1, amount);

        //Assert
        expect(accountWithdrawSpy).toHaveBeenCalledWith(transaction1, amount);
    });

    it('test 26 - should increase transactions list by 1', () => {
        //Arrange
        const amount = 1000;

        //Act
        account.accountWithdraw(transaction1, amount);

        //Assert
        expect(account.getTransactions().length).toBe(1);
    });

    it('test 27 - should call Withdraw method within the (Mock) Transaction class ', () => {
        //Arrange
        const withdrawSpy = spyOn(transaction1, 'withdraw')
        const amount = 1000;

        //Act
        account.accountWithdraw(transaction1, amount);

        //Assert
        expect(withdrawSpy).toHaveBeenCalled;
    });

    it('test 28 - should call Withdraw method within the (Mock) Transaction class with parameter', () => {
        //Arrange
        const withdrawSpy = spyOn(transaction1, 'withdraw')
        const amount = 1000;

        //Act
        account.accountWithdraw(transaction1, amount);

        //Assert
        expect(withdrawSpy).toHaveBeenCalledWith(amount);
    });

    it('test 29 - should return balance of -1000 in Account since 1000 was withdrawn', () => {
        //Arrange
        const amount = -1000;

        //Act
        account.accountWithdraw(transaction1, amount);

        //Assert
        expect(account.getBalance()).toBe(1000);
    });
});