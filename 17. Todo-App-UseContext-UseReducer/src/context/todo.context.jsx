import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: (id) => {},
  updateTodo: () => {},
  markCompleted: (id) => {},
  markIncomplete: (id) => {}
});

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload.todo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id != action.payload.id);
    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id == action.payload.todo.id) {
          return action.payload.todo;
        }
        return todo;
      });
    case "MARK_COMPLETED":
      return state.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.isCompleted = true;
          return todo;
        }
        return todo;
      });
    case "MARK_INCOMPLETE":
      return state.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.isCompleted = false;
          return todo;
        }
        return todo;
      });
    default:
      return state;
  }
};
function TodoContextProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: { todo } });
  };

  const updateTodo = (todo) => {
    dispatch({ type: "UPDATE_TODO", payload: { todo } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };
  const markCompleted = (id) => {
    dispatch({ type: "MARK_COMPLETED", payload: { id } });
  };
  const markIncomplete = (id) => {
    dispatch({type:"MARK_INCOMPLETE",payload:{id}});
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, markCompleted,markIncomplete}}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
