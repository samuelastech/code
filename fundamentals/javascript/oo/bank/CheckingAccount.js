import { Account } from "./Account.js";

class CheckingAccount extends Account {
    static #accountsNumber = 0;
    
    constructor({ agency , client }){
        super({ agency, client })
        CheckingAccount.#accountsNumber++;
    }
}

export { CheckingAccount };
