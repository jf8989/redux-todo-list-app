const { ADD_TODO, DELETE_TODO } = require("./actions");

const initialState = {
  todos: [],
};

let nextTodoId = 0;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId++,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

module.exports = rootReducer;
