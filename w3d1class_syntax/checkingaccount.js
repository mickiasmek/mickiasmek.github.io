class CheckingAccount extends Account {

    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }
    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        // tweaking the parent method without replacing the whole method 
        //Can withdraw overdraft up to 250 dollars
        if (amount > this._balance && amount < this._overdraft){
            return this._balance -= amount;
        }
        super.withdraw();//then call the parent withdraw
        
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ": overdraft limit " + this._overdraft;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {string}
     */
    endOfMonth() {
        if(this._balance < 0){
            return "Warning, low balance " + this._number + ": balance " + this._balance + " overdraft: " + this.getOverdraft(); // return warning
        }
       
    }
}


