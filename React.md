

### What is React 
- React is a front-end Javascript library which is useful in developing UI for single page applications. It is helpful in building complex and reusable UI components applications. 
- Support server-side rendering.
- Use virtual DOM rather than real DOM as RealDOM manipulations are expensive.
- follow one way data binding.
- JSX makes code more readable
- Component based: use reusable or composable UI components for developing the view.


### What is the advantage of React 
- Component-Based architecture: app are built on independent, reusable components and easy to integrate with other frameworks (Angular, Backbone)
- Use Virtual DOM to improve performance
- Using JSX, make code easy to read
- It renders both on client as well as server side
- Unidirectional data flow. 
- Declarative UI and easy testing by using jest


###  What are the limitations of React
- React is a view library, not a full framework.
- Learning curve for developers.
- Integrating into a traditional MVC framework requires additional configuration.
- Code complexity increases with inline templating and JSX.
- Too many smaller components.


### What are the major features of React
### Core features: 
- Reusable components: React apps are built on components. They are independent, reusable. 
- Virtual DOM:
- JSX: a syntax extension that can write HTML-like code in Javascript. It makes code more readable.
- Unidirectional Data Flow: It follows a one-way data binding model where data flows from parent to child components. It makes the code more predictable and easily to debug.
- Declarative UI. it allows you to describe what UI should look like for a given state, and it handles the DOM updates.
### Advanced features:
- React Hooks: use state and other React features in functional components.
- Context API: provides a way to share values between components without explicitly passing props through every level of component tree.	
- Error Boundaries: components that catch Javascript errors anywhere in their child component tree and display fallback UI instead of crashing.
- Server-Side Rendering: enables rendering React components on server before sending HTML to the client, improving performance and SEO.
- Concurrent Mode: new features that help React apps stay responsive and adjust to user’s device capabilities and network speed.
- React Server Components: new features that allow components to be rendered entirely on the server, reducing bundle size and improving performance.
- Suspense: supports code splitting and data fetching. It renders fallback before data return.


### Element and Component
### Element: 
- a React element is a plain JS object. It represents a DOM node or a component. It is the smallest building block in React.
- Elements are immutable. Once created, they can’t change their properties. 
- Elements can be nested within other elements through their props.
- Creating an element is fast. It doesn’t impact the real DOM directly
### Component:
- A component is a function or class that returns an element or a tree of elements to describe part of the UI. Components accept props and can manage their own states.
- Components can be split into independent reusable pieces.
- Can be defined by a function or a class.


###  Pure Component
- Is a class component that extends React.PureComponent. It automatically implements the shouldComponentUpdate method with a shallow comparison of props.
- Help to optimize performance by preventing unnecessary re-rendering. If props and state haven’t changed, it will skip re-rendering.

### State
Refers to a Javascript object that holds data and properties belonging to a component. It can change over time and trigger re-render of the component.

### Props
- Data (includes functions) passes to a child component from a parent component.
- Read-only: once  a component receives a set of props, it can’t directly modify them.
- Works for functional and class components
- Component reusability: props enable components to be highly reusable.


### State vs Props
in React, both state and props are plain JavaScript objects, but they serve different purpose and have distinct behaviors
### State
- Definition: state is a data structure that is managed within a component. It represents information that can change over the lifetime of component.
- Mutability: state is mutable, meaning it can be changed using the setter function.
- Scope: state is local to the component where it is defined. Only that component can modify its own state.
- Usage: used for data that needs to change in reponse to user actions, network responses or other dynamic events.
- Re-rendering: update the state triggers a re-render of the component and its descendants.
### props
- Definition: props are inputs to a component, provided by its parent component.
- Mutability: props are read-only. They are immutable.
- Scope: props are used to pass data and event handlers down the component tree, enable parent components to configure or communicate with their children.
- Usage: props are commonly used to make components reusable and configurable. They allow the same component to be rendered with different data or behavior.
- Analogy: props are as arguments to a function, where state is as variables declared inside the function.

### Spread props on DOM element
It may add unknown HTML attributes. Instead of using …rest operator, only add required props.


### Stateless components
Behavior of a component is independent of its state. Prefer to use a function component. Can use a class component as well unless need to use a lifecycle hook.


### Stateful components
Behavior of a component is dependent on the state. It can be function components with hooks or class components.

### Batch multiple state update
React groups multiple state updates within one event handler to prevent re-rendering. It is called batching. Below example update two state variables. However, React will automatically batch it and the component will re-render only once. 


### Synthetic events
Is a cross-browser wrapper around the browser’s native event. Such as onClick, onChange, onSubmit, onKeyDown, onFocus, onMouseEnter …



### Pointer events
A way to handle input event. Now, some devices don’t have a mouse, such as a phone with touch surface or pen. Those events include: onPointerDown, onPointMove, onPointUp, onPointEnter,...


### JSX
Stands for Javascript XML. It is an XML-like Javascript extension used in React.
- It allows you to write HTML inside JavaScript and place them in the DOM without using appendChild func. - It makes the code more readable and expressive.
- it is a syntactic sugar for React function.
- Need a transpiler to convert your JSX to regular Javascript that browsers can understand. The most widely used transpiler is Babel.  

### Rules of JSX
Return a single root element. Multiple elements need a single parent element.
- All the tags need to be closed
- Use camelCase naming

### Virtual DOM
It is an in-memory representation of the actual DOM, a lightweight copy of real DOM.
- When a state change occurs in a React component, React first updates the Virtual Dom.
- Then compares it with the previous Virtual DOM (using a process called diffing). 
- React only applies the differences to the real DOM. This entire process is called reconciliation. 
- The entire process– working with Virtual DOM, diffing, and selective updating— makes the UI rendering much faster and more efficient than manipulating the Real DOM directly.

### Reconciliation
Is the process through which React updates the Browser DOM and makes rendering faster.

### Real DOM
Represents the structure of an HTML document in the form of a tree.
- Each node is an element in the document.
- It is an interface that allows JS to manipulate and interact with the content, structure and style.
Direct updates are expensive  



### environment variable
- process.brower
- process.env

Disable javascript on chrome:
Inspection→ command+shift+p →type javascript →select disable Javascript


### React Router
It is a library built on top of React. It manages routing in the React app. It allows users to navigate between different views without full page reloads in SPA. it keeps the URL sync with page content.


###  React Router & history library
React Router is a wrapper around the history library. Router handles browser’s window.history and hash history. It also has memory history.

### <Router> components of v6
React Router v6 has 4 <Router> components. React Router v6 makes properties and methods of history instances associated with your router through the context in the router object.
- <BrowserRouter>: uses HTML5 history API for standard web apps.
- <HashRouter>: uses hash-based routing for static servers. 
- <MemoryRouter>: uses in-memory routing for testing and non-browser environment 
- <StaticRouter>: provides static routing for server-side rendering. 

### Implement default or NotFound page


### Redirect
Redirect will navigate to a new location. The new location will override the current location in history obj. 
 

### Common folder structures
- Grouping by features or routes
- Grouping by file type 

### BrowserRouter vs HashRouter
BrowserRouter: 
- Use HTML5 history API to render the component. The history can be modified via pushState or replaceState. On the client side, window.location.pathname is parsed by react router. 
- The setup may involve server-side rendering, index.html file. 
- Using a dynamic server and handle dynamic URLs  needs the BrowserRouter.

HashRouter
- Use hash in the URL to render the component. 
- The setup cannot be backed up by server-side rendering because it’s path that is served on server side. On the client side, window.location.hash is parsed by the react router.
- Using servers for static files needs a hashRouter. 



### React Internationalization
Is a library making app internationalization. React Intl is part of FormatJS which provides binding to React via its components and API. 

Main features of React Intl


### Shallow Renderer
Shallow rendering is useful in unit tests. It lets the component render one level deep and assert facts about what its render method returns without worrying about child components.


### web storage
Large amounts of data can be stored locally, without affecting website performance. The information is never transfered to the server. It includes localStorage and sessionStorage.


### localStorage vs sessionStorage
Useful when refresh the page and store the storage data.
localStorage: data will not expire. 
sessionStorage:  
- is cleared when the page session ends. 
- Open a new tab or window will create a new session with the value of the top-level browsing context.
- Open multiple tabs/windows with the same URL creates sessionStorage for each tab/window.
- Duplicate a tab copies the tab’s sessionStorage into the new tab.
- Close a tab/window ends the session and clears objects in sessionStorage. 
- It is key/value pairs in string format. 
  ```javascript
  sessionStorage.setItem(“key”, “value”);
  let data = sessionStorage.getItem(“key”);
  sessionStorage.removeItem(“key”);
  sessionStorage.clear();
  ```

### Post message
It is a method that enables cross-origin communication between window objects. Such as a page and a pop-up that it spawned, a page and an iframe embedded. Generally, scripts on different pages are allowed to access each other if and only if the pages follow the same-origin policy (the same protocol, port number, host).

### Cookie
It is a key/value pair that is stored on your computer browser.  Cookies are used to remember info about user profiles (such as username).
- When a user visits a web page, the user profile can be stored in a cookie
- Next time the user visits the page, the cookie remembers the user profile.
- Delete a  cookie, set the expiry data as a passed date.
```javascript
document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
```

### Cookie, localStorage sessionStorage
### Cookie
both server-side & client-side.
manually configured using Expires option
SSL supported
Maximum data size is 4kb
accessible from any window
sent with requests
### localStorage
client-side only
Forever until deleted
Maximum size 5 MB
accessible from any window
not sent with requests
### sessionStorage
client-side only
until tab is closed
Maximum size 5 MB
accessible from same tab
not sent with requests

### Methods on sessionStorage
```javascript
sessionStorage.setItem('key', 'value'); //save to sessionStorage
let data = sessionStorage.getItem('key'); // get data from sessionStorage
sessionStorage.removeItem('key');   //remove data from sessionStorage
sessionStorage.clear();              //remove all data from sessionStorage
```

### indexedDB
indexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. It enable high-performance searches of the data.

### Web worker
Enable web content to run scripts in background threads, separate from the main user interface thread.
It allows computation intensive tasks to be performed without blocking the main thread. 
- Background execution: parallel execution to separate threads
- Isolation from the DOM: it run in their own global context and don’t access the DOM.
- It can’t access Window obj, Document obj, Parent obj.
- Message passing communication: the main thread and a worker communicated by sending messages to each other using the postMessage() method and responding via onmessage event handler.

### Example
1 Create a webworker file: create a file as counter.js
```javascript
let i = 0;
function timedCount(){
  i = i+1;
  postMessage(i);
  setTimeout('timedCount', 500);
}

timedCount();
```
2 Create a webworker object: name the file as web_worker_example.js. Need to check browser support.
```javascript
if(typeof w == undefined) {
  w = new Worker('counter.js')
}
```
3 Then, we can receive messages from web worker.
```javascript
w.onmessage = function (event){
  document.getElementById('message').innerHTML = event.data;
}
```

4 Terminate a web worker. Web workers will continue to listen for messages until it is terminated.
```javascript
w.terminate();
```

5 Reuse the web worker. Set the worker variable to undefined, you can reuse the code.
```javascript
w = undefined;
```

### Promise
Is a JavaScript obj that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has 3 states:
  - Pending: initial state, neither fulfilled nor rejected.
  - Fulfilled: operation completed successfully
  - Rejected: operation failed.
- Handle asynchronous operations.
- Provide a cleaner alternative to callbacks.
- Avoid callback hell
- Make code more readable and maintainable.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm a Promise!");
  }, 5000);
});

promise
  .then((value) => console.log(value)) // Logs after 5 seconds: "I'm a Promise!"
  .catch((error) => console.error(error))  // Handles any rejection
  .finally(() => console.log("Done"));     // Runs regardless of success or failure
```
### main rules of promise
- a promise is an object that has .then() method
- a pending promise may transition into either fullfilled or rejected state.
- a fullfilled or rejected promise is settled and it must not transition into any other state.
- once a promise is settled, the value must not change.

### promise chain
The process of executing a sequence of asynchronous tasks one after another using promise. 
```javascript
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
```
### promise.all
Promise.all is a promise that takes an array of promises as input, and it gets resolved when all the promises get resolved or any one of them gets rejected.
```javascript
Promise.all([Promise1, Promise2, Promise3])
  .then(result) => {   console.log(result) }
  .catch(error => console.log(`Error in promises ${error}`))
```

### promise.race
Promise.race() method will return the promise instance which is firstly resolved or rejected.
```javascript
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});
```

### Callback
Is a function passed into another function as an argument. It is invoked inside the outer function to complete an action.
Callbacks are needed because javascript is an event driven language. Instead of waiting for a response, javascript will keep executing while listening for other events.
```javascript
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);
```

### callback hell
Callback hell are multiple nested callbacks which makes code hard to read and debug. 
```javascript
async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                ....
            });
        });
    });
});
```


### React lifecycle method
Methods that will be automatically called at different phases. It provides effective control and manipulation throughout the component lifecycle.
- Constructor: it is called when a component is initiated. Set up the initial state and values.
- getDerivedStateFromProps:  it is called before elements rendering in the DOM. It helps to set up the state object depending on the initial props. It has a state as an argument and it returns an object that made changes to the state.
- Render: it will output or re-render the HTML to the DOM with new changes. It is an essential method and will always be called.
- componentDidMount: it is called after the rendering of the component.
- shouldComponentUpdate: it will return a boolean which specifies whether React should proceed further with the rendering or not. Default value is true.
- getSnapshotBeforeUpdate: it can access the props and state before the update.
- componentDidUpdate: it is called after the component has been updated in the DOM.
- componentWillUnmount: it is called when component removal from the DOM.

### React Hooks
It is a Javascript function. It allows developers to use state and other React features in functional components without converting them into class components. Such as useState, useEffect, useContext …
Abstract stateful logic from components.
- It provides a simpler way for render props and HOC.
- It doesn’t cover all use cases of classes. There are no hook equivalents to the getSnapshotBeforeUpdate and componentDidCatch lifecycles. 
```javascript
import {useState} from 'react';

function Example(){
  const [count, setCount] = useState(0);

  return (
    <>
      <div> You click {count} times</div>
      <button onClick={() => setCount(count + 1)}> Click me </button>
    </>
  )
}
```

### Benefit of React Hooks
- Simplified state management
- Improve code readability & reusable logic: break code into smaller, reusable pieces of logic.
- Reduce need for lifecycle methods
- Enhance testing


### What rules need to be followed for hooks?
- Call hooks only at the top level of react functions. Never inside loops, conditions or nested functions. 
- Call hooks from react functions or custom hooks only.
Apply the above rules by modifying your ESLint.config file.


### Prevent unnecessary update when using setState
Return null to stop updating the state.
```javascript
getUserProfile = (user) => {
  const latestAddress = user.address;
  this.setState((state) => {
    if(state.address === latestAddress){
      return null;
    }else {
      return {title: latestAddress};
    }
  });
};
```

### Set state with a dynamic key name
```javascript
setState({[event.target.id]: event.target.value})
```


### React state
Local state: useState
Global state: use Context API or state management libraries Redux

### Ref
Ref use cases
- Managing focus, text selection, media playback
- Triggering imperative animations
- Integrating with third-party DOM libraries.

### How useState trigger re-render
When state updates from useState, React schedules the component to re-render. It updates the Virtual DOM. Virtual Dom compares it with the previous one and applies the necessary changes to the actual DOM. Then the UI reflects the new state changes. 

### useState vs useRef
- useState: causes components to re-render after state updates. Update is inside components.
- useRef: don’t cause components to re-render when state changes. It references DOM elements. 

### useReducer vs useState
Feature                 useState                    useReducer
State complexity        Simple, one variable        Complex, nested
Update                  Direct (setState)           Through actions (dispatch)
Update logic            In component                In reducer function
Reusability & testing   Less reusable               Highly reusable & testable



### useReducer
It is a React hook used to manage complex state logic inside functional components. It dispatch an action to a reducer function to update its state. It takes 3 arguments:
```javascript
const [state, dispatch] = useReducer(reducer, initialState, initFunction);
```
- reducer:   a function(state, action) => newState that handles how state should change based on the action.
- initialState: 
- dispatch: a function to trigger an update by passing an action.
When to use useReducer hook
- The state is complex, such as nested structures or multiple related values.
- State updates depends on previous state or logic
- Want to separate state update logic from UI
- Manage features like Forms, Wizards, undo/redo functionality, shopping cart logic …


### Combine useReducer with useContext
useReducer can combine with useContext to build a lightweight state management system.




### useEffect vs useLayoutEffect
useEffect: run asynchronously after React has rendered the component and after the browser has painted the screen. Not blocking the browser paints the UI. suitable for data fetching, setting up subscription or event listeners.
useLayoutEffect: run asynchronously before React has performed all DOM mutations but before the browser paints the screen. It is blocking if the effect takes a long time to execute. Suitable for measuring the size or position of DOM elements, modifying the DOM.


### useEffect hook
Is a React hook that lets you perform side effects in function components. Side effects includes fetching data, setting up subscriptions, and manipulating the DOM.

### useEffect hook dependency
useEffect hook accepts an optional dependencies argument that accepts an array of reactive values. The dependency array determines when the effect runs. React uses shallow comparison of the depencies. 
- effect runs once after initial render:   useEffect(() => {}, [])
- effect runs on first render and every time dependency value changes: 
useEffect(() => {}, [user, count])
- effect runs after every render:  useEffect(() => {})

### Multiple useEffect hook
Multiple useEffect hooks are recommended when you want to separate logic.
useEffect(() => {			useEffect(() => {
  //handle API fetch		    //handle event listeners
}, [])				}, [])

### Use cases of useLayoutEffect
When effect must run before the browser paints, such as
- Reading layout measurement (element size, scroll position)
- Synchronously applying DOM styles
- Animating layout or transitions
- Integrating with third-party libraries that required DOM manipulation
- It does not run on the server.
- Other logic than layout or visual DOM changes is not recommended, such as logging, data fetching, analytics


### How does useLayoutEffect cause layout thrashing?
When repeated read and write to the DOM that force the browser to recalculate layout multiple times per frame.

This issue needs to be prevented by batching DOM reads and writes.

### useMemo
Memorizes the result of an expensive calculation which prevents unnecessary computation. A function is re-executed only when its dependencies change. 

It improves performance. useMemo itself does not directly prevent re-rendering of child components. However, if the memorized value doesn’t change, React.memo will skip re-rendering the child. 

### useCallback
Memorizes a function itself, returning the same function instance between renders if dependencies have not changed. It prevents function recreation.
const handler = useCallback(() => {doSomething(a);}, [a]);

useMemo vs useCallback



### Switching component
Is a component that renders one of many components. Need to use an object to map props’ value to component. 


### useContext
Is a built-in React Hook that lets you access the value of a context inside a functional component. It avoids prop drilling, passing props through each level. 
- Create context       
const ThemeContext = createContext();
- Provide the context value

- Consume the context. Components that subscribe to context changes are called consumers.



### Custom hooks
They are js functions that reuse stateful logic across multiple components. They can use built-in hooks like useState, useEffect, etc., and encapsulate logic.

### useDeferredValue
Defer update to a value to smooth UI interactions. 

### useTransition
Manage state transition with low priority. 

### Context API
It provides a way to pass data through the component tree without passing props manually at every level. 
It is useful for global data like user authentication, theme preferences, or language settings.



### Use multiple Contexts 



### useRef to access a DOM element
useRef hook is commonly used to reference and interact with DOM elements. Like focusing an input, scrolling to a section…


### useRef to persist values across renders
useRef can persist a variable’s value. When changing its value, it wouldn't cause re-renders. 
Below is an example to access and change a variable’s value.


### useRef usecases
- Automatically focus an input when a component mounts
- Scroll to a specific element.
- Measure element dimension (offsetWidth, clientHeight)
- Control video/audio playback
- Integrate with non-React libraries

### forwardRef
Is a feature that lets components take a ref as a parameter, and pass it to a child.


### useImperativeHandle hook
useImperativeHandle is a hook that allows a child component to expose functions or properties to its parent component when using ref. It is typically used with forwardRef. It is useful for modals, dialogs, and custom inputs and reuse component libraries.


### Custom React Hook
Custom hooks are Javascript functions that allow to extract and reuse component logic by using React hooks like useState, useEffect.

### How does React Fiber work?
React Fiber is the core engine that enables advanced features like concurrent rendering, prioritization and interruptibility in React.
Fiber tree structure: each component in the app is represented by a Fiber node in a tree structure. A Fiber node contains:
- Component type
- Props and state
- Pointers to parent, child and sibling nodes
- Effect tags to trace changes
- This forms the Fiber tree, a data structure instead of traditional call stack.
Two phases of rendering
Render phase:
- React builds a work-in-progress Fiber tree
- it walks through each component, calculates what needs to change, and collects side effects.
- This phase is interruptible —-can be paused and resumed later.
- Commit phase:
- React applies changes to the Real DOM.
- Runs lifecycle method: useEffect
- This phase is non-interruptible but fast.
Work units and scheduling
- React breaks rendering into units of work.
- These units are scheduled based on priority using the React Scheduler
I- f time  runs out, React can pause and yield control back to the browser
Double buffering with two trees: React maintains two trees
- Current tree: what is visible on the screen
- Work-In-Progress Tree: the next version being built in memory
After the new tree is fully ready, React commits it, making it the new current tree.
Concurrency and prioritization
React can prepare multiple versions of UI at once.
Updates can be assigned priority, so urgent updates are handled faster than background work.

### Controlled vs Uncontrolled components
- Controlled components: rely on React state to manage the form element’s state.
It has full control of the form data. Easy to implement validation, test, debug.
- Uncontrolled components: rely on DOM and use refs for accessing values of form input.
No need to use the useState and onChange method. 



### Lifting state up
When several components need to share the same changing data, then lift the shared state up to their closest common ancestor.

### Concurrent Mode
Make the app more responsive and adjust to the user’s device capabilities and network speed. It allows React to handle long-running render along with other tasks. 
Concurrent mode was previously called async mode. 


### Server-side Rendering (SSR)
Render React components on the server and send the fully rendered HTML to the client. It improves SEO and speeds up the initial load.
It uses a ReactDOMServer object.

### React Hydration
It is used only for SSR to improve initial rendering time and make SEO friendly. It adds Javascript to pre-rendered static HTML generated by the server to make the app interactive. It acts as a bridge to reduce the gap between server side and client-side rendering.

### Static Generation
Is pre-rendering the HTML at build time. It results in faster load times and better performance. Usually used in Next.js. 
Generate HTML for each page at build time. It contains HTML, CSS and JavaScript files as static files. These static files can be served directly. 

### ReactDOMServer
ReactDOMServer object enables rendering components to static markup, typically used on node servers for SSR. includes funs: renderToString(), renderToStaticMarkup()



### Code splitting
Load the only necessary JavaScript for the page being viewed so as to reduce the initial loading time. 
Is a feature supported by bundlers like Webpack. Bundles can be dynamically loaded at runtime.
Can be achieved via routes.

It can be achieved with lazy and suspense. (React.lazy and Suspense are not available for server-side rendering.)
       


### React lazy
The React.lazy function allows dynamic importing a component as a regular component. It will automatically load the bundle of the component when it needs to be rendered.
  

### Loadable components
React.lazy and Suspense are available after React 18. Before it, loadable components are used for code-splitting in SSR. 



### Does Lazy function support named export?
No. currently React.lazy only supports default exports only. So, if a module is named exports, you need to create an intermediate module that reexports it as default. 

Then, reexports it.

Then import it using lazy.


### Suspense:
display a fallback until its children have finished loading data or code.
const OtherComponent = React.lazy(() => import(‘./OtherComponent’));
 	// or 
const OtherComponent = () => {
    const user = fetchUser();
    return <div>{user.name}</div>
}     

      <Suspense fallback={<Loading />}>
<OtherComponnent>
       </Suspense>
suspense Usage:
Displaying a fallback while content is loading
Revealing content together at once
Revealing nested content as it load
<Suspense fallback={<BigSpinner />}>
    <Biograph />
    <Suspense fallback={<AlumsGlimmer />}>
         <Panel> <Albums /></Panel>
     </Suspense>
</Suspense>
If Biggraphy hasn’t finished loading, BigSpinner will show. Otherwise, Biography will replace BigSpinner.
If Albums hasn’t finished loading, AlbumsGlimmer will show. Otherwise, Panel, Albums will replace Albumsglimmer.
Showing stale content while fresh content is loading
useDeferredValue hook
Preventing already revealed content from hiding
Indicating that a transition is happening
Resetting suspense boundaries on navigation
Providing a fallback for server errors and client-only content
Using startTransition to prevent UI from being replaced by a fallback during an update.




### How to add google analytics for React Router
Add a listener on history obj to record each page view.


### Accessibility of React
React follows the same accessibility rules as regular HTML. use the aria- attributes to improve accessibility and use tools like React Ally plugin to audit accessibility.

### Error boundaries
They are components that catch Javascript errors in their child component tree, log those errors and display a fallback UI.


### How to handle code reusability in React
Higher-Order Components
Custom Hooks
Render Props: 
share codes between components. Function is passed to another component as prop.




### Prop Drilling
Data is passed through multiple children components.
Should be avoided by using context API or a state management library.
	Const userContext = React.createContext();

### Keys in list
Identify items in a list that have changed, added or removed. It needs to be unique among its siblings and stable. It is an attribute used in items of a list or array. Index should be avoided to be key. Prefer id.

### Side effects
Actions/functions that modify variables outside of its local scope.
Includes data fetching, subscriptions, manipulating DOM
Handle them in useEffect hook

### Higher-Order Components (HOC)
Are functions that take a component as a parameter and return a new component with additional props, behavior, or data. Useful for reuse components. 

### 	withLoading(Dashboard);
Use cases:
Code reuse, logic and bootstrap abstraction
Render hijacking (e.g. conditional rendering or layout change)
State abstraction and manipulation
Props manipulation (e.g. injecting additional props or filter)

### Children prop
Children prop is a special prop to pass elements. It is commonly used in layout and wrapper components. Everything inside <MyDiv> is passed as children to div component. 




### React.memo
Is a higher-order component that prevents a functional component from re-rendering if its props haven’t changed.



### Render hijacking
The ability to control what a component will output from another component. By using HOC, inject additional props to a component or other logic changes. It makes the component behave differently.

### Wrapper component
Is a component that wraps another component / group of components. 
It can add additional functionality, styling, or layout to the wrapped components.


### Difference between functional and class components
Class components have lifecycle methods and this keyword. Can handle state changes. Uses render function to display contents.
Functional components are simpler, use hooks like useState and useEffect. Use return to display contents. Use props directly and has no this keyword.

### Prevent a function from being called multiple times
Throttling: changes based on a time based frequency. 
Debouncing: publish changes after a period of inactivity.

### Fragments
Can group multiple elements without adding extra nodes to the DOM. help to avoid adding wrapping elements like <div>. Can be used as <Fragment> or <>.
<Fragment> are better than container <div>
Fragments are a bit faster and use less memory by not creating an extra DOM node.
Some CSS mechanisms have special parent-child relationships. Add divs in the middle makes it hard to work the layout.
The DOM inspector is less cluttered.


### Prevent component from rendering
Prevent components from rendering by returning null based on specific conditions.


### Error and Error boundary
componentDidCatch lifecycle method signature
componentDidCatch lifecycle method is invoked after an error has been thrown. It has 2 parameters: error and info obj.        componentDidCatch(error, info);

### In which scenario do error boundaries not catch errors?
Inside event handlers
Asynchronous code using setTimeout callback
During server side rendering
Errors thrown in the error boundary code itself

### Behavior of uncaught errors in React 16?
Uncaught errors of the error boundary will result in unmounting of the whole component tree. It is worse to leave corrupted UI in place than to completely remove it.

### Place of error boundaries
Wrap the top-level route components to display a generic error message for the entire app.
Wrap individual components in it to protect them from crashing the rest of the app.

### Component stack trace
React16 displays the component stack trace with file names and line numbers. 




### portals
It provides a way to render children into a DOM node outside the parent component hierarchy. 
Useful for modals, tooltips, dropdowns, hovercards, notifications. they need to be rendered into a separate DOM node (outside of parent).
ReactDOM.createPortal(child, container); 
Child: any react node (e.g. JSX, string, fragment)
Container: A real DOM node (eg, document.getElementById(‘modal-root’))







### How to optimize the performance of a React app?
Code splitting: use suspense
Memorization: use memo, useMemo, useCallback
Avoid unnecessary re-renders: proper use of key and preventing state mutation
Lazy loading: load components and data only when needed



### Service Worker:
Service workers act as proxy servers that sit between web applications, the browser and network. It enables app to have offline experience, intercept network requests, and take appropriate action based on network availability.
- It caches your assets and other files so users can view pages when offline or on a slow network,  periodic background syncs, and manage cache of a response.
- It has no DOM access. Run on a different thread to the main Javascript app. They are non-blocking and designed to be fully asynchronous. 
- Only work for HTTPS. 


### IndexedDB
It is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of the data.

### Cache storage:
Used in serviceWorker. Items in a Cache don’t updated unless explicitly requested. They don’t expire unless deleted. Call cachestorage.open() to open a specific named cache obj. Then call cache methods to maintain the cache, such as cache.match(), cache.add(), cache.put(), cache.delete(), cache.keys(). 


### Header:
HTTP headers represent the metadata associated with an API request and response.
Request headers:  sent by the client, such as a web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly. 
- User-Agent: identifies the browser and operating system to the server.
- Accept: indicate the content types like text, video, or image formats that client can process.
- Authorization: used by the client to authenticate itself to the server. 
Response headers: sent back from the server to the client. They provide information about the server and data being sent in the response.
- Content-Type: indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data. etc.

### Cookie: 
Are small pieces of data that a server sends to a user’s web browser.  The browser may store the cookie and send it back to the same server with later requests. Cookies are mainly used for three purposes. 
- Session management like logins and shopping carts
- Personalization like user preferences and themes
- Tracking like recording and analyzing user behavior.

### Authentication: 
verifies someone is who they say they are. It requires the user to prove their identity. Usually use some form of authentication to secure access to an application. 

### Authorization: 
decide what routes and data the user can access, user’s service level of access.


### Strict Mode
<StrictMode> is a useful component for highlighting potential problems in an app. It does not render any DOM elements. 
It activates additional checks for its descendants in dev mode.
It checks:
- unsafe lifecycle methods
- legacy string ref API usage
- Legacy context API 
- unexpected side effect
- clean up logic



### Enable production mode in React
Need to set NODE_ENV to production. Production mode will strip out propType validation and warning and minify the code. It will greatly reduce the size of the bundle.
Run npm run build command
Or modify package.json file
    {
      "scripts": {
       "build": "cross-env NODE_ENV=production webpack --config webpack.config.js"
     }
   }
Or Modify webpack.config.js file DefinePlugin func. 




### Use https instead of http
Need to use HTTPS=true in package.json file

or run     set HTTPS=true && npm start

### How to use relative path imports
Create a .env file in the project root and write
NODE_PATH=src/app



### token


window.history.pushState
window.history.replaceState
window.location.assign() : load a new document
window.location.reload(): reload the current document
window.location.replace(): replace the current document
assign vs replace
Replace: remove the url from the document history. So it can not navigate “back” to the original document.
Assign: be able to navigate back to original document.   





Streaming server rendering
Streaming server rendering AIPs
Selective hydration




### useImperativeHandle
Exposing a custom ref handle to the parent component. 
For example, parent component MyInput to have access to the Input Dom node, you need to opt in forwardRef fn.
Import {forwardRef} from ‘react’
Const MyInput = forwardRef(function MyInput(props, ref) {
return <input {...props} ref={ref} />
})
A ref to MyInput will receive the input Dom node. You can expose a custom value instead. Call useImperativeHandle at the top level of your component.
Import {forwardRef, useImperativeHandle} from ‘react’
Const MyInput = forwardRef(function MyInput(props, ref) {
  useImperativeHandle(ref, () => {
     return {
     // your method
     };
   }, []);
return <input {...props} ref={ref} />
})

If you want to expose two of its methods. Keep the real browser DOM in a separate ref. Then use useImperativeHandle to expose a handle with the methods that you want the parent component to call.
	Import {forwardRef, useRef, useImperativeHandle} from ‘react’
Const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
     return {
        focus() {
            inputRef.current.focus();
        },
        scrollIntoView() {
             inputRef.current.scrollIntoView();
        },
     };
   }, []);
return <input {...props} ref={ref} />
})


### React vs Vue.js
React has more flexibility in developing large apps. 
React is easier to test
React is suitable for mobile apps creation.
React has more information and solutions. 

### React vs Angular


React 19 features
1 React compiler: 
No need to manually use useMemo, useCallback, and memo. React will manage the re-render. 
2 Server components
next.js 13, all components are server components by default. To make a component run on the client side, you need to use the “use client” directive.
SEO:
Performance boost: Server components contribute to faster 
Server-Side Execution: Server components enable executing code on the server, making tasks like API call seamless and efficient.

3
4
5
6


React 18 features
1 Concurrent react
2 Automatic batching
  All state modifications made using event handlers are grouped together using React’s build-in batching function function
3 transitions
Is between urgent and non-urgent updates.
4 suspense on the server
5 createRoot, hydrateRoot, renderToPipeableStream, 
renderToReadableStream
6 useId, useTransition, useDeferredValue, useSyncExternalStore, useInsertionEffect
7 strict mode
8 deprecated: ReactDOM.render, renderToString

Client render vs server render
Client-render: load HTML and JavaScript from server and make app interactive
Load JS —> Fetch Data —> Render Components —>interactive

Server-render: render the HTML output on the server and send HTML from the server. This allow user view the UI while JS bundles are loading and before the app becomes interactive.
Fetch Data —> Render as HTML —> load JS —> Hydrate
Improve user experience by reducing time to interactive.

Suspense on server:
One slow component slow down the rendering of the entire page. 
Wrap a slow part of the app within the suspense component. Tell react to delay the loading of the slow component. This component will show a loading state.
One slow component doesn’t slow down the render of the entire app. 

Strict mode:
Simulate mounting, unmounting, and remounting the component with a previous state. 
Strict mode will ensure components are resilient to being mounted and unmounted multiple times. 

5 ways to avoid react component re-renderings

1. Memorization using useMemo and useCallback hooks
2. API call optimization with react query
3. Creating memorized selectors with reselect
4. Replace useState with useRef
5. Using react fragments












forwardRef: let your component expose a DOM node to parent component with a ref. It accepts a render function as a parameter. It returns a component. 












Install react new app

npm uninstall -g create-react-app
npx clear-npx-cache
npm i create-react-app
npx create-react-app@latest my-app











//dev multiple projects under one repo
// can use Vercel Turborepo library
React build monorepo    
Webpack: bundle js application together.
webpack.config.js







React latest progress
* Server-side rendering. Server-side rendering is a major trend expected to become standard by 2023. ...
* Progressive Web Application (PWA) ...
* GraphQL. ...
* React Hooks. ...
* React Native. ...
* React Suspense. ...
* Parallel Mode.





Micro Frontends


SQL injection
cross-site scripting (XSS)










System design
Top 6 api architecture:
1 Soap: XML based, finance and payment gateway
2 RESTful: resource-based for web servers, but for real-time data or operate with a highly connected data modal, rest is not the best
3 GraphQL : a query language as well. It leads to more efficient network communication and faster responses. It flexibility and efficiency make it a strong choice for applications with complex data requirements.
4 gRPC: It is modern, high-performance, and use protocol buffers. It is a favorite for micyoservics architectures and companies like Netflix use pRPC to handle their immense inter-service communication. 
But browser has limitation support it. 
5 WebSocket: is about real-time, bidirectional and persistent connections. It is for live chat application and real-time gaming, where low-latency data exchange is crucial.
6 webHook:  it is about event-driven, HTTP callbacks and asynchronous operation. If app need synchronous communication or immediate response, web hook might not be the best choice. 

