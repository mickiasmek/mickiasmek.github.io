"use-strict"
class SavingAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest = interest;
    }
    /**
     * Setter for the 'private' interest field
     * 
     * @returns {number}  interest
     */
    setInterest(interest){
        this._interest = interest;

    }

     /**
     * Getter for the 'private' interest field
     * 
     * @returns {number}  interest
     */
    getInterest(){
        return this._interest;
    }

    /**
     * Method that deposits the interest amount in to the account
     * 
     * @param {balance} money in the account 
     * @returns {number} deposited money after applying interest on the balance
     * @throws {RangeError} when amount is less than or equal to zero
     */
    addInterest(){
        let interestRate = (this.getBalance() * (this._interest/100));
        return this.deposit(interestRate);
    }
    
    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

     /**
     * Performs needed actions at the end of the month
     * 
     * @returns {string}
     */
    endOfMonth() {
        
            return "Interest added " + this._number + ": balance " + this._balance + " overdraft: " + this.getInterest(); // return message
        
       
    }


}