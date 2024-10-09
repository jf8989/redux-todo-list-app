const store = require("./store");
const { addTodo, deleteTodo } = require("./actions");

console.log("Initial state:", store.getState());

// Dispatch actions
store.dispatch(addTodo("Learn Redux"));
console.log("State after adding first todo:", store.getState());

store.dispatch(addTodo("Build a Redux app"));
console.log("State after adding second todo:", store.getState());

// Get the ID of the first todo
const firstTodoId = store.getState().todos[0].id;

// Delete the first todo
store.dispatch(deleteTodo(firstTodoId));
console.log("State after deleting first todo:", store.getState());
