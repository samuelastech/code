const { HashTable } = require('./HashTable');

const table = new HashTable();

table.setItem("teste", 55);
table.setItem("samuel", "souza");
table.setItem("edinaldo", "oliveira");
table.setItem("macaco", "come banana");

console.log(table.getItem("teste"))
