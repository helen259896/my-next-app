'use client'
import {useState} from 'react'
import { ClientCTwo } from './clientCTwo';
// import { ServeCOne } from './serveCOne';

export function ClientCOne({
  children
}:{
  children: React.ReactNode
}) {
    // console.log('NavLinks');
  // console.log('About this component');
  const [name, setName] = useState('batman');
  return (
    <div>
      <h1>ClientCOne</h1>
      {children}
      {/* <ServeCOne /> */}
    </div>
  )
}