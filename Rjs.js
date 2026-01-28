// let numbers = [1, 2, 5, 3, 4];
// numbers.sort((a, b) => b - a);
// numbers.reverse();
// console.log(numbers);

// const circle = {
//   radius: 20,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this?.radius,
// };

// console.log(circle.diameter());
// console.log(circle.perimeter());

// const weather = (function getWeather(temp) {
//   switch (true) {
//     case temp < 0:
//       return "freezing";
//     case temp < 10:
//       return "cold";
//     case temp < 24:
//       return "cool";
//     default:
//       return "unknown";
//   }
// })(10);

// console.log(weather);

// console.log(
//   "%cThis is a red text with bigger font",
//   "color:red; font-size:20px"
// );

// console.group("User Details");
// console.log("name: Sudheer Jonna");
// console.log("job: Software Developer");

// // Nested Group
// console.group("Address");
// console.log("Street: Commonwealth");
// console.log("City: Los Angeles");
// console.log("State: California");

// // Close nested group
// console.groupEnd();

// // Close outer group
// console.groupEnd();
// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);
// console
//   .log("First line");
//   [("a", "b", "c")].forEach((element) => console.log(element + '66'));
// console.log("Third line");

// const numbers = [11, 25, 31, 23, 33, 18, 200];
// numbers.sort((a, b) => a - b);
// console.log(numbers);
console.log(name);
console.log(message());
var name = 'John';
var message = function () {
   console.log('Hello John: Welcome');
};