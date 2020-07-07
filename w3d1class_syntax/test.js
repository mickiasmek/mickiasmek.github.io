
"use-strict"
describe("Account Class Methods Test", () => {
    let expect = chai.expect;

    function getInstace() {
        return new Account("A-77");
    }

    it("Getter for the 'private' number field which returns an account number",
        () => {
            const account = getInstace();
            account._balance = 500;
            expect(account._number).to.be.a("string").and.equal("A-77");
        });

    it("Getter for the 'private' balance field which returns balance for an account",
        () => {
            const account = getInstace();
            account._balance = 500;
            expect(account._balance).to.be.a("number").and.equal(500);
        });

    it("Method to add money into the account",
        () => {
            const account = getInstace();
            account._balance = 500;
            let amount = 90;
            expect(account.deposit(amount)).to.be.a("number").and.equal(590);
        });

    it("Method to take money out of the account:",
        () => {

            const account = getInstace();
            account._balance = 500;
            expect(account.withdraw(40)).to.be.a("number").and.equal(460);
        });

    it("String representation for this account",
        () => {
            const account = getInstace();
            account._balance = 500;
            expect(account.toString()).to.be.a("string").and.equal("Account A-77: balance 500")
        })
});

describe("Saving Account Class Methods Test", () => {
    let expect = chai.expect;

    function getInstace() {
        return new SavingAccount("S-17", 1.5);
    }
    it("Getter for the 'private' interest field which returns an interest",
        () => {
            const savingAccount = getInstace();
            expect(savingAccount.getInterest()).to.be.a("number").and.equal(1.5);
        });

    it("Setter for the 'private' interest field which sets the interest",
    ()=>{
        const savingAccount = getInstace();
        let interestRate = 3.2;
        savingAccount.setInterest(interestRate);
        expect(savingAccount._interest).to.be.a("number").and.equal(3.2);

    })

    it(" Method that adds interest on the account",
        () => {
            const savingAccount = getInstace();
            savingAccount._balance = 400;
            savingAccount.setInterest(2.5); //Setting Interest Rate using the set Method
            expect(savingAccount.addInterest()).to.be.a("number").and.equal(410);
        })

    it("String representation for saving account",
        () => {
            const savingAccount = getInstace();
            savingAccount._balance = 300;
            expect(savingAccount.toString()).to.be.a("string").and.equal("Saving Account S-17: balance 300: interest 1.5");
        });

});

describe("Checking Account Class Methods Test", () => {
    let expect = chai.expect;
    
    function getInstace(){
        return new CheckingAccount("C-12",250);
    }
    it("Getter for the 'private' overdraft field which returns an overdraft limit",
    ()=> {
        const checkingAccount = getInstace();
        expect(checkingAccount.getOverdraft()).to.be.a("number").and.equal(250);
    })

    it("Setter for the 'private' overdraft field which sets an overdraft limit",
    ()=>{
        const checkingAccount = getInstace();
        let overdraft = 300;
        checkingAccount.setOverdraft(overdraft);
        expect(checkingAccount._overdraft).to.be.a("number").and.equal(300);

    })

    it("Method to take money out of account with overdraft", 
    ()=>{
        const checkingAccount = getInstace();
        checkingAccount._balance = 0;
        checkingAccount.setOverdraft(150);
        expect(checkingAccount.withdraw(151)).to.be.a("number").and.equal(-40);


    })

    it("String representation for checking account",
    () => {
        const savingAccount = getInstace();
        savingAccount._balance = 750;
        expect(savingAccount.toString()).to.be.a("string").and.equal("Checking Account C-12: balance 750: overdraft limit 250");
    });

});


describe("Bank Class Methods Test", () => {
    let expect = chai.expect;
    
    function getInstace(){
        return new Bank();
    }
    it()



});
