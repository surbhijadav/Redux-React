//step 5 : create action creators.
    //OLD WAY
// export const addTask = (task) => {
//     return {type:ADD_TASK,payload: task};
// };

// export const deleteTask = (id) => {
//     return {type : DELETE_TASK , payload : id};
// };

//create actions(NEW WAY)




// export const fetchTask = () => {
//     return async(dispatch) => {
//         try {
//             const res = await fetch(
//                 "https://jsonplaceholder.typicode.com/todos?_limit=3"
//             );
//             const task = await res.json();
//             dispatch({type : FETCH_TASK , payload : task.map((curElem) => curElem.title)})
//         } catch (error) {
//             console.log(error);
            
//         }
//     }
// }
