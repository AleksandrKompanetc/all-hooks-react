import React, {useState} from 'react';

function App() {
  const [data, setData] = useState('');
  return (
    <div>
      <h3>htmllessons (JS Version)</h3>
      <input 
        value={data.name} 
        onChange={e => setData({...data, name: e.target.value})} 
        defaultValue='Max' 
        placeholder='Enter name' 
      />
      <div>
        <b>Value:</b>
        {data.name}
      </div>
    </div>
  )
}

export default App;