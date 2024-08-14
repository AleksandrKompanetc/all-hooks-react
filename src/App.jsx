import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'

function App() {
  const [data, setData] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    console.log('Effect')
  }, [])

  useLayoutEffect(() => {
    console.log(inputRef.current.value)
  }, []) 

  return (
    <div>
      <h3>htmllessons (JS Version)</h3>
      <input 
        ref={inputRef}
        value='Max'
        placeholder='Enter name' 
      />
    </div>
  )
}

export default App;