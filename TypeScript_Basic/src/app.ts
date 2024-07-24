//Type assertion
let username: unknown;
username = "Chin";
console.log((username as string).toLowerCase());
// console.log((<string>username).toLowerCase());

//if else
let amount: number = 50;
let result: string;

// if (amount % 2 === 0) {
//   result = "even";
// } else {
//   result = "odd";
// }

result = amount % 2 === 0 ? "even" : "odd";

console.log(`${amount} is an ${result} number`);

//Switch Case
let service: number = 1;
let result2: string;

switch (service) {
  case 1:
    result2 = "สอบถามยอดเงินในบัญชี";
    break;
  case 2:
    result2 = "ฝากเงิน";
    break;
  case 3:
    result2 = "ถอนเงิน";
    break;
  default:
    result2 = "หมายเลขบริการไม่ถูกต้อง";
    break;
}
console.log(result2);

//for loop
let users: string[] = ["Chin", "Chin1", "Chin2"];
for (let i: number = 0; i < users.length; i++) {
  console.log(users[i]);
}
