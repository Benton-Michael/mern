// callback using ternary statements
// for example purposes -- writing without ternary statement for readability, however
// const isEven = (num, cb) => {
// num % 2 === 0 ? cb(null,'even') : cb('odd', null);
// }

const isEven = (num, cb) => {
  if (num % 2 === 0) {
    cb(null, "even");
  } else {
    cb("odd", null);
  }
};

// Promises
const noMondays = new Promise((resolve, reject) => {
  if (new Date().getDay() !== 1) {
    resolve("Good, it's not Monday!");
  } else {
    reject("Someone has a case of the Mondays!");
  }
});
noMondays.then((res) => console.log(res)).catch((err) => console.log(err));

// Advantages of Promises
// Better control of asynchronous code flow
// Easy to read
// Avoiding "callback hell"
