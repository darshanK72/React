import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import UserContextProvider from './context/User/UserContextProvider'
import Profile from './components/Profile'
import Register from './components/Register'

function App() {

  return (
    <>
      <UserContextProvider>
        <div className="container-fluid w-100 h-100 p-5">
            <div className="row">
              <div className="col-6 p-3">
                  <Profile/>
              </div>
              <div className="col-6 p-3">
                  <Register/>
              </div>
            </div>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
