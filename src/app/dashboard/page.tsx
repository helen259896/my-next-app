"use client";
import {useState} from 'react';

export default function DashBoardPage() {
  const [name, setName] = useState('');
  console.log('About this component');
  return (
    <div>

      <div>This is DashBoard Page</div>
      <input value={name} onChange={e => setName(e.target.value)}></input>
      <p>hello, {name}</p>
    </div>
  )
}