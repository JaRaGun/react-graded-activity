import React from 'react'
import Animals from '../components/Animals'

function Exercise5() {
    const animals =['🐶dog', '😺cat', '🐔chicken', '🐮cow', '🐏sheep', '🐴horse']
  return (
    <div className='flex flex-col items-center'>
        {
            animals.map((anims) => <Animals name={anims}/>)
        }
    </div>
  )
}

export default Exercise5