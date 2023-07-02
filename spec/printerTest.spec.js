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
    amountWithdrawn = '';
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
    amountWithdrawn = '      ';
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

class MockTransaction2 {

    date = new Date("2012-1-13").toLocaleDateString('en-UK');
    amountDeposited = 2000;
    amountWithdrawn = undefined;
    balance = 3000;

    getDate = () => this.date;
    setDate = date => { this.date = date };
    getAmountDeposited = () => this.amountDeposited;
    setAmountDeposited = amount => { this.amountDeposited = amount };
    getAmountWithdrawn = () => this.amountWithdrawn;
    setAmountWithdrawn = amount => { this.amountWithdrawn = amount };
    getTransactionBalance = () => this.balance;
    setTransactionBalance = amount => { this.balance = amount };
}

class MockTransaction3 {

    date = new Date("2012-1-14").toLocaleDateString('en-UK');
    amountDeposited = undefined;
    amountWithdrawn = 500;
    balance = 2500;

    getDate = () => this.date;
    setDate = date => { this.date = date };
    getAmountDeposited = () => this.amountDeposited;
    setAmountDeposited = amount => { this.amountDeposited = amount };
    getAmountWithdrawn = () => this.amountWithdrawn;
    setAmountWithdrawn = amount => { this.amountWithdrawn = amount };
    getTransactionBalance = () => this.balance;
    setTransactionBalance = amount => { this.balance = amount };
}

class MockTransactionPadding3 {

    date = "14/01/2012";
    amountDeposited = '         ';
    amountWithdrawn = ' 500.00 ';
    balance = ' 2500.00    ';

    getDate = () => this.date;
    setDate = date => { this.date = date };
    getAmountDeposited = () => this.amountDeposited;
    setAmountDeposited = amount => { this.amountDeposited = amount };
    getAmountWithdrawn = () => this.amountWithdrawn;
    setAmountWithdrawn = amount => { this.amountWithdrawn = amount };
    getTransactionBalance = () => this.balance;
    setTransactionBalance = amount => { this.balance = amount };
}

class MockTransaction4 {

    date = "16/01/2012";
    amountDeposited = undefined;
    amountWithdrawn = 5000;
    balance = -2500.00;

    getDate = () => this.date;
    setDate = date => { this.date = date };
    getAmountDeposited = () => this.amountDeposited;
    setAmountDeposited = amount => { this.amountDeposited = amount };
    getAmountWithdrawn = () => this.amountWithdrawn;
    setAmountWithdrawn = amount => { this.amountWithdrawn = amount };
    getTransactionBalance = () => this.balance;
    setTransactionBalance = amount => { this.balance = amount };
}

class MockTransactionPadding4 {

    date = "16/01/2012";
    amountDeposited = '         ';
    amountWithdrawn = ' 5000.00 ';
    balance = ' -2500.00    ';

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


    let transaction1, transaction2, transaction3;
    let transactionFixed1;
    let transactionPadding1;
    let transactionArrayOneElement;
    let transactionArrayOneElementFixed;
    let transactionArrayOneElementPadding;

    let transactionArrayMultiElement

    beforeEach(() => {
        transaction1 = new MockTransaction1();
        transaction2 = new MockTransaction2();
        transaction3 = new MockTransaction3();
        transactionFixed1 = new MockTransactionFixed1();
        transactionPadding1 = new MockTransactionPadding1();
        transactionArrayOneElement = [transaction1]
        transactionArrayOneElementFixed = [transactionFixed1]
        transactionArrayOneElementPadding = [transactionPadding1]

        transactionArrayMultiElement = [transaction1, transaction2, transaction3]
    });

    afterEach(() => {
        transaction1, transaction2, transaction3 = undefined;
        transactionFixed1 = undefined;
        transactionPadding1 = undefined;
        transactionArrayOneElement = undefined;
        transactionArrayOneElementFixed = undefined;
        transactionArrayOneElementPadding = undefined;

        transactionArrayMultiElement = undefined;

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

    it('test 6.1 - should call displayTransactions method with parameter ', () => {
        //Arrange
        const displayTransactionsSpy = spyOn(Printer, 'displayTransactions')

        //Act
        Printer.displayTransactions(transactionArrayOneElement);

        //Assert
        expect(displayTransactionsSpy).toHaveBeenCalledWith(transactionArrayOneElement);
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
        expect(transactionArrayOneElementFixed[0].getAmountWithdrawn()).toBe('        '); // padding 7 and 8
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

    it('test 21 - should call console.log method with parameter as part of displayTransactions()', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')
        const consoleOutput = '10/01/2012 || 1000.00 ||      || 1000.00 '
        //Act
        Printer.displayTransactions(transactionArrayOneElementPadding);

        //Assert
        expect(consoleSpy).toHaveBeenCalledWith(consoleOutput);
    });

    it('test 24 - should call getHeader() method', () => {
        //Arrange
        const getHeaderSpy = spyOn(Printer, 'getHeader')
        //Act
        Printer.getHeader();

        //Assert
        expect(getHeaderSpy).toHaveBeenCalled;
    });

    it('test 25 - should call console.log as part of getHeader() method', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')
        //Act
        Printer.getHeader();

        //Assert
        expect(consoleSpy).toHaveBeenCalled;
    });

    it('test 25 - should call console.log as part of getHeader() method', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')
        const expectedHeader = 'date       || credit  || debit  || balance';
        //Act
        Printer.getHeader();

        //Assert
        expect(consoleSpy).toHaveBeenCalledWith(expectedHeader);
    });

    it('test 26 - should call console.log method with parameter twice in total when following whole formatting process i.e 1 header and 1 transaction', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')
        //Act
        Printer.printTransactions(transactionArrayOneElement);

        //Assert
        expect(consoleSpy).toHaveBeenCalledTimes(transactionArrayOneElement.length + 1);
    });

    it('test 27 - should call console.log method with parameter Quarce in total when following whole formatting process i.e 1 header and 3 transactions', () => {
        //Arrange
        const consoleSpy = spyOn(console, 'log')
        //Act
        Printer.printTransactions(transactionArrayMultiElement);

        //Assert
        expect(consoleSpy).toHaveBeenCalledTimes(transactionArrayMultiElement.length + 1);
    });


})

describe('Printer Tests - User Story 5', () => {

    let transaction1, transaction2, transaction3;
    let transactionFixed1;
    let transactionPadding1;
    let transactionArrayOneElement;
    let transactionArrayOneElementFixed;
    let transactionArrayOneElementPadding;

    let transactionArrayMultiElement

    beforeEach(() => {
        transaction1 = new MockTransaction1();
        transaction2 = new MockTransaction2();
        transaction3 = new MockTransaction3();
        transactionFixed1 = new MockTransactionFixed1();
        transactionPadding1 = new MockTransactionPadding1();
        transactionArrayOneElement = [transaction1]
        transactionArrayOneElementFixed = [transactionFixed1]
        transactionArrayOneElementPadding = [transactionPadding1]

        transactionArrayMultiElement = [transaction1, transaction2, transaction3]
    });

    afterEach(() => {
        transaction1, transaction2, transaction3 = undefined;
        transactionFixed1 = undefined;
        transactionPadding1 = undefined;
        transactionArrayOneElement = undefined;
        transactionArrayOneElementFixed = undefined;
        transactionArrayOneElementPadding = undefined;

        transactionArrayMultiElement = undefined;

    });

    it('test 1 - should call creditColor() method when called', () => {
        //Arrange
        const creditColorSpy = spyOn(Printer, 'creditColor')
        //Act
        Printer.creditColor();

        //Assert
        expect(creditColorSpy).toHaveBeenCalled;
    });

    it('test 2 - should call creditColor() method with parameter when called', () => {
        //Arrange
        const creditColorSpy = spyOn(Printer, 'creditColor')
        //Act
        Printer.creditColor(transactionArrayOneElementPadding);

        //Assert
        expect(creditColorSpy).toHaveBeenCalledWith(transactionArrayOneElementPadding);
    });

    it('test 3 - should call assignCreditColor() method through creditColor() call', () => {
        //Arrange
        const assignCreditColorSpy = spyOn(Printer, 'assignCreditColor')
        //Act
        Printer.creditColor(transactionArrayOneElementPadding);

        //Assert
        expect(assignCreditColorSpy).toHaveBeenCalled;
    });

    it('test 4 - should call assignCreditColor() method with parameter of element 0 of array through creditColor() call', () => {
        //Arrange
        const assignCreditColorSpy = spyOn(Printer, 'assignCreditColor')
        //Act
        Printer.creditColor(transactionArrayOneElementPadding);

        //Assert
        expect(assignCreditColorSpy).toHaveBeenCalledWith(transactionArrayOneElementPadding[0]); // The first element within the array
    });

    it('test 5 - should call assignCreditColor() method ', () => {
        //Arrange
        const assignCreditColorSpy = spyOn(Printer, 'assignCreditColor')
        //Act
        Printer.assignCreditColor();

        //Assert
        expect(assignCreditColorSpy).toHaveBeenCalled;
    });

    it('test 6 - should call assignCreditColor() method with parameter', () => {
        //Arrange
        const assignCreditColorSpy = spyOn(Printer, 'assignCreditColor')
        //Act
        Printer.assignCreditColor(transactionPadding1); // single element at a time since this method is called from another method running a loop

        //Assert
        expect(assignCreditColorSpy).toHaveBeenCalledWith(transactionPadding1);
    });

    it('test 7 - should call colorGreen() method ', () => {
        //Arrange
        const colorGreenSpy = spyOn(Printer, 'colorGreen')
        //Act
        Printer.colorGreen();

        //Assert
        expect(colorGreenSpy).toHaveBeenCalled;
    });

    it('test 8 - should return expected value of colorGreen() ', () => {
        //Arrange
        const colorGreenReturn = `\x1b[0;32m`;
        //Act
        let actual = Printer.colorGreen();

        //Assert
        expect(actual).toBe(colorGreenReturn);
    });

    it('test 9 - should call colorReset() method ', () => {
        //Arrange
        const colorResetSpy = spyOn(Printer, 'resetColor')
        //Act
        Printer.resetColor();

        //Assert
        expect(colorResetSpy).toHaveBeenCalled;
    });

    it('test 10 - should return expected value of colorReset() ', () => {
        //Arrange
        const colorResetReturn = `\x1b[0m`;
        //Act
        let actual = Printer.resetColor();

        //Assert
        expect(actual).toBe(colorResetReturn);
    });

    it('test 11 - should call colorGreen() method through assignCreditColor() call', () => {
        //Arrange
        const colorGreenSpy = spyOn(Printer, 'colorGreen')
        //Act
        Printer.assignCreditColor(transactionPadding1);

        //Assert
        expect(colorGreenSpy).toHaveBeenCalled;
    });

    it('test 12 - should call colorReset() method through assignCreditColor() call', () => {
        //Arrange
        const colorResetSpy = spyOn(Printer, 'resetColor')
        //Act
        Printer.assignCreditColor(transactionPadding1);

        //Assert
        expect(colorResetSpy).toHaveBeenCalled;
    });

    it('test 13 - should change Transaction getAmountDeposited to include key words for the color green and reset(base color)', () => {
        //Arrange
        const expected = `\x1b[0;32m 1000.00 \x1b[0m`
        //Act
        Printer.assignCreditColor(transactionPadding1);
        let actual = transactionPadding1.getAmountDeposited()

        //Assert
        expect(actual).toBe(expected);
    });

});

describe('Printer Tests - User Story 6', () => {


    let transaction1, transaction2, transaction3;
    let transactionFixed1;
    let transactionPadding1, transactionPadding3;
    let transactionArrayOneElement;
    let transactionArrayOneElementFixed;
    let transactionArrayOneElementPadding;

    let transactionArrayMultiElement

    beforeEach(() => {
        transaction1 = new MockTransaction1();
        transaction2 = new MockTransaction2();
        transaction3 = new MockTransaction3();
        transactionFixed1 = new MockTransactionFixed1();
        transactionPadding1 = new MockTransactionPadding1();
        transactionPadding3 = new MockTransactionPadding3();
        transactionArrayOneElement = [transaction1]
        transactionArrayOneElementFixed = [transactionFixed1]
        transactionArrayOneElementPadding = [transactionPadding1]

        transactionArrayMultiElement = [transaction1, transaction2, transaction3]
    });

    afterEach(() => {
        transaction1, transaction2, transaction3 = undefined;
        transactionFixed1 = undefined;
        transactionPadding1, transactionPadding3 = undefined;
        transactionArrayOneElement = undefined;
        transactionArrayOneElementFixed = undefined;
        transactionArrayOneElementPadding = undefined;

        transactionArrayMultiElement = undefined;

    });

    it('test 1 - should call debitColor() method when called', () => {
        //Arrange
        const debitColorSpy = spyOn(Printer, 'debitColor')
        //Act
        Printer.debitColor();

        //Assert
        expect(debitColorSpy).toHaveBeenCalled;
    });

    it('test 2 - should call debitColor() method with parameter when called', () => {
        //Arrange
        const debitColorSpy = spyOn(Printer, 'debitColor')
        //Act
        Printer.debitColor(transactionArrayOneElementPadding);

        //Assert
        expect(debitColorSpy).toHaveBeenCalledWith(transactionArrayOneElementPadding);
    });

    it('test 3 - should call assignDebitColor() method through debitColor() call', () => {
        //Arrange
        const assignDebitColorSpy = spyOn(Printer, 'assignDebitColor')
        //Act
        Printer.debitColor(transactionArrayOneElementPadding);

        //Assert
        expect(assignDebitColorSpy).toHaveBeenCalled;
    });

    it('test 4 - should call assignCreditColor() method with parameter of element 0 of array through creditColor() call', () => {
        //Arrange
        const assignDebitColorSpy = spyOn(Printer, 'assignDebitColor')
        //Act
        Printer.debitColor(transactionArrayOneElementPadding);

        //Assert
        expect(assignDebitColorSpy).toHaveBeenCalledWith(transactionArrayOneElementPadding[0]); // The first element within the array
    });

    it('test 5 - should call assignDebitColor() method ', () => {
        //Arrange
        const assignDebitColorSpy = spyOn(Printer, 'assignDebitColor')
        //Act
        Printer.assignDebitColor();

        //Assert
        expect(assignDebitColorSpy).toHaveBeenCalled;
    });

    it('test 6 - should call assignDebitColor() method with parameter', () => {
        //Arrange
        const assignDebitColorSpy = spyOn(Printer, 'assignDebitColor')
        //Act
        Printer.assignDebitColor(transactionPadding1); // single element at a time since this method is called from another method running a loop

        //Assert
        expect(assignDebitColorSpy).toHaveBeenCalledWith(transactionPadding1);
    });

    it('test 7 - should call colorRed() method ', () => {
        //Arrange
        const colorRedSpy = spyOn(Printer, 'colorRed')
        //Act
        Printer.colorGreen();

        //Assert
        expect(colorRedSpy).toHaveBeenCalled;
    });

    it('test 8 - should return expected value of colorRed() ', () => {
        //Arrange
        const colorRedReturn = `\x1b[0;31m`;
        //Act
        let actual = Printer.colorRed();

        //Assert
        expect(actual).toBe(colorRedReturn);
    });

    it('test 9 - should call colorRed() method through assignDebitColor() call', () => {
        //Arrange
        const colorRedSpy = spyOn(Printer, 'colorRed')
        //Act
        Printer.assignDebitColor(transactionPadding1);

        //Assert
        expect(colorRedSpy).toHaveBeenCalled;
    });

    it('test 10 - should call colorReset() method through assignDebitColor() call', () => {
        //Arrange
        const colorResetSpy = spyOn(Printer, 'resetColor')
        //Act
        Printer.assignDebitColor(transactionPadding1);

        //Assert
        expect(colorResetSpy).toHaveBeenCalled;
    });

    it('test 11 - should change Transaction getAmountDeposited to include key words for the color red and reset(base color)', () => {
        //Arrange
        const expected = `\x1b[0;31m 500.00 \x1b[0m`;
        //Act
        Printer.assignDebitColor(transactionPadding3);
        let actual = transactionPadding3.getAmountWithdrawn()

        //Assert
        expect(actual).toBe(expected);
    });


});

describe('Printer Tests - User Story 7 & 8', () => {


    let transaction1, transaction2, transaction3, transaction4;
    let transactionFixed1;
    let transactionPadding1, transactionPadding3, transactionPadding4;
    let transactionArrayOneElement;
    let transactionArrayOneElementFixed;
    let transactionArrayOneElementPadding;

    let transactionArrayMultiElement

    beforeEach(() => {
        transaction1 = new MockTransaction1();
        transaction2 = new MockTransaction2();
        transaction3 = new MockTransaction3();
        transaction4 = new MockTransaction4();
        transactionFixed1 = new MockTransactionFixed1();
        transactionPadding1 = new MockTransactionPadding1();
        transactionPadding3 = new MockTransactionPadding3();
        transactionPadding4 = new MockTransactionPadding4();
        transactionArrayOneElement = [transaction1]
        transactionArrayOneElementFixed = [transactionFixed1]
        transactionArrayOneElementPadding = [transactionPadding1]

        transactionArrayMultiElement = [transaction1, transaction2, transaction3, transaction4]
    });

    afterEach(() => {
        transaction1, transaction2, transaction3, transaction4 = undefined;
        transactionFixed1 = undefined;
        transactionPadding1, transactionPadding3, transactionPadding4 = undefined;
        transactionArrayOneElement = undefined;
        transactionArrayOneElementFixed = undefined;
        transactionArrayOneElementPadding = undefined;

        transactionArrayMultiElement = undefined;

    });

    it('test 1 - should call balanceColor() method when called', () => {
        //Arrange
        const balanceColorSpy = spyOn(Printer, 'balanceColor')
        //Act
        Printer.balanceColor();

        //Assert
        expect(balanceColorSpy).toHaveBeenCalled;
    });

    it('test 2 - should call balanceColor() method with parameter when called', () => {
        //Arrange
        const balanceColorSpy = spyOn(Printer, 'balanceColor')
        //Act
        Printer.balanceColor(transactionArrayOneElementPadding);

        //Assert
        expect(balanceColorSpy).toHaveBeenCalledWith(transactionArrayOneElementPadding);
    });

    it('test 3 - should call assignBalanceColor() method through balanceColor() call', () => {
        //Arrange
        const assignBalanceColorSpy = spyOn(Printer, 'assignBalanceColor')
        //Act
        Printer.assignBalanceColor(transactionArrayOneElementPadding);

        //Assert
        expect(assignBalanceColorSpy).toHaveBeenCalled;
    });

    it('test 4 - should call assignBalanceColor() method with parameter of element 0 of array through balanceColor() call', () => {
        //Arrange
        const assignBalanceColorSpy = spyOn(Printer, 'assignBalanceColor')
        //Act
        Printer.assignBalanceColor(transactionArrayOneElementPadding);

        //Assert
        expect(assignBalanceColorSpy).toHaveBeenCalledWith(transactionArrayOneElementPadding);
    });
    it('test 5 - should call assignBalanceColor() method ', () => {
        //Arrange
        const assignBalanceColorSpy = spyOn(Printer, 'assignBalanceColor')
        //Act
        Printer.assignBalanceColor();

        //Assert
        expect(assignBalanceColorSpy).toHaveBeenCalled;
    });

    it('test 6 - should call assignBalanceColor() method with parameter', () => {
        //Arrange
        const assignBalanceColorSpy = spyOn(Printer, 'assignBalanceColor')
        //Act
        Printer.assignBalanceColor(transactionPadding1);

        //Assert
        expect(assignBalanceColorSpy).toHaveBeenCalledWith(transactionPadding1);
    });

    it('test 7 - should change Transaction getTransactionBalance to include key words for the color green and reset(base color) for positive balance', () => {
        //Arrange
        const expected = `\x1b[0;32m 1000.00 \x1b[0m`;
        //Act
        Printer.assignBalanceColor(transactionPadding1);
        let actual = transactionPadding1.getTransactionBalance()

        //Assert
        expect(actual).toBe(expected);
    });

    it('test 8 - should change Transaction getTransactionBalance to include key words for the color red and reset(base color) for negative balance', () => {
        //Arrange
        const expected = `\x1b[0;31m -2500.00    \x1b[0m`;
        //Act
        Printer.assignBalanceColor(transactionPadding4);
        let actual = transactionPadding4.getTransactionBalance()

        //Assert
        expect(actual).toBe(expected);
    });

    it('test 9 - should change Transaction getTransactionBalance to include key words for the color green and reset(base color) for positive balance after full process', () => {
        //Arrange
        const expected = `\x1b[0;32m 1000.00 \x1b[0m`;
        //Act
        Printer.printTransactionsWithColor(transactionArrayMultiElement);
        let actual = transactionArrayMultiElement[0].getTransactionBalance()

        //Assert
        expect(actual).toBe(expected);
    });

    it('test 10 - should change Transaction getTransactionBalance to include key words for the color red and reset(base color) for negative balance after full process', () => {
        //Arrange
        const expected = `\x1b[0;31m-2500.00 \x1b[0m`;
        //Act
        Printer.printTransactionsWithColor(transactionArrayMultiElement);
        let actual = transactionArrayMultiElement[3].getTransactionBalance()

        //Assert
        expect(actual).toBe(expected);
    });

});