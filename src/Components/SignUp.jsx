import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const getMessage = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const toHome = useNavigate();

  const handleSignUp = async () => {
    getMessage.current.innerHTML = '';
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;

    if (!firstName || !lastName || !email || !password || !rePassword) {
      getMessage.current.innerHTML = '<span style="color: red">All fields are required!</span>';
      return;
    }
    if (password !== rePassword) {
      getMessage.current.innerHTML = '<span style="color: red">Passwords do not match!</span>';
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch('https://adyakarmabackend.onrender.com/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          password
        })
      });
      const data = await res.json();
      if (data.success) {
        getMessage.current.innerHTML = '<span style="color: green">Sign up successful! Please sign in.</span>';
        setTimeout(() => toHome('/signin'), 1500);
      } else {
        getMessage.current.innerHTML = '<span style="color: red">' + (data.error || 'Sign up failed!') + '</span>';
      }
    } catch (error) {
      getMessage.current.innerHTML = '<span style="color: red">Network error. Please try again.</span>';
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className='container mt-5'>
        <div className='flex flex-col w-75 border rounded text-center m-auto pl-3 pr-3 pt-5 pb-5'>
          <h1 className='text-2xl font-bold'>Sign-Up</h1>

          <label htmlFor="FirstandLatName" className='flex'>
            <input ref={firstNameRef} type="text" placeholder='First Name' className='pl-3 w-32 border outline-0 h-10 mt-5 rounded mr-4' />
            <input ref={lastNameRef} type="text" placeholder='Last Name' className='pl-3 border outline-0 w-32 h-10 mt-5 rounded' />
          </label>

          <label htmlFor="">
            <input ref={emailRef} type="email" placeholder='Email Address' className='pl-3 border outline-0 w-full h-10 mt-5 rounded' />
          </label>

          <label htmlFor="">
            <input ref={passwordRef} type="password" placeholder='Password' className='pl-3 border outline-0 w-full h-10 mt-5 rounded' />
          </label>

          <label htmlFor="">
            <input ref={rePasswordRef} type="password" placeholder='Re-Enter Password' className='pl-3 border outline-0 w-full h-10 mt-5 rounded' />
          </label>

          <label htmlFor="" className='mt-5'>
            <NavLink to={''}>Already User ?</NavLink>
            <NavLink to={'/signin'} className='ml-4'>sign-In</NavLink>
          </label>

          <span className='w-full h-2' ref={getMessage}></span>

          <button
            onClick={handleSignUp}
            type='button'
            className='mt-6 bg-blue-800 rounded h-10 text-white text-xl cursor-pointer hover:bg-blue-900 shadow-md shadow-gray-500 flex items-center justify-center'
            disabled={isLoading}
          >
            {isLoading ? (
              <div className='border-b-3 border-t-3 border-blue-600 animate-spin rounded-full w-8 h-8'></div>
            ) : (
              'Sign-Up'
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp;