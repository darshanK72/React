import { useState } from 'react'

function App() {
  const [color, setColor] = useState("indigo")

  return (
    <>
      <h1 className="bg-green-400">This is Heading</h1>
    </>
  )
}

export default App
