import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../assets/AuthProvider';
import Navbar from './Navbar';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const getMessage = useRef();
  const [isTransition, setTransition] = useTransition();
  const toHome = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleReveal = () => {
    if (showPassword) {
      setShowPassword(false);
    }
    if (!showPassword) {
      setShowPassword(true);
    }
  }

  const handleSignIn = () => {
    try {
      setTransition(async () => {
        getMessage.current.innerHTML = "";
        const res = await fetch("https://adyakarmabackend.onrender.com/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "email": emailRef.current.value,
            "password": passwordRef.current.value
          })
        });
        const data = await res.json();
        if (data.success) {
          const token = data.data.token;
          const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `auth=${token}; expires=${expires} `;
        setTimeout(() => toHome('/'), 1500);
          setAuth({ isAuthenticated: true, loading: false });
        } else {
          getMessage.current.innerHTML = '<span style="color: red">' + data.error + " !" + '</span>';
        }
      })

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
<Navbar />
      <section className='container mt-5'>

        <div className='flex flex-col w-75  text-center rounded m-auto border pl-3 pr-3 pt-5 pb-5'>
          <h1 className='text-2xl font-bold'>Sign-In</h1>

          <label htmlFor="">
            <input ref={emailRef} type="text" placeholder='Email' className='pl-3 border outline-0  w-full h-10 mt-5 rounded' />
          </label>

          <label htmlFor="" className='mt-5'>
            <input ref={passwordRef} type={showPassword ? "text" : "password"} className='pl-3 outline-0 border mt-2 h-10 w-full rounded' placeholder='Password' />
            <div><FontAwesomeIcon className='relative left-29 bottom-8' onClick={handleReveal} icon={showPassword ? faEyeSlash : faEye} /></div>
          </label>

          <label htmlFor="">
            <NavLink to={''}>Forget Password ?</NavLink>
            <NavLink to={'/signup'} className='ml-21'>sign-Up</NavLink>
          </label>
          <span className='w-full h-2' ref={getMessage}></span>


          <button onClick={handleSignIn} type='submit' className='mt-6 bg-blue-800 rounded h-10 text-white text-xl cursor-pointer hover:bg-blue-900 shadow-md shadow-gray-500'>{isTransition ? <><div className='border-b-3 border-t-3 border-blue-600 animate-spin  rounded-full w-8 h-8 flex m-auto'></div></> : "Sign-In"}</button>
        </div>


      </section>
    </>
  )
}

export default SignIn