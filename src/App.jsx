import React, {useState, useCallback} from 'react'

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <h3>htmllessons (JS Version)</h3>
      <input 
        defaultValue='Max'
        placeholder='Enter name' 
      />
    </div>
  )
}

export default App;