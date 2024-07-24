//ฟังชั่น void = ไม่มีการรับส่งค่า
const sayHi = (): void => {
  console.log("Hello, World!");
};

// sayHi();

//ฟังชั่นรับ param = มีการรับค่า
const greeting = (name: string) => {
  console.log(`Hello, ${name}`);
};

// greeting("John");

//ฟังชั่นที่มีการ return
const getDiscount = (): number => {
  return 500;
};
const getAddress = (): string => {
  return "123 Main Street";
};

// console.log(getDiscount(), getAddress());

//ฟังชั่นที่มีการรับส่งค่า
const checkNumber = (num: number) => {
  const result: string = num % 2 == 0 ? "even" : "odd";
  console.log(result);
  return result;
};
const sum = (a: number, b: number): number => {
  const result: number = a + b;
  console.log(result);
  return result;
};

// checkNumber(3);
// sum(1, 2);

const showEmployee = (name: string, age: number, address: string) => {
  console.log(`Name: ${name}, Age: ${age}, Address: ${address}`);
};

// showEmployee("John", 30, "123 Main Street");

//object
const person: { name: string; age: number } = {
  name: "John",
  age: 30,
};

const position: { lat: number; long: number } = {
  lat: 30,
  long: 50,
};

//ฟังชั่นรับ object
const showDetail = (data: { name: string; age: number }): void => {
  console.log(`Name: ${data.name}, Age: ${data.age}`);
};

// showDetail(person);

//ฟังชั่นส่ง object
const randomPosition = (): { lat: number; long: number } => {
  return {
    lat: Math.random(),
    long: Math.random(),
  };
};

// console.log(randomPosition());

//Type Aliases คือ การกําหนดชนิดของตัวแปร
type Employee = {
  readonly id: number; //เปลี่ยนไม่ได้
  name: string;
  salary: number;
  contact?: string; //ไม่จำเป็นต้องกรอก
};
let emp1: Employee = {
  id: 1,
  name: "John",
  salary: 1000,
  contact: "1234567890",
};
let emp2: Employee = {
  id: 2,
  name: "Jane",
  salary: 2000,
};
emp1.salary = 2000;
emp2.salary = 3000;

//Array
const users: string[] = [];
users.push("John", "Jane", "Jack");
console.log(users);

const numbers: number[] = [1, 2, 3];

//การเข้าถึงสมาชิกมี 3 แบบ คือ index forloop+length foreach
// console.log(users[0], users[1], users[2]);

//for (let i:number = 0 ; i<users.length ; i++){
//   console.log(users[i])
// }

//user.forEach((user) => {
//   console.log(user);
// })
