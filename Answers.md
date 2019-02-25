1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
A/ filter, map, and assign. And we use assign to create a new object and this is the syntax. `Object.assign()`
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A/ `actions` : it is to send data from app to the store . 
`reducers`: it maintains the changes of the state that happened in the actions . 
`store`: it is to hold the states of the app. it's an obj that gets built be running 'createStore' function.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
A/ App state is the state that it gets stored in redux store and gets passed by connecting the app and using mspt. Unlike components state, where the state gets passed around from a component to another by using props.
A good time to use app state if we have big applications and lots of components. it will be a lot easier to maintaine the state by storing them into redux stores.
1.  What is middleware?
it is a framework that intercepts every action before it goes to the reducer . It can also stop actions if a probelm occurs, dispatch a different action or more . 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A/ It's a a node package or so called a function that will flow data  asynchronously to make API calls from our action creators.
1.  Which `react-redux` method links up our `components` with our `redux store`?
A/ connect 
