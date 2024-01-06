import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("indigo")

  return (
    <>
      <div className="box" style={{backgroundColor:color}}>
        <div className="button-box">
        <div className="buttons">
          <button class="btn" onClick={() => setColor("red")} style={{backgroundColor:'red'}}>
              Red 
          </button>
          <button class="btn" onClick={() => setColor("yellow")} style={{backgroundColor:'yellow'}}>
              Yellow
          </button>
          <button class="btn" onClick={() => setColor("pink")} style={{backgroundColor:'pink'}}>
              Pink
          </button>
          <button class="btn" onClick={() => setColor("green")} style={{backgroundColor:'green'}}>
              Green
          </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
