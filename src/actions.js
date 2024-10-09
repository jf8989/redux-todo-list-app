// Action Types
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creators
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

module.exports = {
  ADD_TODO,
  DELETE_TODO,
  addTodo,
  deleteTodo,
};
