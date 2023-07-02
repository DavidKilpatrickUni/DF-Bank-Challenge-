# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* Results of your code should display via the JavaScript console.  (NB: You don't need to implement a command line interface that takes user input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is clean and well formatted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] Can you format the console output?  Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative

You may find this link useful [Output to the command line using NodeJS](https://nodejs.dev/en/learn/output-to-the-command-line-using-nodejs/) - check the formatting section (and this links out to a GitHub doc on the [ANSI color codes](https://gist.github.com/iamnewton/8754917))

### Acceptance 

### User Story 1
As a bank company
I want to be able to have customers have accounts
So that we can do business through transactions

### Domain Model

|-Objects;     |-Properties;                            |-Messages;                       |-Output;
|--------------|----------------------------------------|---------------------------------|-----------                                    
|-Account;     |-accountID @Number;                     |                                 |
|              |-balance @Number;                       |                                 |
|              |-listOfTransaction @Array[Transaction]; |-makeTransaction(@Transaction);  |-@void;                 
|              |                                        |                                 |
|-Transaction; |-transactionID @Number                  |                                 |

### User Story 2
As a bank company
I want customers to be able to make deposits into their account
So their money can be stored, tracked and recorded within the company

-Objects;       -Properties;                          -Messages;                                    -Output;
                                                   
-Account;                                             -accountDeposit(@Transaction, @Number)        -@void
             
                                            
-Transaction    -balance @Number;                     -deposit(@number)                             -@void
                -amountDeposited @Number;             -setAccountBalancePlus(@Number)               -@void
                
                

### User Story 3
As a bank company 
I want customers to be able to withdraw money from their accounts
So customers can retrieve their money whilst keeping the companies records correct


-Objects;       -Properties;                          -Messages;                                    -Output;
                                                   
-Account;                                             -accountDeposit(@Transaction, @Number)        -@void
             
                                            
-Transaction    -amountWithdrawn @Number;             -withdraw(@number)                            -@void
                                                      -setAccountBalanceMinus(@Number)              -@void
                
                


### User Story 4
As a bank company
I want printable bank statements of accounts
So customers can see transfers (deposit or withdraw), date of said transfers and the account balance

-Objects;       -Properties;                          -Messages;                                    -Output;
                                                   
-Printer;                                             -printTransactions(@Array[Transaction])       -console.log(@String)
             
                                            
-Transaction    -date Date();                                                     
                                                      


### Extended 

### User Story 5
As a bank company
I want printable bank statements of accounts to include green text for credited values 
So customers can see more clearly deposit transaction type

-Objects;       -Properties;                          -Messages;                                    -Output;
                                                   
-Printer;                                             -assignCreditColor(@Transaction)              -@void
                                                      -colorGreen()                                 -@String
                                                      -resetColor()                                 -@String
### User Story 6
As a bank company
I want printable bank statements of accounts to include red text for debited values 
So customers can see more clearly withdraw transaction type

-Objects;       -Properties;                          -Messages;                                    -Output;
                                                   
-Printer;                                             -assignDebitColor(@Transaction)               -@void
                                                      -colorRed()                                   -@String


### Reasoning Next 2 User Stories can be done using the same Domain Model. If balance is >= 0 make me text green and red if < 0

### User Story 7
As a bank company
I want printable bank statements of accounts to include green text for positive balance values
So customers can see more clearly balance condition

### User Story 8
As a bank company
I want printable bank statements of accounts to include red text for negative balance values
So customers can see more clearly balance condition

-Objects;       -Properties;                          -Messages;                                    -Output;
                                                   
-Printer;                                             -assignBalanceColor(@Transaction)               -@void
                                                 












-Objects;     -Properties;                            -Messages;                      -Output;

-Transaction; -transactionID @String;                 -transactionDeposit();   
              -dateOfTransaction @Date;
                                                      

-Account;     -listOfTransaction @Array[Transaction]; -accountDeposit();                       -@Void;
              
              
              -balance @decimal                       