import React, { FC, useState, useContext } from 'react';
import './App.css';
import { useAuth } from './AuthContext';

interface IData {
  name: string
  phone: string
  postcode: number
}

const AppTs: FC = () => {
  const {isAuth} = useAuth()
  return <div style={{marginTop: 100}}>TypeScript Version{isAuth && 'Autorized'}</div>
}

export default AppTs;
