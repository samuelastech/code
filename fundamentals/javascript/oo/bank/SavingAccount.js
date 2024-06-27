import { Account } from "./Account.js";

class SavingAccount extends Account {
  constructor ({ initialBalance = 0, client, agency }) {
    super({ initialBalance, client, agency });
  }
}

export { SavingAccount };
