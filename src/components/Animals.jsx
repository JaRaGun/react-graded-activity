import React from 'react'

function Animals({name,emoji}) {
  return (
    <div className='p-4 border-amber-400 border-solid outline-2 border-2 w-32'>
        <h3>{name}</h3>
    </div>
  )
}

export default Animals