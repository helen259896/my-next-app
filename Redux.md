### Redux
###  Flux
Flux is an application architecture to manage data flow in React app. It is an alternative to the traditional MVC (Model-View-Controller) pattern. It emphasizes a unidirectional data flow.
Flux four key components:
- Actions
  - Plain Javascript objects or func that describe what happened.
  - Example: {type: ‘ADD_TODO’, payload: ‘Buy milk’}
- Dispatcher
  - A central hub that receives actions and dispatches them to the appropriate stores.
  - There is only one dispatcher in a Flux app.
- Stores
  - Hold the application state and business logic.
  - Respond to actions from the dispatcher and update themselves accordingly.
  - They emit change events that views can listen to.
- Views (React components)
  - Subscribe to stores and re-render when data changes.
  - They can also trigger new actions.


### Redux
Is a state management library that helps manage the application state in a predictable manner. It follows a unidirection data flow model and stores the global state in a single source of truth.
   ```javascript
    const store = creatStore(reducer);
    function reducer(initialState, action) {
      switch (action.type) {
        case 'Increase' :
          return {...state, count: state.count+1};
        default:
          return state;
      }
    } 
   ```


### Principles of Redux
- Single source of truth
  The state of the whole app is stored in an object within one single store. The single state tree makes it easier to track changes over time.
  ```javascript  
  const store = createStore(reducer); 
  ```
- State is read-only
  The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor network callbacks will write directly to the state.
  ```javascript 
  const action = {type: ‘INCREASE’}; 
  store.dispatch(action); 
  ```
- Changes are made with pure functions(Reducers)
  Reducers are pure functions that take the previous state and an action as parameters and return the next state.
   ```javascript
    function counter(state = 0, action) {
      switch (action.type) {
        case 'INCREMENT' :
          return state + 1;
        case 'DECREMENT' :
          return state - 1;
        default:
          return state;
      }
    } 
   ```


### mapStateToProps() and mapDispatchToProps()
- mapStateToProps(): is a utility which helps your components get updated state.
- mapDispatchToProps(): is a utility which helps your components fire an action.     Dispatching an action may cause a change of state. 
 ```javascript
    const mapDispatchToProps = (dispatch) => ({
      action: () => dispatch(action()),
    });
    const mapDispatchToProps = (dispatch) => ({
      action: bindActionCreators(action, dispatch), 
    });
```

### How to access redux store
The best way to access your store is using connect() func. It is HOC. example:
```javascript
  import {connect} from 'react-redux';
  import {setVisibilityFilter} from './actions';
  import Link from '../components/Link'
    const mapStateToProps = (state, ownProps) => ({
      active: ownProps.filter === state.visibilityFilter,
    });
    const mapDispatchToProps = (dispatch, ownProps) => ({
      onClick: () => dispatch(setVisibilityFilter(ownPorps.filter)), 
    });
    const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

    export default FilterLink;
```

For the function components, use useSelector and useDispatch hook.
```javascript
import { useSelector, useDispatch } from 'react-redux';
const dispatch = useDispatch();
const yourStateValue = useSelector(state => state.yourReducerName);
dispatch({ type: 'YOUR_ACTION_TYPE', payload: someData });
 ```

### How to structure Redux top level directories
- components: unaware of Redux
- containers: components connected to Redux
- actions: used for all action creators, where file names correspond to part of the app.
- reducers: used for all reducers, where files name correspond to the state key.
- store: used for store initialization

### Redux-sage
- It is a library that handles side effects in the React/Redux app. Those side    effects include asynchronous things such as data fetching and impure things such as accessing browser cache.
-  npm install –save redux-saga
- saga is like a separate thread in your app, that is only responsible for side effects. The side effect can be started, paused, and cancelled from the main app. redux-saga is a redux middleware. It has access to the full Redux app state and can dispatch actions as well.

### Redux Thunk
It is a middleware of Redux. It allows you to write action creators that return a function instead of an action. The thunk can delay the dispatch of an action, or dispatch only if a certain condition is met. The inner function receives the store methods dispatch() and getState() as parameters.

### Differences between redux-saga and redux-thunk
- Both handle side effects. Both middleware can coexist. 
- Redux-thunk uses promises to handle side effects.
- Redux-saga uses Generators to handle side effects. It is more powerful. 

### Redux selectors
- Redux selectors are functions that take Redux state as an argument and return some data to pass to the component.
- const getUserData = (state) => state.user.data;
- Two main benefits: 
  - It can compute derived data. So Redux only stores the minimal possible state.
  - Selector is not recomputed unless one of its arguments changes. 

### How to add multiple middleware to Redux
Use applyMiddleware()
```javascript
import { createStore, applyMiddleware } from 'redux';
const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  logger
)(createStore);
 ```

### Initial state in Redux
```javascript
const rootReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
})
const initialState = {
  todos: [{id: 123, name: 'example', completed: false}],
};
const store = createStore(rootReducer, initialState);
 ```

### Redux actions
Actions are plain Javascript objects or payloads of information. They are the only source of information for the store. It has a type property.
```javascript

{
  type: ADD_TODO,
  text: 'ADD to do item', 
};
 ```
 

### Component vs container in React Redux
- Component: class or function component of react.
- Container: a component that is connected to a Redux store. Containers subscribe to Redux state updates dispatch actions. Usually, they don’t render DOM elements; they pass rendering to child components.

### Difference between Redux and Context API
- Redux:  more suitable for complex state management and provides a more structured way to handle actions and state changes.
- Context API: is simpler but might not scale well in large app.


### Handle asynchronous actions in Redux
Asynchronous actions are handled in middleware like Thunk or Saga.

### Redux integration
Redux can be integrated with React Native, Angular, Vue as well.
