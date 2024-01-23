import { Outlet } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;
