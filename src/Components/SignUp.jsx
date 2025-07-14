import React from 'react'
import { NavLink } from 'react-router-dom';
const SignUp = () => {
  return (
    <>
      <section className='container mt-5'>
        <div className='flex flex-col w-75 border rounded text-center m-auto pl-3 pr-3 pt-5 pb-5'>
          <h1 className='text-2xl font-bold'>Sign-Up</h1>

          <label htmlFor="FirstandLatName" className='flex'>
            <input type="text" placeholder='First Name' name="" id="" className='pl-3 w-32 border outline-0   h-10 mt-5 rounded mr-4' />
            <input type="text" name="" placeholder='Last Name' id="" className='pl-3 border outline-0 w-32 h-10 mt-5 rounded' />
          </label>

          <label htmlFor="">
            <input type="email" name="" placeholder='Email Address' id="" className='pl-3 border outline-0  w-full h-10 mt-5 rounded' />
          </label>

          <label htmlFor="">
            <input type="password" name="" placeholder='Password' id="" className='pl-3 border outline-0  w-full h-10 mt-5 rounded' />
          </label>

          <label htmlFor="">
            <input type="password" name="" placeholder='Re-Enter Password' id="" className='pl-3 border outline-0  w-full h-10 mt-5 rounded' />
          </label>

         <label htmlFor="" className='mt-5'>
            <NavLink to={''}>Already User ?</NavLink>
            <NavLink to={'/signin'} className='ml-29'>sign-In</NavLink>
          </label>

          <button type='submit' className='mt-6 bg-blue-800 rounded h-10 text-white text-xl cursor-pointer hover:bg-blue-900 shadow-md shadow-gray-500'>Sign-Up</button>
        </div>

      </section>
    </>
  )
}

export default SignUp