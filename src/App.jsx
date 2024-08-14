import React, {useReducer} from 'react'
import { useName } from './useName';
import { initialState, reducer } from './reducer';
import { COMPLETE, UNCOMPLETE } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3>htmllessons (JS Version)</h3>
      {state.map(todo => (
        <button 
          key={todo.name} 
          style={{display: 'flex', alignItems: 'center'}}
          onClick={() => dispatch({type: COMPLETE, payload: todo.name})}
        >
          <div style={{backgroundColor: todo.isCompleted ? 'green' : 'gray', width: 15, height: 15, marginRight: 5}} />
          <div>{todo.name}</div>
        </button>
      ))}
      <input 
        placeholder='Enter name' 
      />
    </div>
  )
}

export default App;