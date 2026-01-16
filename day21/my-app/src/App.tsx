import { useState } from 'react'

import './App.css'
import Counterapp from './day22Counter'
import MyComponent from './day23Fetchdata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counterapp></Counterapp>
    </>
  )
}

export default App
