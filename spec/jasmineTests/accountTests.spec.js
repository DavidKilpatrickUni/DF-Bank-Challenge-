import Account from '../src/Account.js';
describe('Account Tests', () => {

    it('should create a new instance of an Account', () => {
        //Arrange
        account = new Account();
        //Act

        //Assert
        expect(account).toBeInstanceOf(Account);
    });



})