import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";
import { SavingAccount } from "./SavingAccount.js";

const client1 = new Client({ name: "Ricardo", cpf: 11122233309 });
const client2 = new Client({ name: "Alice", cpf: 88822233309 });

const ricardoAccount = new CheckingAccount({ agency: 1001, client: client1});
ricardoAccount.deposit(500);
ricardoAccount.withdraw(100);

const aliceAccount = new SavingAccount({ agency: 102, client: client2});
ricardoAccount.transfer(200, aliceAccount);

console.log(ricardoAccount.show());
console.log(aliceAccount.show());
