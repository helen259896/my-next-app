### Table of Contents
<!-- TOC_START -->
| 1 | [Hoisting](#hHoisting) |
| 2 | [Lexical scoping](#Lexical-scoping) |
| 3 | [Scope](#Scope) |
| 4 | [global variables](#global-variables) |
| 5 | [module scope](#module-scope) |
| 6 | [problems of global variables](#problems-of-global-variables) |
| 7 | [Spread Operator](#Spread-Operator) |
| 8 | [spread operator vs rest parameter](#spread-operator-vs-rest-parameter) |
| 9 | [built-in iterables](#built-in-iterables) |
| 10 | [differences (for..of) vs (for..in)](#differences-(for..of)-vs-(for..in)) |
| 11 | [== vs ===](#==-vs-===) |
| 12 | [events](#events) |
| 13 | [Event loop](#Event-loop) |
| 14 | [task in event queue](#task-in-event-queue) |
| 15 | [different event loops](#different-event-loops) |
| 16 | [purpose of queueMicrotask](#purpose-of-queueMicrotask) |
| 17 | [heap](#heap) |
| 18 | [event table](#event-table) |
| 19 | [Event driven Program](#Event-driven-Program) |
| 20 | [Event flow (Event propagation)](#Event-flow-(Event-propagation)) |
| 21 | [Event propagation phases](#Event-propagation-phases) |
| 22 | [Event capturing](#Event-capturing) |
| 23 | [Event bubbling](#Event-bubbling) |
| 24 | [Event Delegation](#Event-Delegation) |
| 25 | [stopPropagation](#stopPropagation) |
| 26 | [This keywork](#This-keywork) |
| 27 | [This in Event Handlers](#This-in-Event-Handlers) |
| 28 | [Cookie, localStorage and sessionStorage](#Cookie-localStorage-and-sessionStorage) |
| 29 | [null, undefined, undeclared variables](#null-undefined-undeclared-variables) |
| 30 | [null vs undefined](#null-vs-undefined) |
| 31 | [nullish coalescing operator (??)](#nullish-coalescing-operator-(??)) |
| 32 | [optional chaining (?.)](#optional-chaining-(?.)) |
| 33 | [window vs document](#window-vs-document) |
| 34 | [find operating system detail](#find-operating-system-detail) |
| 35 | [window location obj](#window-location-obj) |
| 36 | [window history obj](#window-history-obj) |
| 37 | [native, host and user obj](#native-host-and-user-obj) |
| 38 | [Call,  apply, bind](#Call-apply-bind) |
| 39 | [mouseenter vs mouseover](#mouseenter-vs-mouseover) |
| 40 | [Differentiate between synchronous and asynchronous func](#Differentiate-between-synchronous-and-asynchronous-func) |
| 41 | [asynchronous func](#asynchronous-func) |
| 42 | [How to use await outside of async function prior to ES2022](#How-to-use-await-outside-of-async-function-prior-to-ES2022) |
| 43 | [Arrow functions (lambda expression)](#Arrow-functions-(lambda-expression)) |
| 44 | [First class function](#First-class-function) |
| 45 | [Unary function](#Unary-function) |
| 46 | [Currying function](#Currying-function) |
| 47 | [Let vs var](#Let-vs-var) |
| 48 | [Temporal dead zone](#Temporal-dead-zone) |
| 49 | [IIFE](#IIFE) |
| 50 | [Closures](#Closures) |
| 51 | [script, scritp async, script defer](#script-scritp-async-scrip-defer) |
| 52 | [Modules](#Modules) |
| 53 | [double exclamation (!!)](#double-exclamation-(!!)) |
| 54 | [JavaScript is interpreted language](#JavaScript-is-interpreted-language) |
| 55 | [JSON](#JSON) |
| 56 | [PWAs](#PWAs) |
| 57 | [double exclamation](#double-exclamation) |
| 58 | [polyfill](#polyfill) |
| 59 | [tree shaking](#tree-shaking) |
| 60 | [minification](#minification) |
| 61 | [reflow vs repaint](#reflow-vs-repaint) |
| 62 | [Debouncing](#Debouncing) |
| 63 | [throttling](#throttling) |
| 64 | [primitives vs non-primitives](#primitives-vs-non-primitives) |
| 65 | [side-effects](#side-effects) |
| 66 | [common design patterns](#common-design-patterns) |
| 67 | [module pattern](#module-pattern) |
| 68 | [Function Composition](#Function-Composition) |
| 69 | [phases of execution context](#phases-of-execution-context) |
| 70 | [memory leaks](#memory-leaks) |
| 71 | [inline caching](#inline-caching) |
| 72 | [ways to execute external scripts](#ways-to-execute-external-scripts) |


| 21 | [Scope](#Scope) |
| 22 | [Hoisting](#hHoisting) |
| 24 | [Scope](#Scope) |
| 10 | [Hoisting](#hHoisting) |
| 12 | [Scope](#Scope) |
| 13 | [Hoisting](#hHoisting) |
| 15 | [Scope](#Scope) |
| 16 | [Hoisting](#hHoisting) |
| 18 | [Scope](#Scope) |
| 19 | [Hoisting](#hHoisting) |
| 21 | [Scope](#Scope) |
| 22 | [Hoisting](#hHoisting) |
| 24 | [Scope](#Scope) |
| 9 | [Scope](#Scope) |
| 10 | [Hoisting](#hHoisting) |
| 12 | [Scope](#Scope) |
| 13 | [Hoisting](#hHoisting) |
| 15 | [Scope](#Scope) |
| 16 | [Hoisting](#hHoisting) |
| 18 | [Scope](#Scope) |
| 19 | [Hoisting](#hHoisting) |
| 21 | [Scope](#Scope) |
| 22 | [Hoisting](#hHoisting) |
| 24 | [Scope](#Scope) |
| 10 | [Hoisting](#hHoisting) |
| 12 | [Scope](#Scope) |
| 13 | [Hoisting](#hHoisting) |
| 15 | [Scope](#Scope) |
| 16 | [Hoisting](#hHoisting) |
| 18 | [Scope](#Scope) |
| 19 | [Hoisting](#hHoisting) |
| 21 | [Scope](#Scope) |
| 22 | [Hoisting](#hHoisting) |
| 24 | [Scope](#Scope) |
| 9 | [Scope](#Scope) |
| 10 | [Hoisting](#hHoisting) |
| 12 | [Scope](#Scope) |
| 13 | [Hoisting](#hHoisting) |
| 15 | [Scope](#Scope) |
| 16 | [Hoisting](#hHoisting) |
| 18 | [Scope](#Scope) |
| 19 | [Hoisting](#hHoisting) |
| 21 | [Scope](#Scope) |
| 22 | [Hoisting](#hHoisting) |
| 24 | [Scope](#Scope) |
| 10 | [Hoisting](#hHoisting) |
| 12 | [Scope](#Scope) |
| 13 | [Hoisting](#hHoisting) |
| 15 | [Scope](#Scope) |
| 16 | [Hoisting](#hHoisting) |
| 18 | [Scope](#Scope) |
| 19 | [Hoisting](#hHoisting) |
| 21 | [Scope](#Scope) |
| 22 | [Hoisting](#hHoisting) |
| 24 | [Scope](#Scope) |
| 9 | [Scope](#Scope) |
| 10 | [Hoisting](#hHoisting) |
| 12 | [Scope](#Scope) |
| 13 | [Hoisting](#hHoisting) |
| 15 | [Scope](#Scope) |
| 16 | [Hoisting](#hHoisting) |
| 18 | [Scope](#Scope) |
| 19 | [Hoisting](#hHoisting) |
| 21 | [Scope](#Scope) |
| 22 | [Hoisting](#hHoisting) |
| 24 | [Scope](#Scope) |
<!-- TOC_END -->
1. ### Hoisting
Moving variable and function declarations to the top of their scope during compilation phase.

2. ### Lexical scoping
It determines how variable names are resolved based on their location. Nested functions have access to variables from their parent scopes, enabling them to utilize and manipulate these variables.

3. ### Scope
Scope is the accessibility of variables, functions and obj in different parts of the code during runtime.
In other words, scope determines the visibility of variables in areas of your code.
There are 3 types of scope:
- Global scope: variables declared outside any function or block are accessible throughout the entire code.
- Function scope: variables declared within a  function are accessible only within that function.
- Block scope: declared with let or const within a block are accessible only within that block. 

4. ### global variables
Global variables are available throughout the length of the code without any scope. 
```javascript
msg = "Hello"; // var is missing, it becomes global variable
```

5. ### module scope
It is a scope specific to a module file, isolating variables and functions declared within it from the global scope and other modules.  Variables and functions declared in a module are private by default and can only be accessed by other modules if they are explicitly exported.

key characteristics of module scope
- Variables declared in a module are scoped to that module only.
- Each module has its own top-level scope
- Variables and functions need to be explicitly exported to be used in other modules
- The global scope cannot access module variables unless they are explicitly exported and imported
- Modules are always executed in strict mode

6. ### problems of global variables
name conflict of local and global variables. It is hard to test and debug.

7. ### Spread Operator
(...) allows iterable elements to be expanded into individual elements. It is widely used for copying, merging and passing array elements as function arguments.

8. ###  spread operator vs rest parameter
Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. i.e, Rest parameter is opposite to the spread operator.

9. ### built-in iterables
- Arrays and TypedArrays
- Strings: Iterate over each character or Unicode code-points
- Maps: iterate over its key-value pairs
- Sets: iterates over their elements
- arguments: An array-like special variable in functions
- DOM collection such as NodeList

10. ### differences (for..of) vs (for..in)
for..in: iterates over all enumerable property keys of an object
for..of:  iterates over the values of an iterable object.
```javascript
let arr = ["a", "b", "c"];

arr.newProp = "newVlue";

// key are the property keys
for (let key in arr) {
  console.log(key); // 0, 1, 2 & newProp
}

// value are the property values
for (let value of arr) {
  console.log(value); // a, b, c
}
```


11. ### == vs ===
== converts operands to a common type before comparison. May produce unexpected results.
=== compare both value and type. Ensure accurate comparison. 

12. ### events
Events are things that happen to HTML elements. Such as
Web page has finished loading
Input field was changed
Button was clicked

13. ### Event loop
Event loop allows JavaScript to handle asynchronous tasks on a single thread. It is a continuous process that executes the code. It ensures tasks are handled efficiently without blocking the main thread. 
- Call stack: is where synchronous JS code is executed. It tracks function calls in LIFO order. When a function is called, it is pushed onto the call stack. When it returns, it pops off.
- Web API: handle asynchronous tasks like timers and HTTP requests. They are handled in the background.
- Task Queue (callback queue /macrotasks): stores async callbacks to the queue. Once an asynchronous operation completes, its associated callback function is placed into the task queue. It follows a First-In, First-Out order. It is known as the callback queue or macrotask queue.
Whenever the call stack receives an async function, it is moved into the web API. Based on the function, Web API executes it and waits the result. Once it is finished, it moves the callback into the event queue. Callback of a promise is moved into microtask queue.
- Microtask Queue: holds callbacks for promises (.then(), .catch(), .finally()), queueMicrotask, await, and MutationObserver callback. Microtasks have higher priority than macrotasks and are processed before the event loop moves to the next macrotask.
- Event Loop: the event loop constantly monitors both the call stack and the task queues.
  - When the call stack is empty, it means all synchronous code has finished. The event loop checks the microtask queue: the callback of a promise.
  - Dequeue the task and put it in call stack. It processes all available microtasks in the queue before moving to the task queue. 
  - After the microtask queue is empty, the event loop then checks the task queue. It takes the first callback from the task queue and pushes it onto the call stack for execution.
  - This cycle repeats continuously, allowing JavaScript to handle asynchronous operations without blocking the main thread and keeping the app responsive.
  Execution order:  synchronous code —> microtasks —> macrotasks
Event loop ensures that while the main thread is busy with synchronous code, asynchronous tasks can be processed in the background and their callbacks executed when the main thread becomes available, maintaining a smooth and non-blocking user experience.

14. ### task in event queue
A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue. Below are the list of use cases to add tasks to the task queue,
- When a new javascript program is executed directly from console or running by the <script> element, the task will be added to the task queue.
- When an event fires, the event callback added to task queue
- When a setTimeout or setInterval is reached, the corresponding callback added to task queue

15. ### different event loops
In JavaScript, there are multiple event loops that can be used depending on the context of your application. The most common event loops are:
- The Browser Event Loop
  The Browser Event Loop is used in client-side JavaScript applications and is responsible for handling events that occur within the browser environment, such as user interactions (clicks, keypresses, etc.), HTTP requests, and other asynchronous actions.
- The Node.js Event Loop
  It is used in server-side JavaScript applications and is responsible for handling events that occur within the Node.js runtime environment, such as file I/O, network I/O, and other asynchronous actions.

16. ### purpose of queueMicrotask
The queueMicrotask function is used to schedule a microtask, which is a function that will be executed asynchronously in the microtask queue. The purpose of queueMicrotask is to ensure that a function is executed after the current task has finished, but before the browser performs any rendering or handles user events.
```javascript
console.log("Start"); //1

queueMicrotask(() => {
  console.log("Inside microtask"); // 3
});

console.log("End"); //2
```
By using queueMicrotask, you can ensure that certain tasks or callbacks are executed at the earliest opportunity during the JavaScript event loop, making it useful for performing work that needs to be done asynchronously but with higher priority than regular setTimeout or setInterval callbacks.

17. ### heap
Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.
  ![Screenshot](images/heap.png)


18. ### event table
Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests. i.e Whenever you call a setTimeout function or invoke async operation, it is added to the Event Table. It doesn't not execute functions on it’s own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.
![Screenshot](images/event-table.png)

19. ### Event driven Program
The flow of the program is determined by events, rather than a linear sequence of instructions. This approach is fundamental to creating interactive and responsive web applications and is also prevalent in server-side JS with node.js.
- Events: occurrences that the program can detect and respond to. 
  - User interactions: clicks, mouse movements
  - Browser events: page load, resource loading
  - Custom events: defined by developer
- Event Listeners: functions that listen for specific events on a particular element. When the event occurs, the listener’s associated code is executed.
- Event Handlers: when an event listener detects an event, the handlers are executed.
- Event Object: contains information about the event. It is passed to event handlers.
Benefits of event-driven programming
- Responsiveness: response to user’s actions.
- Asynchronous operations: facilitates non-blocking I/O operations, crucial for web app.
- Modularity and decoupling: components can interact through events without direct dependencies. Improve code organization and maintainability.
- Flexibility: easily add or modify event handlers without altering the core logic of the app.

20. ### Event flow (Event propagation)
It refers to in which order events are handled in the browser when a user interacts with elements on a webpage.

21. ### Event propagation phases:
- Event Capturing: the event starts from the root and move down the DOM tree toward the target
- Target: the event reaches the target element
- Event bubbling: the event bubbles up from the target to the root


22. ### Event capturing
An event starts at the root and propagates down to the target element.

23. ### Event bubbling
It is a mechanism in the DOM where an event is first triggered on the target element and then propagates upward through the DOM tree to the root of the document.

24. ### Event Delegation
Uses a single event listener on a parent element to manage events on its child elements. This approach takes advantage of event bubbling, improving efficiency.
Reduces memory usage .
Dynamically handles added or removed child elements.

25. ### stopPropagation
The stopPropagation method is used to stop the event from bubbling up the event chain. 

26. ### This keywork
This keyword refers to the object that is executing the current function. The value of this depends on how the function is invoked.
- Default binding: refers to the global object, window in browsers
- Implicit binding: refers to the obj before dot
- Explicit binding: defined using call, apply, bind
- Arrow functions: lexically inherit this from surrounding scope.

* this in a function
* this in a method: this refers to the object that owns the method (person in the case).
```javascript
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet();
```
* this in an Event Handler: this refers to the element that triggered the event (the button in this case).
```javascript
 document.getElementById("myButton").addEventListener("click", function () {
          console.log(this);
 });
```
* this with arrow functions: Arrow functions do not have their own this binding; they inherit it from their surrounding (lexical) context.
```javascript
    const obj = {
            age: 42,
            regular: function() { console.log(this.age); },
            arrow: () => { console.log(this.age); }
          };
    obj.regular(); // 42 (this refers to obj)
    obj.arrow();   // undefined (this refers to the outer scope, not obj)
```

27. ### This in Event Handlers
This keyword refers to the object that is executing the current piece of code.
- Within event handlers, this typically refers to DOM element that triggered the event. 
- Its value can change depending on how the handler is defined and invoked.
- To ensure this references the intended context, techniques like using bind, arrow functions or explicitly setting the context are used. 





28. ### Cookie, localStorage and sessionStorage
- Cookie: send with each HTTP request; limited to 4 KB per domain; can be set to expire
- localStorage: persistent storage, 5 MB limit.
- sessionStorage: Data cleared when tab or browser is closed; limit to 5 MB.


29. ### null, undefined, undeclared variables
- Null: represent no value. (typeof null) = object
- Undefined: declared but not assigned a value. (typeof undefined) = undefined
- Undeclared: throw a referenceError 

30. ### null vs undefined
| Null                                                                                            | Undefined                                                                                               |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| It is an assignment value which indicates that variable points to no object.                    | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
| Type of null is object                                                                          | Type of undefined is undefined                                                                          |
| The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.            |
| Indicates the absence of a value for a variable                                                 | Indicates absence of variable itself                                                                    |
| Converted to zero (0) while performing primitive operations                                     | Converted to NaN while performing primitive operations                                                  |


31. ### nullish coalescing operator (??)
It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 
This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.
```javascript
console.log(null ?? true); // true
console.log(false ?? true); // false
console.log(undefined ?? true); // true
```

32. ### optional chaining (?.)
optional chaining operator (?.) reads the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.
```javascript
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```


33. ### window vs document
window
  - it is the root level element in any web page
  - by default window object is available implicitly in the page
  - it has methods alert(), confirm()
document
  - it is the direct child of window obj. This is known as Document Object Model(DOM)
  - access via window.document
  - it provides methods like getElementById, getElementByTagName

34. ### find operating system detail
window.navigator obj contains the os info and platform info

35. ### window location obj
redirect to a new page
get current url
```javascript
function redirect() {
  window.location.href = "newPage.html";
}

console.log("location.href", window.location.href); // Returns full URL
```
It has properties as
- href: the entire URL
- protocol:
- host: hostname and port of the URL
- port: port number
- pathname:
- search: query portion
- hash: anchor portion

36. ### window history obj
window.history obj contains the browser's history. You can load previous and next URL by back() & enxt() methods.
```javascript
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
```

37. ### native, host and user obj
Native obj: are obj that defined by the Javascript. Such as String, Math, Function.
Host obj: are obj provided by the browser or runtime environment (Node)
User obj: are obj defined in javascript code, such as obj for user profile

38. ### Call,  apply, bind
They are methods to control the context in which a function is executed.
- Call: accept arguments as a comma separated list
- Apply: accepts arguments as an array
```javascript
Function sum(a, b){return a+b}
sum.call(null, 1, 2);
sum.apply(null, [1,2]); 
```
- Bind: allow to create a new function with a specific ‘this’ context. It does not immediately invoke the func; instead, it returns a new function that you can call later. 
```javascript
Var inviteEmployee1 = func.bind(obj1);
Var inviteEmployee2 = func.bind(obj2);
inviteEmployee1(‘hello’, ‘hello’);
inviteEmployee1(‘well’, ‘well’);
```

39. ### mouseenter vs mouseover
mouseenter:
- Does not propagate through the DOM tree
- Fires solely when cursor enter the element and children elements
- Triggers only entering parent element regardless of its internal content
mouseover:
- Propagates upwards through the DOM hierarchy
- Activates when cursor enters the element or any of its descendant elements
- May lead to multiple event callbacks if there are nested child elements

40. ### Differentiate between synchronous and asynchronous func
synchronous func:
- Execute operations in a sequential, step-by-step manner
- Block the program’s execution until the current task complete.
- Adhere to a strict, line-by-line execution order
- Are easier to comprehend and debug due to their predictable flow
- Common use cases include reading file synchronously and iterating over large datasets
```javascript
const fs = require('fs');
const data = fs.readFileSync('large-file.txt', 'utf8');
console.log(data); //blocks until file is read
console.log('End of the program');
```
41. ### asynchronous func:
- Allow the program to continue running without waiting for the task to finish
- Enable other operations to proceed while waiting for responses or the completion of time-consuming tasks
- Non-blocking, facilitating concurrent execution and enhancing performance and responsiveness
- Commonly used for network requests, file I/O, timers and animations
```javascript
console.log('Start of the program');
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data)) //non-blocking
  .catch((error) => console.error(error));

console.log('End of the program');
```

42. ### How to use await outside of async function prior to ES2022
Prior to ES2022, if you attempted to use an await outside of an async function resulted in a SyntaxError.
But you can fix this issue with an alternative IIFE (Immediately Invoked Function Expression) to get access to the feature.
```javascript
(async function () {
  await Promise.resolve(console.log("Hello await")); // Hello await
})();
```
In ES2022, you can write top-level await without writing any hacks.
```javascript
await Promise.resolve(console.log("Hello await")); //Hello await
```


43. ### Arrow functions (lambda expression)
- Provide a concise syntax for writing function expression. 
- It doesn’t have this, arguments, super key words. It inherits these from their surrounding context.
- Suits for non-method functions, such as callbacks or simple computation.
- Can't be used as constructors and don't have prototype property.
- Can’t be used with new, yield. 

44. ### First class function
- It means that functions are treated as a variable. You can assign a func to a variable. You can pass a func as an argument to another func. You can return a func from another func.
- It enables patterns such as callback, HOC, event handling. 

45. ### Unary function
Is a function that accepts exactly one argument. 
```javascript
const myFunc = (a) ⇒ a+10
```

46. ### Currying function
Is the process of transforming a function with multiple arguments into a sequence of nested functions, each accepting only one argument at a time.
benefit:
- improve code resuablity.
- enhance functional composition.
- encourage clean modular code.
```javascript
const curryUnaryFunc = (a) ⇒ (b) ⇒ (c) ⇒ a+b+c;
curryUnaryFunc(1)          //1
curryUnaryFunc(2)(3)      //5
curryUnaryFunc(4)(5)(6)  //15
```


47. ### Let, var and const
  | feature      | var             | let              |  const                  |
  |--------------| --------------- | ---------------- | ----------------------- | 
  | scope        |  function       | block            |  block                  |
  | redeclaration| allowed         | not allowed      |  not allowed            |
  | reassignment | allowed         | allowed          |  not allowed            |
  | hoisting     | hoisted to top  | hoisted to top of|  hoisted to top of      |
  |              | of function.    |block,no initialized| block,no initialized  |
  | practice     |   avoid         |prefer for block-scoped var | prefer for constants



48. ### Temporal dead zone
It refers to the period between the start of a block and the point where a variable declared with let or const is initialized. During TDZ, the variable exists in scope but can’t be accessed as it throws a ReferenceError.
```javascript
console.log(counter1);  //undefined
console.log(counter2);  //Throws referenceError

var counter1 = 1;
let counter2 = 2;
```

49. ### IIFE: immediately invoked function expression
IIFE: is a JavaScript func that runs as soon as it is defined. 
The primary reason for IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.
```javascript
(func () {
  var message = 'IIFE';
  console.log(message);
  })();
  console.log(message);   //Error: message is not defined
```

50. ### Closures
- It is the combination of a function bundled together with its lexical environment within which that function was declared. 
- They allow functions to retain access to variables from their containing (enclosing) scope even after the outer function has finished executing.
- For example, an inner function has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution.
```javascript
function Welcome(name){
  var greetingInfo = function(message){
    console.log(message+ ' '+ name);
  }
  return greetingInfo;
}

var myFunction = Welcome('John');
myFunction('Welcome');
myFunction('hello Mrs.')
```

** some common use cases of closures **
- Data Privacy: Closures can be used to create private variables and methods. By defining variables within a function's scope and returning inner functions that have access to those variables, you can create a form of encapsulation, limiting access to certain data or functionality.
- Function Factories: Closures are often used to create functions with pre-set parameters. This is useful when you need to create multiple functions with similar behavior but different configurations.
- Callback Functions: Closures are frequently used in asynchronous programming, such as handling event listeners or AJAX requests. The inner function captures variables from the outer scope and can access them when the callback is invoked.
- Memoization: Closures can be used for memoization, a technique to optimize performance by caching the results of expensive function calls. The inner function can remember the results of previous calls and return the cached result if the same input is provided again.
- iterators and Generators: Closures can be used to create iterators and generators, which are essential for working with collections of data in modern JavaScript.




51. ### script, scritp async, script defer
- script : block HTML parsing until script loads and executes
- script async : loads script asynchronously, executes as soon as the script is ready
- script defer :loads script asynchronously, executes only after HTML parsing is complete


52. ### Modules
Refer to small units of independent, reusable code. Most modules can import /export an obj literal, a function or a constructor.
Benefit:  maintainability, reusability, namespacing

53. ### double exclamation (!!)
The (!!) ensures the type is a boolean.
```javascript
let isIE8 = false;
isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
console.log(isIE8); // returns true or false
```
54. ### JavaScript is interpreted language
JavaScript is an interpreted language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.
JavaScript is a case sensitive language. 
JavaScript is a single threaded language.

55. ### JSON
JSON is a lightweight format used for data interchanging.
It has methods: stringify and parse
When sending data to a web server, the data has to be in a string format. 
When receiving data from a server, convert the data from string to obj. 
When exchanging data between a browser and a server, JSON is needed.
```javascript
var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"

var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}
```

56. ### PWAs
Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.


57. ### double exclamation
(!!) ensures the resulting is a boolean.

58. ### polyfill
A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it.
There are two main polyfill libraries available,
- Core.js:
- Polyfill.io

59. ### tree shaking
It means dead code elimination. Unused modules should not be included in the bundle during build process.
It improve the performance by imporve loading time.
It is implemented in Rollup and webpack bundlers.

60. ### minification
It means reducing file size. It reduce loading time and save bandwidth usage.

61. ### reflow vs repaint
- A repaint occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. 
- A reflow involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.


62. ###  Debouncing
Debouncing is a programming technique used to limit how often a function is executed. Specifically, it ensures that a function is only triggered after a certain amount of time has passed since it was last invoked. This prevents unnecessary or excessive function calls, which can help optimize performance and reduce unnecessary CPU usage or API requests.

For example, when a user types in a search box, you typically want to wait until they’ve finished typing before fetching suggestions. Without debouncing, an API call would be triggered on every keystroke, potentially causing performance issues. With debouncing, the function call is postponed until the user stops typing for a specified period (e.g., 300ms). If the user types again before this time elapses, the timer resets.

**Typical use cases for debouncing include:**

*   Search box suggestions (wait until typing pauses before fetching results)
*   Auto-saving text fields (save only after the user stops typing)
*   Preventing double-clicks on buttons
*   Handling window resize or scroll events efficiently

```javascript
function debounce(func, timeout = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}


function fetchResults() {
  console.log("Fetching input suggestions");
}
const processChange = debounce(fetchResults, 300);

// Attach to input element
<input type="text" onkeyup="processChange()" />

// Attach to button
<button onclick="processChange()">Click me</button>

// Attach to window event
window.addEventListener("scroll", processChange);
```


63. ### throttling
Throttling is a programming technique used to control the rate at which a function is executed. When an event is triggered continuously—such as during window resizing, scrolling, or mouse movement—throttling ensures that the associated event handler is not called more often than a specified interval. This helps improve performance by reducing the number of expensive function calls and preventing performance bottlenecks.

**Common use cases:**

  *   Window resize events
  *   Scroll events
  *   Mouse movement or drag events
  *   API rate limiting



64. ### primitives vs non-primitives
  JavaScript language has both primitives and non-primitives but there are few differences between them as below,

     | Primitives                 | Non-primitives       |
     | -------------------------- | -------------------- |
     | These types are predefined | Created by developer |
     | These are immutable        | Mutable              |
     | Compare by value           | Compare by reference |
     | Stored in Stack            | Stored in heap       |
     | Contain certain value      | Can contain NULL too |

65. ### side-effects
A side effect is the modification of the state through the invocation of a function or expression.Below are some side effects which make function impure,
* Making an HTTP request. Asynchronous functions such as fetch and promise are impure.
* DOM manipulations
* Mutating the input data
* Printing to a screen or console: For example, console.log() and alert()
* Fetching the current time
* Math.random() calls: Modifies the internal state of Math object

66. ### common design patterns
Some common design patterns used in JavaScript include the 
module pattern
singleton pattern
factory pattern: using functions to create and return objects 
observer pattern
pub/sub pattern

66. ### module pattern
Module pattern is a designed pattern used to wrap a set of variables and functions together in a single scope returned as an object. JavaScript doesn't have access specifiers similar to other languages(Java, Python, etc) to provide private scope. It uses IIFE (Immediately invoked function expression) to allow for private scopes. i.e., a closure that protect variables and methods.
an example of a module pattern:
```javascript
const createEmployee = (function () {
  // Private
  const name = "John";
  const department = "Sales";
  const getEmployeeName = () => name;
  const getDepartmentName = () => department;

  // Public
  return {
    name,
    department,
    getName: () => getEmployeeName(),
    getDepartment: () => getDepartmentName(),
  };
})();

console.log(createEmployee.name);
console.log(createEmployee.department);
console.log(createEmployee.getName());
console.log(createEmployee.getDepartment());
```

67. ### Function Composition
It is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result.

```javascript
//example
const double = (x) => x * 2;
const square = (x) => x * x;

var output1 = double(2);
var output2 = square(output1);
console.log(output2);

var output_final = square(double(2));
console.log(output_final);
```

68. ### phases of execution context
The execution context in JavaScript is a data structure that stores the information necessary for executing a piece of code. It includes the code itself, the values of the variables used in the code, and the scope chain. The scope chain is a list of objects that are used to resolve variable names.

The execution context has two phases:
- Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. This includes creating the variable object and the scope chain.
- Execution phase: In this phase, the JavaScript engine executes the code in the execution context. This includes evaluating expressions, assigning values to variables, and calling functions.
The execution context is created when a function is called. The function's code is then executed in the execution context. When the function returns, the execution context is destroyed.

69. ### memory leaks
Memory leaks can lead to poor performance, slow loading times and even crashes in web applications. Some of the common causes of memory leaks are listed below,
- The execessive usage of global variables or omitting the var keyword in local scope.
- Forgetting to clear the timers set up by setTimeout or setInterval.
- Closures retain references to variables from their parent scope, which leads to variables might not garbage collected even they are no longer used.


70. ### inline caching
Inline caching is an optimization technique. The V8 compiler stores a cache of the type of objects that were passed as a parameter in recent method calls. Upon next time when same function is called, compiler can directly search for the type in cache.

71. ### ways to execute external scripts
There are three different ways to execute external scripts,
- async
  The script is downloaded in parallel to parsing the page, and executed as soon as it is available even before parsing completes. The parsing of the page is going to be interuppted once the script is downloaded completely and then the script is executed. Thereafter, the parsing of the remaining page will continue.
    ```javascript <script src="demo.js" async></script>```
- defer
  The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.
    ```javascript <script src="demo.js" defer></script>```
- Neither async or defer
  The script is downloaded and executed immediately by blocking parsing of the page until the script execution is completed.