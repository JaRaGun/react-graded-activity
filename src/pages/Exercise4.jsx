import { React } from 'react'

function Exercise4() {
    const animals =['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  return (
    <div>
      <ul>
        {animals.map((hayop) => (
            <li>{hayop}</li>
        ))}
      </ul>
    </div>
  )
}

export default Exercise4