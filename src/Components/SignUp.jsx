import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const getMessage = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const toHome = useNavigate();


  const handleReveal1 = ()=>{
        if(showPassword1){
          setShowPassword1(false);
        }else {
          setShowPassword1(true);
        }
  }

  const handleReveal2 = ()=>{
    if(showPassword2){
      setShowPassword2(false);
    }else {
      setShowPassword2(true);
    }
}

  const handleSignUp = async () => {

    getMessage.current.innerHTML = '';
    const firstName = firstNameRef.current.value.trim();

    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;

    const validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if ((firstName && lastName && email && password && rePassword) == "") {
      getMessage.current.innerHTML = "<span style='color:red'>Please fill required field !</span>"
      return;
    } else if (!validemail.test(email) || !validpass.test(password)) {
      getMessage.current.innerHTML = "<span style='color:red'>Please enter valid email or password !</span>"
      return;
    } else if (password != rePassword) {
      getMessage.current.innerHTML = "<span style='color:red'>Password can't match </span>"
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
            <input ref={passwordRef} type={showPassword1? "text":"password"} placeholder='Password' className='pl-3 border outline-0 w-full h-10 mt-5 rounded' />
            <div><FontAwesomeIcon className='relative left-29 bottom-8 cursor-pointer' onClick={handleReveal1} icon={showPassword1 ? faEyeSlash : faEye} /></div>
          </label>

          <label htmlFor="">
            <input ref={rePasswordRef} type={showPassword2? "text":"password"} placeholder='Re-Enter Password' className='pl-3 border outline-0 w-full h-10 rounded' />
            <div><FontAwesomeIcon className='relative left-29 bottom-8 cursor-pointer' onClick={handleReveal2} icon={showPassword2 ? faEyeSlash : faEye} /></div>
          </label>

          <label htmlFor="" className='mt-5'>
            <NavLink to={''}>Already User ?</NavLink>
            <NavLink to={'/signin'} className='ml-29'>sign-In</NavLink>
          </label>

          <span className='w-full h-2' ref={getMessage}></span>

          <button
            onClick={handleSignUp}
            type='button' style={{ color: "white" }}
            className='cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 h-10 mt-5 rounded shadow  hover:from-blue-600 hover:to-blue-800 font-semibold text-lg transition-all duration-200 text-center'
            disabled={isLoading}
          >
            {isLoading ? (
              <div className='animate-pulse h-10 bg-blue-300 rounded w-full'></div>
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