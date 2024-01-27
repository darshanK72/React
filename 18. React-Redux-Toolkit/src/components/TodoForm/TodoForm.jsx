import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todo/todo.slice";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({id:todos.length + 1, title,date}))
    setTitle('');
    setDate('');
  };

  return (
    <>
      <form className="row todo-list" onSubmit={(e) => formSubmitHandler(e)}>
        <div className="col-5">
          <div className="mb-3">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="col-5">
          <div className="mb-3">
            <input
              type="date"
              className="form-control"
              placeholder=""
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="w-100">
            <button type="submit" className="btn btn-primary w-100 h-50">
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default TodoForm;
