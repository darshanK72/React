import { useState } from 'react'
import './App.css'
import Model from './Model/Model'

function App() {
  const [showModel,setShowModel] = useState(false);

  const openModel = () => {
    setShowModel(true);
  }

  const closeModel = () => {
    setShowModel(false)
  }

  return (
    <>
      <div className="home">
        <h1>This is Model Application</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fuga?</p>
        <button onClick={openModel}>Open Model</button>
      </div>
      <Model closeModel={closeModel} showModel={showModel} />
    </>
  )
}

export default App
