import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

function App() {


  return (
    <>
      <div className="container-fluid p-sm-3 p-lg-5">
        <div className="heading d-flex justify-content-center mb-3">
          <h2>Todo Application</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6">
            <div className="todo-form">
              <TodoForm />
            </div>
            <div className="todo-list">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
