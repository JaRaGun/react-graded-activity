import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <ul className='flex'>
            <li><Link to='/'>Exercise 1</Link></li>
            <li><Link to='exercise2'>Exercise 2</Link></li>
            <li><Link to='exercise3'>Exercise 3</Link></li>
            <li><Link to='exercise4'>Exercise 4</Link></li>
            <li><Link to='exercise5'>Exercise 5</Link></li>
            <li><Link to='exercise6'>Exercise 6</Link></li>
        </ul>
    </div>
  )
}

export default Navbar