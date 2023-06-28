import Printer from '../src/Printer.js';


class MockTransaction1 {
    getDate = () => new Date();
    getAmountDeposited = () => 1000;
    getAmountWithdrawn = () => 0;
    getTransactionBalance = () => 1000;
}

class MockTransaction2 {
    getDate = () => new Date();
    getAmountDeposited = () => 2000;
    getAmountWithdrawn = () => 0;
    getTransactionBalance = () => 3000;
}

class MockTransaction3 {
    getDate = () => new Date();
    getAmountDeposited = () => 0;
    getAmountWithdrawn = () => 500;
    getTransactionBalance = () => 2500;
}

describe('Printer Tests - User Story 4', () => {

    it('test 30 - should call static Printer method called displayTransactions', () => {
        //Arrange
        const displayTransactionsSpy = spyOn(Printer, 'displayTransactions')
        const amount = 1000;

        //Act
        Printer.displayTransactions();

        //Assert
        expect(displayTransactionsSpy).toHaveBeenCalled;
    });

})

