import { store } from "../../store";

//step 3 : Log the initial state
//The getState method is a synchronous function that returns the current state of a Redux application. It includes the entire state of the application,including all the reducers and their respective states.
console.log("initial state :", store.getState());

//step 4 : Dispatch an action to add a tas
    

    //new way
// store.dispatch(addTask("Buy Yummy Food"));
// store.dispatch(addTask("eat Yummy Food"));
// store.dispatch(addTask(""));
// console.log("updated state :", store.getState());

//Old way
// store.dispatch({type:ADD_TASK,payload: 1});
// console.log("Deleted state :", store.getState());

// store.dispatch(deleteTask(0));
// console.log("Deleted state :", store.getState());


console.log(store.dispatch(addTask("buy mango")));
console.log(store.getState());

console.log(store.dispatch(deleteTask(1)));
console.log(store.getState());



