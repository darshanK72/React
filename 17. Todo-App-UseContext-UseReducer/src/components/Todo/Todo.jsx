import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../../context/todo.context";
import formatDate from "../../utils/dateFormat";
import "./Todo.css";

function Todo({ todo }) {
  const [editFlag, setEditFlag] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [date, setDate] = useState(todo.date);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const { updateTodo, deleteTodo, markCompleted, markIncomplete } =
    useContext(TodoContext);

  useEffect(() => {
    if (isCompleted) {
      markCompleted(todo.id);
    } else {
      markIncomplete(todo.id);
    }
  }, [isCompleted]);

  return (
    <>
      <div
        className={`todo border p-3 rounded-2 mb-3 ${
          isCompleted ? "completed" : "incomplete"
        }`}
      >
        {editFlag ? (
          <>
            <form className="d-flex w-100 justify-content-between">
              <div className="date">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="title">
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="buttons">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    updateTodo({ ...todo, title, date: Date(date) });
                    setEditFlag(false);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="form-check d-flex justify-content-center align-content-center">
              <input
                type="checkbox"
                className="form-check-input"
                value={isCompleted}
                checked={isCompleted}
                onChange={() => setIsCompleted((prev) => !prev)}
              />
            </div>
            <div className="title">{todo.title}</div>
            <div className="date">{formatDate(todo.date)}</div>
            <div className="buttons">
              <button
                className="btn btn-success"
                onClick={() => setEditFlag(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Todo;
