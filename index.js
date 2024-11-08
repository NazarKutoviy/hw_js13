// 1
// const user = {
//   name: "mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }
// 2
// const countProps=function(obj){
// return Object.keys(obj),length;
// };
// console.log(countProps({}));
// console.log(countProps({name:"mango",age: 2}));
// console.log(countProps({mail:"poly@mail.com",isOnline:true,score:500,}));
// 3
// const findBestLoyee = function (empLoyees) {
//   let bestEmployee = "";
//   let maxTasks = 0;
//   for (empLoyee in employees) {
//     if (empLoyees[employee] > maxTasks) {
//       maxTasks = empLoyees[employee];
//       bestEmployee = employee;
//     }
//   }
//   return bestEmpLoyee;
// };
// console.log(
//   findBestLoyee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );
// console.log(
//   findBestLoyee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// );
// console.log(
//   findBestLoyee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );
// 4
// const countTotalSalary = function (empLoyees) {
//   let totalSalary = 0;
//   for (const salary of Object.values(empLoyees)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// };
// console.log(countTotalSalary);
// console.log(
//   countTotalSalary({
//     mango: 10,
//     poly: 150,
//     alfred: 80,
//   })
// );
// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// );
// 5
// const products=[
// {name: 'radar',price:1300,quantity:7},
// {name: 'apple vision pro',price:2600,quantity:10}
// ]
// function getAllPropValues(arr, prop) {
//     const values = [];

//     for (const item of arr) {
//       if (prop in item) {
//         values.push(item[prop]);
//       }
//     }

//     return values;
//   }

// console.log(getAllPropValues(products, "name"));
// console.log(getAllPropValues(products, "price"));
// console.log(getAllPropValues(products, "quantity"));
// 6
// const products = [
//   { name: "Apple", price: 100, quantity: 5 },
//   { name: "Banana", price: 50, quantity: 10 },
//   { name: "Orange", price: 75, quantity: 3 },
// ];
// function calculateTotalPrice(allProducts, productName) {
//   let totalPrice = 0;

//   for (const product of allProducts) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }

//   return totalPrice;
// }
// console.log(calculateTotalPrice(products, "Apple"));
// console.log(calculateTotalPrice(products, "Banana"));
// console.log(calculateTotalPrice(products, "Orange"));
// console.log(calculateTotalPrice(products, "Grapes"));
// 7
class Account {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
    this.transactionHistory = [];
  }
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.error("Сума поповнення має бути більше 0.");
      return;
    }
    this.balance += amount;
    this._addTransaction("deposit", amount);
    console.log(`Ваш рахунок поповнено на ${amount}. Баланс: ${this.balance}`);
  }
  withdraw(amount) {
    if (amount <= 0) {
      console.error("Сума зняття має бути більше 0.");
      return;
    }
    if (amount > this.balance) {
      console.error("Недостатньо коштів для зняття.");
      return;
    }
    this.balance -= amount;
    this._addTransaction("withdraw", amount);
    console.log(`Знято ${amount}. Баланс: ${this.balance}`);
  }
  getTransactionHistory() {
    return this.transactionHistory;
  }
  _addTransaction(type, amount) {
    const date = new Date();
    this.transactionHistory.push({
      type: type,
      amount: amount,
      date: date.toLocaleString(),
    });
  }
}
const account = new Account(500);
account.deposit(200);
account.withdraw(100);
console.log("Баланс:", account.getBalance());
console.log("Історія транзакцій:", account.getTransactionHistory());
