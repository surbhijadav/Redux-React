import { createSlice } from "@reduxjs/toolkit";



//Define action types : stateDomain & the Event
// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";
// const FETCH_TASK = "task/fetch";


const initialState = {
    task : [],
};



//step-1 : Create a simple reducer function (OLD WAY)
// const taskReducer = (state = initialState,action) => {
//     switch (action.type) {
//         case ADD_TASK:
//         return {
//             ...state,
//             task : [...state.task,action.payload],
//         };

//         case DELETE_TASK:
//             const updatedTask = state.task.filter((curTasks,index) => {
//                 return index !== action.payload;
//             })
//             return {
//                 ...state,
//                 task : updatedTask,
//             };

//             case FETCH_TASK:
//             const indv = action.payload;
//             console.log("indv",indv);
            
//             return {
//                 ...state,
//                 task : [...state.task,...indv],
//             };

//         default:
//             return state;
//     }
// };


//RTK slice(NEW WAY)
export const taskReducer = createSlice({
    name : "task",
    initialState,
    reducers : {
        addTask(state,action) {
            state.task.push(action.payload);
            //OR
            //state.task = [...state.task,action.payload],
        },
        deleteTask(state,action) {
            state.task = state.task.filter(
                (curElem,index) => index !== action.payload
            );
        },
    }
    
});

export const {addTask,deleteTask} = taskReducer.actions;

