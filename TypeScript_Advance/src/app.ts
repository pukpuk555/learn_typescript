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
// console.log(users);

const numbers: number[] = [1, 2, 3];

//การเข้าถึงสมาชิกมี 3 แบบ คือ index forloop+length foreach
// console.log(users[0], users[1], users[2]);

//for (let i:number = 0 ; i<users.length ; i++){
//   console.log(users[i])
// }

//user.forEach((user) => {
//   console.log(user);
// })

//Array & type aliases
type Employee2 = {
  name: string;
  salary: number;
  department: string;
};

const employees: Employee2[] = [];
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

// for (let person of employees) {
//   console.log(person.name, person.salary, person.department);
// }

//Function Overloading สามารถสร้างฟังชั่นชื่อซ้ำได้
function sayHi2(): string;
function sayHi2(name: string): string;
function sayHi2(name?: string): string {
  if (!name) {
    return `Hello World`;
  }
  if (typeof name === "string") {
    return `Hello ${name}`;
  }
  throw new Error("Invalid input");
}

// console.log(sayHi2());
// console.log(sayHi2("John"));
// console.log(sayHi2(123)); //error

function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: unknown, b: unknown): unknown {
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
const numbers2: number[] = [1, 2, 3];
const numbers3: number[] = [4, 5, 6];
numbers2.push(...numbers3);
// console.log(numbers2);

//Rest parameter
const total2 = (...number: number[]) => {
  return number.reduce((arg, num) => arg + num, 0);
};

// console.log(total2(1, 2, 3, 4, 5));
// console.log(total2(1, 2, 3, 4));
// console.log(total2(1, 2, 3));

//destructuring
const colors: string[] = ["แดง", "เขียว", "น้ำเงิน"];
const [red, green, blue] = colors;
// const red: string = colors[0];
// const green: string = colors[1];
// const blue: string = colors[2];

// console.log(red, green, blue);

const person2: { firstName: string; age: number } = {
  firstName: "John",
  age: 30,
};

const { firstName, age } = person2;

// console.log(firstName, age);

//Tuple
//Tuple คือ ชุดตัวเเปรที่อยู่ในรูปลำดับใช้เก็บค่าข้อมูลให้อยู่ในกลุ่มเดียวกัน คล้ายกับ Array
//Array มีความยืดหยุ่น แต่ Tuple มีขนาดตายตัว
//สมาชิกใน Array ต้องเป็นชนิดเดียวกับ แต่ Tuple มีชนิดข้อมูลต่างกันได้ โดยจะต้องระบุชนิดข้อมูลกำกับ

//const goodStatus: [code: number, status: string] = [200, "OK"];

//Type Tuple
type HttpStatusCode = [number, string];
const goodStatus: HttpStatusCode = [200, "OK"];
const badStatus: HttpStatusCode = [400, "Bad Request"];
const notFoundStatus: HttpStatusCode = [404, "Not Found"];
const errorStatus: HttpStatusCode = [500, "Internal Server Error"];
