import Account from '../src/Account.js';

describe('Account Tests', () => {

    it('should create a new instance of an Account', () => {
        //Arrange
        const account = new Account('New Account')
        //Act

        //Assert
        expect(account).toBeInstanceOf(Account);
    });

    it('should create a new instance of an Account', () => {
        //Arrange
        const account = new Account('New Account')
        //Act

        //Assert
        expect(account).toBeInstanceOf(Account);
    });

    it('should call addTransaction method', () => {

    });



})