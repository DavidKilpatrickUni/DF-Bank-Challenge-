import Printer from '../src/Printer.js';


class MockTransaction1 {
    getDate = () => new Date("2012-1-10").toLocaleDateString('en-UK');
    setDate = date => { };
    getAmountDeposited = () => 1000;
    setAmountDeposited = amount => { };
    getAmountWithdrawn = () => undefined;
    setAmountWithdrawn = amount => { };
    getTransactionBalance = () => 1000;
    setTransactionBalance = balance => { };
}

class MockTransaction1Formated {
    getDate = () => ('2012/1/10  ');
    setDate = date => { };
    getAmountDeposited = () => ' 1000.00 ';
    setAmountDeposited = amount => { };
    getAmountWithdrawn = () => '        ';
    setAmountWithdrawn = amount => { };
    getTransactionBalance = () => ' 1000.00 ';
    setTransactionBalance = balance => { };
}

class MockTransaction2 {

}

class MockTransaction3 {

}

class MockAccount {
};

describe('Printer Tests - User Story 4', () => {

    let account;
    let transaction1, transaction2, transaction3;
    let transactionArrayOne, transactionArrayMulti;

    beforeEach(() => {
        account = new MockAccount();
        transaction1 = new MockTransaction1();
        transaction2 = new MockTransaction2();
        transaction3 = new MockTransaction3();
        transactionArrayOne = [transaction1]
        transactionArrayMulti = [transaction1, transaction2, transaction3];
    });

    afterEach(() => {
        account = undefined;
        transaction1 = undefined;
        transaction2 = undefined;
        transaction3 = undefined;
        transactionArrayOne = undefined
        transactionArrayMulti = undefined;
    });

    it('test 1 - should call printTransaction() method', () => {
        //Arrange
        const printTransactionSpy = spyOn(Printer, 'printTransactions')

        //Act
        Printer.printTransactions();

        //Assert
        expect(printTransactionSpy).toHaveBeenCalled;
    });


    it('test 2 - should call printTransaction() method with parameter', () => {
        //Arrange
        const printTransactionSpy = spyOn(Printer, 'printTransactions')

        //Act
        Printer.printTransactions(transactionArrayOne);

        //Assert
        expect(printTransactionSpy).toHaveBeenCalledWith(transactionArrayOne);
    });

    it('test 3 - should call getFormat method', () => {
        //Arrange
        const getFormatSpy = spyOn(Printer, 'getFormat')

        //Act
        Printer.getFormat();

        //Assert
        expect(getFormatSpy).toHaveBeenCalled();
    });

    it('test 4 - should call getFormat method with Parameter', () => {
        //Arrange
        const getFormatSpy = spyOn(Printer, 'getFormat')

        //Act
        Printer.getFormat(transactionArrayOne);

        //Assert
        expect(getFormatSpy).toHaveBeenCalledWith(transactionArrayOne);
    });

    it('test 5 - should call getHeader method', () => {
        //Arrange
        const getHeaderSpy = spyOn(Printer, 'getHeader')

        //Act
        Printer.getHeader(transactionArrayOne);

        //Assert
        expect(getHeaderSpy).toHaveBeenCalled;
    });

    it('test 6 - should call displayTransactions method ', () => {
        //Arrange
        const displayTransactionsSpy = spyOn(Printer, 'displayTransactions')

        //Act
        Printer.displayTransactions();

        //Assert
        expect(displayTransactionsSpy).toHaveBeenCalled();
    });

    it('test 7 - should call toFixed method', () => {
        //Arrange
        const toFixedSpy = spyOn(Printer, 'toFixed')

        //Act
        Printer.toFixed(transactionArrayOne);

        //Assert
        expect(toFixedSpy).toHaveBeenCalled;
    });

    it('test 8 - should call toFixed method with parameter', () => {
        //Arrange
        const toFixedSpy = spyOn(Printer, 'toFixed')

        //Act
        Printer.toFixed(transactionArrayOne);

        //Assert
        expect(toFixedSpy).toHaveBeenCalledWith(transactionArrayOne);
    });


    it('test 9 - should call padding method', () => {
        //Arrange
        const paddingSpy = spyOn(Printer, 'padding')

        //Act
        Printer.padding(transactionArrayOne);

        //Assert
        expect(paddingSpy).toHaveBeenCalled;
    });

    it('test 10 - should call padding method with parameter', () => {
        //Arrange
        const paddingSpy = spyOn(Printer, 'padding')

        //Act
        Printer.padding(transactionArrayOne);

        //Assert
        expect(paddingSpy).toHaveBeenCalledWith(transactionArrayOne);
    });

})

