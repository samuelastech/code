import { Client } from "./Client.js";

class Account {
  #client;
  #agency;
  #balance = 0;

  constructor ({ initialBalance = 0, client, agency }) {
    this.#balance = initialBalance;
    this.#client = client;
    this.#agency = agency;
  }

  set client(client){
    if(client instanceof Client){
      this.#client = client;
    }
  }

  get client(){
    return this.#client;
  }

  get balance(){
    return this.#balance;
  }

  withdraw(value){
    if(this.#balance >= value){
      this.#balance -= value;
      return value;
    }
  }

  deposit(value){
      if(value > 0) {
        this.#balance += value;
      }
  }

  transfer(value, account){
    const amountWithdrawn = this.withdraw(value);
    account.deposit(amountWithdrawn);
  }

  show () {
    return {
      balance: this.#balance,
      agency: this.#agency,
      client: {
        name: this.#client.name,
      },
    }
  }
}

export { Account };