import React from 'react'
import { useState } from 'react';

function Exercise6() {
    const [firstname, setfirstName] = useState("");
    const [lastname, setlastName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello ${firstname + " " + lastname}`);
      }

  return (
    <div className='w-full flex justify-center items-center'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                    First name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 type="text" 
                 placeholder="First name"
                 value={firstname}
                 onChange={(e) =>setfirstName(e.target.value)}/>
            </div>

            <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="lastName">
                    Last name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 type="text" 
                 placeholder="Last name"
                 value={lastname}
                 onChange={(e) =>setlastName(e.target.value)}/>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button onClick={handleSubmit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Greet me
                </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Exercise6