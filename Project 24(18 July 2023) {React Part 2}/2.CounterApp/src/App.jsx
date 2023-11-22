import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
     setCount((count)=>count+1)
  }

  function handleDecrement() {
    count>0 &&setCount((count)=>count-1)
  }

  return (
    <>
      <div className='h-screen w-screen bg-pink-100 flex items-center justify-center'>
                <div className='bg-red-500 p-52 rounded-lg'>
                  <div className='flex flex-col items-center gap-20'>
                  <div className='text-6xl font-serif font-semibold text-white '>{count}</div>
                  <div className='flex gap-6'>
                    <Button children='Increment' onClick={handleIncrement}/>
                    <Button children='Decrement' onClick={handleDecrement}/>
                  </div>
                  </div>
                </div>
      </div>
    </>
  )
}

export default App
