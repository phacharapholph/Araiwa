import React, { useState } from 'react'

function App() {

    const name = ("Phacharaphol")
    const [age , setage] = useState (18)

  return (
    <div>
      <h1>Hello My name is {name}</h1>
      <h2>My age is {age}</h2>
      <button onClick={() => setage(age+1)}>add</button>
      <button onClick={() => setage(age-1)}>low</button>
      <button onClick={() => setage(18)}>reset</button>
    </div>
  )
}

export default App