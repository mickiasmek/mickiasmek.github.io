"use-strict";

class Bank {
    static nextNumber = 0;
    constructor() {
        this._accounts = [];
    }
    addAccount() {
        let account = new Account(Bank.nextNumber);
        Bank.nextNumber++;
        this._accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        let savingsAccount = new SavingAccount(Bank.nextNumber, interest);
        Bank.nextNumber++;
        this._accounts.push(savingsAccount);
        return savingsAccount.getNumber();

    }

    addCheckingAccount(overdraft) {
        let checkingAccount = new CheckingAccount(Bank.nextNumber, overdraft);
        Bank.nextNumber++;
        this._accounts.push(checkingAccount);
        return checkingAccount.getNumber();
    }

    closeAccount(number) {
        if((this._accounts.find(number => number === Bank.nextNumber) === true)) {
            let accountIndex;
            while ((accountIndex = this._accounts.indexOf(number)) > -1)
            {
                this._accounts.splice(accountIndex, 1)
            }
        }else{
            throw new RangeError("Account not Found!");
        }
    }

    accountReport(){
        for(acct in this._accounts){
            return acct.toString();
        }
    }

    endOfMonth(){
        for(acct in this._accounts){
            return acct.endOfMonth();
        }
    }


}