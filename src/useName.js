import React, {useState, useDebugValue} from 'react'

export const useName = () => {
  const [name] = useState('')

  useDebugValue(name ? 'Name Yes' : 'Without name')

  return name
}