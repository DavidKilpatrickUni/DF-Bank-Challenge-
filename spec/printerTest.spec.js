import Printer from '../src/Printer.js';


class MockTransaction1 {

    date = new Date("2012-1-10").toLocaleDateString('en-UK');
    amountDeposited = 1000;
    amountWithdrawn = undefined;
    balance = 1000;

    getDate = () => this.date;
    setDate = date => { this.date = date };
    getAmountDeposited = () => this.amountDeposited;
    setAmountDeposited = amount => { this.amountDeposited = amount };
    getAmountWithdrawn = () => this.amountWithdrawn;
    setAmountWithdrawn = amount => { this.amountWithdrawn = amount };
    getTransactionBalance = () => this.balance;
    setTransactionBalance = amount => { this.balance = amount };
}

class MockTransactionFixed1 {

    date = "10/01/2012";
    amountDeposited = '1000.00';
    amountWithdrawn = '0.00';
    balance = '1000.00';

    getDate = () => this.date;
    setDate = date => { this.date = date };
    getAmountDeposited = () => this.amountDeposited;
    setAmountDeposited = amount => { this.amountDeposited = amount };
    getAmountWithdrawn = () => this.amountWithdrawn;
    setAmountWithdrawn = amount => { this.amountWithdrawn = amount };
    getTransactionBalance = () => this.balance;
    setTransactionBalance = amount => { this.balance = amount };
}

class MockTransactionPadding1 {

    date = "10/01/2012 ";
    amountDeposited = ' 1000.00 ';
    amountWithdrawn = '  0.00';
    balance = ' 1000.00 ';

    getDate = () => this.date;
    setDate = date => { this.date = date };
    getAmountDeposited = () => this.amountDeposited;
    setAmountDeposited = amount => { this.amountDeposited = amount };
    getAmountWithdrawn = () => this.amountWithdrawn;
    setAmountWithdrawn = amount => { this.amountWithdrawn = amount };
    getTransactionBalance = () => this.balance;
    setTransactionBalance = amount => { this.balance = amount };
}




describe('Printer Tests - User Story 4', () => {


    let transaction1;
    let transactionFixed1;
    let transactionPadding1;
    let transactionArrayOneElement;
    let transactionArrayOneElementFixed;
    let transactionArrayOneElementPadding;

    beforeEach(() => {
        transaction1 = new MockTransaction1();
        transactionFixed1 = new MockTransactionFixed1();
        transactionPadding1 = new MockTransactionPadding1();
        transactionArrayOneElement = [transaction1]
        transactionArrayOneElementFixed = [transactionFixed1]
        transactionArrayOneElementPadding = [transactionPadding1]
    });

    afterEach(() => {
        transaction1 = undefined;
        transactionFixed1 = undefined;
        transactionPadding1 = undefined;
        transactionArrayOneElement = undefined;
        transactionArrayOneElementFixed = undefined;
        transactionArrayOneElementPadding = undefined;

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
        Printer.printTransactions(transactionArrayOneElement);

        //Assert
        expect(printTransactionSpy).toHaveBeenCalledWith(transactionArrayOneElement);
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
        Printer.getFormat(transactionArrayOneElement);

        //Assert
        expect(getFormatSpy).toHaveBeenCalledWith(transactionArrayOneElement);
    });

    it('test 5 - should call getHeader method', () => {
        //Arrange
        const getHeaderSpy = spyOn(Printer, 'getHeader')

        //Act
        Printer.getHeader(transactionArrayOneElement);

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
        Printer.toFixed(transactionArrayOneElement);

        //Assert
        expect(toFixedSpy).toHaveBeenCalled;
    });

    it('test 8 - should call toFixed method with parameter', () => {
        //Arrange
        const toFixedSpy = spyOn(Printer, 'toFixed')

        //Act
        Printer.toFixed(transactionArrayOneElement);

        //Assert
        expect(toFixedSpy).toHaveBeenCalledWith(transactionArrayOneElement);
    });


    it('test 9 - should call padding method', () => {
        //Arrange
        const paddingSpy = spyOn(Printer, 'padding')

        //Act
        Printer.padding(transactionArrayOneElement);

        //Assert
        expect(paddingSpy).toHaveBeenCalled;
    });

    it('test 10 - should call padding method with parameter', () => {
        //Arrange
        const paddingSpy = spyOn(Printer, 'padding')

        //Act
        Printer.padding(transactionArrayOneElement);

        //Assert
        expect(paddingSpy).toHaveBeenCalledWith(transactionArrayOneElement);
    });


    it('test 11 - should change amountDeposited property to expected after toFixed', () => {
        //Arrange

        //Act
        Printer.toFixed(transactionArrayOneElement);

        //Assert
        expect(transactionArrayOneElement[0].getAmountDeposited()).toBe('1000.00');
    });

    it('test 12 - should change amountWithdrawn property to expected after toFixed', () => {
        //Arrange

        //Act
        Printer.toFixed(transactionArrayOneElement);

        //Assert
        expect(transactionArrayOneElement[0].getAmountWithdrawn()).toBe('');
    });

    it('test 13 - should change balance property to expected after toFixed', () => {
        //Arrange

        //Act
        Printer.toFixed(transactionArrayOneElement);

        //Assert
        expect(transactionArrayOneElement[0].getTransactionBalance()).toBe('1000.00');
    });

    it('test 14 - should change date property to expected after padding', () => {
        //Arrange

        //Act
        Printer.padding(transactionArrayOneElementFixed);

        //Assert
        expect(transactionArrayOneElementFixed[0].getDate()).toBe('10/01/2012 '); // padding of 11
    });
    it('test 15 - should change amountDeposited property to expected after padding', () => {
        //Arrange

        //Act
        Printer.padding(transactionArrayOneElementFixed);

        //Assert
        expect(transactionArrayOneElementFixed[0].getAmountDeposited()).toBe(' 1000.00 '); // padding 8 and 9
    });

    it('test 16 - should change amountWithdrawn property to expected after padding', () => {
        //Arrange

        //Act
        Printer.padding(transactionArrayOneElementFixed);

        //Assert
        expect(transactionArrayOneElementFixed[0].getAmountWithdrawn()).toBe('   0.00 '); // padding 7 and 8
    });

    it('test 17 - should change balance property to expected after padding', () => {
        //Arrange

        //Act
        Printer.padding(transactionArrayOneElementFixed);

        //Assert
        expect(transactionArrayOneElementFixed[0].getTransactionBalance()).toBe(' 1000.00 '); // padding 8 and 9
    });

    it('test 18 - should call displayTransactions() method', () => {
        //Arrange
        const displayTransactionsSpy = spyOn(Printer, 'displayTransactions')

        //Act
        Printer.displayTransactions(transactionArrayOneElementPadding);

        //Assert
        expect(displayTransactionsSpy).toHaveBeenCalled;
    });

    it('test 19 - should call displayTransactions() method with parameter', () => {
        //Arrange
        const displayTransactionsSpy = spyOn(Printer, 'displayTransactions')

        //Act
        Printer.displayTransactions(transactionArrayOneElementPadding);

        //Assert
        expect(displayTransactionsSpy).toHaveBeenCalledWith(transactionArrayOneElementPadding);
    });

    it('test 20 - should call console.log method as part of displayTransactions()', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')

        //Act
        Printer.displayTransactions(transactionArrayOneElementPadding);

        //Assert
        expect(consoleSpy).toHaveBeenCalled;
    });

    it('test 21 - should call console.log method as part of displayTransactions() expected number of times', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')

        //Act
        Printer.displayTransactions(transactionArrayOneElementPadding);

        //Assert
        expect(consoleSpy).toHaveBeenCalled;
    });

    it('test 22 - should call console.log method with parameter as part of displayTransactions()', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')
        const consoleOutput = '10/01/2012 || 1000.00 ||  0.00|| 1000.00 '
        //Act
        Printer.displayTransactions(transactionArrayOneElementPadding);

        //Assert
        expect(consoleSpy).toHaveBeenCalledWith(consoleOutput);
    });

})

