import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Card from "./components/Card/Card";
import ThemeContextProvider from "./context/theme";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="container-fluid p-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="toggle d-flex justify-content-end my-3">
                <ToggleButton />
              </div>
              <div className="card-holder">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
