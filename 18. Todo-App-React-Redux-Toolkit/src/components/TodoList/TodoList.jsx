import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList() {
  const todos = useSelector(state => state.todos);
  return (
    <>
      {todos.length > 0 ? (
        <>
          <div className="todo-list border pt-3 px-3  rounded-0 shadow-sm">
            {todos.map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
          </div>
          <div className="to"></div>
        </>
      ) : (
        <>
          <h4 className="d-flex justify-content-center p-3">No Todos Found...</h4>
        </>
      )}
    </>
  );
}

export default TodoList;
