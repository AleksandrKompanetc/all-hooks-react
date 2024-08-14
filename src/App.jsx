import React, {useState, useCallback} from 'react'
import { useName } from './useName';

function App() {
  const [name, setName] = useName()

  return (
    <div>
      <h3>htmllessons (JS Version)</h3>
      <input 
        value={name}
        placeholder='Enter name' 
      />
    </div>
  )
}

export default App;