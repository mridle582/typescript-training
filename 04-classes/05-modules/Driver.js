"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customer("James", "Finn");
console.log(`Customer name is ${myCustomer.firstName} ${myCustomer.lastName}`);
