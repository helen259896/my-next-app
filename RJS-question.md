### Hoisting
Moving variable and function declarations to the top of their scope during compilation phase.

### Lexical scoping
It determines how variable names are resolved based on their location.nested functions have access to variables from their parent scopes, enabling them to utilize and manipulate these variables.

### Scope
Scope is the accessibility of variables and functions in different parts of the code during runtime.
In other words, scope determines the visibility of variables in areas of your code.
There are 3 types of scope:
- Global scope: variables declared outside any function or block are accessible throughout the entire code.
- Function scope: variables declared within a  function are accessible only within that function.
- Block scope: declared with let or const within a block are accessible only within that block. 

### Spread Operator
(...) allows iterable elements to be expanded into individual elements. It is widely used for copying, merging and passing array elements as function arguments.

### == vs ===
== converts operands to a common type before comparison. May produce unexpected results.
=== compare both value and type. Ensure accurate comparison. 

### Event loop
Event loop allows JavaScript to handle asynchronous tasks on a single thread. It is a continuous process that executes the code. It ensures tasks are handled efficiently without blocking the main thread. 
- Call stack: is where synchronous JS code is executed. It tracks function calls in LIFO order. When a function is called, it is pushed onto the call stack. When it returns, it pops off.
- Web API: handle asynchronous tasks like timers and HTTP requests. They are handled in the background.
- Task Queue (callback queue /macrotasks): stores tasks like setTimeout and UI events. Once an asynchronous operation completes, its associated callback function is placed into the task queue. It follows a First-In, First-Out order.
- Microtask Queue: holds callbacks for promises (.then(), .catch(), .finally()) and queueMicrotask. Microtasks have higher priority than macrotasks and are processed before the event loop moves to the next macrotask.
- Event Loop: the event loop constantly monitors both the call stack and the task queues.
  - When the call stack is empty, it means all synchronous code has finished. The event loop checks the microtask queue.
  - It processes all available microtasks in the queue before moving to the task queue.
  - After the microtask queue is empty, the event loop then checks the task queue. It takes the first callback from the task queue and pushes it onto the call stack for execution.
  - This cycle repeats continuously, allowing JavaScript to handle asynchronous operations without blocking the main thread and keeping the app responsive.
  Execution order:  synchronous code —> microtasks —> macrotasks
Event loop ensures that while the main thread is busy with synchronous code, asynchronous tasks can be processed in the background and their callbacks executed when the main thread becomes available, maintaining a smooth and non-blocking user experience.




### Event driven Program
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

### Event propagation phases:
- Event Capturing
- Target
- Event bubbling


### Event capturing
An event starts at the root and propagates down to the target element.

### Event bubbling
It is a mechanism in the DOM where an event is first triggered on the target element and then propagates upward through the DOM tree to the root of the document.

### Event Delegation
Uses a single event listener on a parent element to manage events on its child elements. This approach takes advantage of event bubbling, improving efficiency.
Reduces memory usage .
Dynamically handles added or removed child elements.



### This keywork
The value of this depends on how the function is invoked.
- Default binding: refers to the global object, window in browsers
- Implicit binding: refers to the obj before dot
- Explicit binding: defined using call, apply, bind
- Arrow functions: lexically inherit this from surrounding scope.

### This in Event Handlers
This keyword refers to the object that is executing the current piece of code.
- Within event handlers, this typically refers to DOM element that triggered the event. 
- Its value can change depending on how the handler is defined and invoked.
- To ensure this references the intended context, techniques like using bind, arrow functions or explicitly setting the context are used. 





### Cookie, localStorage and sessionStorage
- Cookie: send with each HTTP request; limited to 4 KB per domain; can be set to expire
- localStorage: persistent storage, 5 MB limit.
- sessionStorage: Data cleared when tab or browser is closed; limit to 5 MB.


### null, undefined, undeclared variables
- Null: represent no value
- Undefined: declared but not assigned a value
- Undeclared: throw a referenceError 

### Call,  apply, bind
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

### mouseenter vs mouseover
mouseenter:
- Does not propagate through the DOM tree
- Fires solely when cursor enter the element and children elements
- Triggers only entering parent element regardless of its internal content
mouseover:
- Propagates upwards through the DOM hierarchy
- Activates when cursor enters the element or any of its descendant elements
- May lead to multiple event callbacks if there are nested child elements

### Differentiate between synchronous and asynchronous func
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
### asynchronous func:
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


### Arrow functions (lambda expression)
- Provide a concise syntax for writing function expression. 
- It doesn’t have this, arguments, super key words. It inherits these from their surrounding context.
- Suits for non-method functions, such as callbacks or simple computation.
- Can't be used as constructors and don't have prototype property.
- Can’t be used with new, yield. 

### First class function
- It means that functions are treated as a variable. You can assign a func to a variable. You can pass a func as an argument to another func. You can return a func from another func.
- It enables patterns such as callback, HOC, event handling. 

### Unary function
Is a function that accepts exactly one argument. 
```javascript
const myFunc = (a) ⇒ a+10
```

### Currying function
Is the process of transforming a function with multiple arguments into a sequence of nested functions, each accepting only one argument at a time.
```javascript
const curryUnaryFunc = (a) ⇒ (b) ⇒ © ⇒ a+b+c;
curryUnaryFunc(1)          //1
curryUnaryFunc(2)(3)      //5
curryUnaryFunc(4)(5)(6)  //15
```

### Let vs var
### let
block scope
hoisted but not initialized
not possible to re-declare the variable
### var
function scope
variable declaration will be hoisted, initialized as undefined
it is possible to re-declare the variable in the same scope 

### Temporal dead zone
It refers to the period between the start of a block and the point where a variable declared with let or const is initialized. During TDZ, the variable exists in scope but can’t be accessed as it throws a ReferenceError.
```javascript
console.log(counter1);  //undefined
console.log(counter2);  //Throws referenceError

var counter1 = 1;
let counter2 = 2;
```

### IIFE: immediately invoked function expression
IIFE: is a JavaScript func that runs as soon as it is defined. 
The primary reason for IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.
```javascript
(func () {
  var message = 'IIFE';
  console.log(message);
  })();
  console.log(message);   //Error: message is not defined
```

### Closures
- It is the combination of a function bundled together with its lexical environment within which that function was declared. 
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


### <script> <scritp async> <script defer>
script : block HTML parsing until script loads and executes
script async : loads script asynchronously, executes as soon as the script is ready
script defer :loads script asynchronously, executes only after HTML parsing is complete


### Modules
Refer to small units of independent, reusable code. Most modules can import /export an obj literal, a function or a constructor.
Benefit:  maintainability, reusability, namespacing