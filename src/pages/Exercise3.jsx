import {React, useState } from 'react'
function Exercise3() {
    const [count,setCount] = useState(0);

    const clickCount = () =>
    {
        setCount(count + 1)
    }
  return (
    <div className='h-screen w-full flex flex-col justify-start items-center'>
        <h3>You clicked the button {count} times</h3>
        <button onClick={clickCount}>Click me</button>
    </div>
  )
}

export default Exercise3