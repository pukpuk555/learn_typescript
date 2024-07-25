"use strict";
//ฟังชั่น void = ไม่มีการรับส่งค่า
const sayHi = () => {
    console.log("Hello, World!");
};
// sayHi();
//ฟังชั่นรับ param = มีการรับค่า
const greeting = (name) => {
    console.log(`Hello, ${name}`);
};
// greeting("John");
//ฟังชั่นที่มีการ return
const getDiscount = () => {
    return 500;
};
const getAddress = () => {
    return "123 Main Street";
};
// console.log(getDiscount(), getAddress());
//ฟังชั่นที่มีการรับส่งค่า
const checkNumber = (num) => {
    const result = num % 2 == 0 ? "even" : "odd";
    console.log(result);
    return result;
};
const sum = (a, b) => {
    const result = a + b;
    console.log(result);
    return result;
};
// checkNumber(3);
// sum(1, 2);
const showEmployee = (name, age, address) => {
    console.log(`Name: ${name}, Age: ${age}, Address: ${address}`);
};
// showEmployee("John", 30, "123 Main Street");
//object
const person = {
    name: "John",
    age: 30,
};
const position = {
    lat: 30,
    long: 50,
};
//ฟังชั่นรับ object
const showDetail = (data) => {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
};
// showDetail(person);
//ฟังชั่นส่ง object
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random(),
    };
};
let emp1 = {
    id: 1,
    name: "John",
    salary: 1000,
    contact: "1234567890",
};
let emp2 = {
    id: 2,
    name: "Jane",
    salary: 2000,
};
emp1.salary = 2000;
emp2.salary = 3000;
//Array
const users = [];
users.push("John", "Jane", "Jack");
// console.log(users);
const numbers = [1, 2, 3];
const employees = [];
employees.push({
    name: "John",
    salary: 1000,
    department: "IT",
});
employees.push({
    name: "Jane",
    salary: 2000,
    department: "HR",
});
function sayHi2(name) {
    if (!name) {
        return `Hello World`;
    }
    if (typeof name === "string") {
        return `Hello ${name}`;
    }
    throw new Error("Invalid input");
}
function total(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return (parseInt(a) + parseInt(b)).toString();
    }
    throw new Error("Invalid input");
}
// console.log(total(100, 200));
// console.log(total("100", "200"));
//Spread Operator
const numbers2 = [1, 2, 3];
const numbers3 = [4, 5, 6];
numbers2.push(...numbers3);
// console.log(numbers2);
//Rest parameter
const total2 = (...number) => {
    return number.reduce((arg, num) => arg + num, 0);
};
// console.log(total2(1, 2, 3, 4, 5));
// console.log(total2(1, 2, 3, 4));
// console.log(total2(1, 2, 3));
//destructuring
const colors = ["แดง", "เขียว", "น้ำเงิน"];
const [red, green, blue] = colors;
// const red: string = colors[0];
// const green: string = colors[1];
// const blue: string = colors[2];
// console.log(red, green, blue);
const person2 = {
    firstName: "John",
    age: 30,
};
const { firstName, age } = person2;
const goodStatus = [200, "OK"];
const badStatus = [400, "Bad Request"];
const notFoundStatus = [404, "Not Found"];
const errorStatus = [500, "Internal Server Error"];
