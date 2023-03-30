import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  function penambahan() {
    setCount(count + 1);
  console.log('ditambah 1')
  }
  function pengurangan() {
    setCount(count - 1);
    console.log('dikurang 1')
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>angka bertambah {count} kali</p>
      <button onClick={penambahan} > tambah</button>

      <button onClick={pengurangan}> kurang</button>
    </div>
  );
}
