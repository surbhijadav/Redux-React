// import {applyMiddleware,createStore} from "redux";
// import {thunk} from "redux-thunk";
// import {composeWithDevTools} from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/tasks/taskSlice";


//step 2 : Create the redux store using the reducer(old way)
// export const store = createStore(taskReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store);

    //new way using redux toolkit
export const store = configureStore({
    reducer : {
        taskReducer:taskReducer.reducer , //If the key and value are same than there is no need to write it twice.
    }
});

