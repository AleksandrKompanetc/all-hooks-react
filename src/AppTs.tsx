import React, { FC, useState, useRef } from 'react';
import './App.css';

interface IData {
  name: string
  phone: string
  postcode: number
}

const AppTs: FC = () => {
  const [data, setData] = useState<IData>({} as IData)
  return <div style={{marginTop: 100}}>TypeScript Version</div>
}

export default AppTs;
