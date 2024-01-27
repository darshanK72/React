import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  markCompleted,
  markIncomplete,
  updateTodo,
} from "../../store/todo/todo.slice";
import formatDate from "../../utils/dateFormat";
import "./Todo.css";

function Todo({ todo }) {
  const [editFlag, setEditFlag] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [date, setDate] = useState(todo.date);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted || '');

  const dispatch = useDispatch();

  useEffect(() => {
    if (isCompleted) {
      dispatch(markCompleted({ id: todo.id }));
    } else {
      dispatch(markIncomplete({ id: todo.id }));
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
            <form
              className="d-flex w-100 justify-content-between"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(updateTodo({ ...todo, title, date: Date(date) }));
                setEditFlag(false);
              }}
            >
              <div className="title">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="date">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="buttons">
                <button className="btn btn-success" type="submit">
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteTodo({ id: todo.id }));
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
                  dispatch(deleteTodo({ id: todo.id }));
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
