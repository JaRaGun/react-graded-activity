import React from 'react'

function Button({name}) {
    //function
const handleClick = () => {
    alert('You clicked ' + name)
    }

    //Button
  return (
    <>
        <button className='mx-1' onClick={handleClick}>{name}</button>
    </>
  )
}

export default Button