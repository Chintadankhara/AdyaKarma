import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../assets/AppContext';
import ToastMessage from '../assets/ToastMessage';

const SignIn = () => {
  const { isLogin, setLogin } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const getMessage = useRef();
  const [isTransition, setTransition] = useTransition();
  const toHome = useNavigate();
  const [showToast, setShowToast] = useState(false);


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
      if (emailRef.current.value == "" || passwordRef.current.value == "") {
        getMessage.current.innerHTML = '<span style="color: red">' + 'All fields are required!!' + '</span>';
      } else {
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
            setLogin(true);
            const token = data.data.token;
            const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `auth=${token}; expires=${expires} `;
            setTimeout(() => toHome('/quickstart'), 1000);

          } else {
            getMessage.current.innerHTML = '<span style="color: red">' + data.error + " !" + '</span>';
            emailRef.current.value = "";
            passwordRef.current.value = "";
          }
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isLogin) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLogin])

  return (
    <>

      {showToast && <ToastMessage message="Sign in successfullly" type="success" />
      }

      <section className='container mt-5'>

        <div className='flex flex-col w-75  text-center rounded m-auto border pl-3 pr-3 pt-5 pb-5'>
          <h1 className='text-2xl font-bold'>Sign-In</h1>

          <label htmlFor="">
            <input ref={emailRef} type="mail" placeholder='Email' className='pl-3 border outline-0  w-full h-10 mt-5 rounded' />
          </label>

          <label htmlFor="" className='mt-5'>
            <input ref={passwordRef} type={showPassword ? "text" : "password"} className='pl-3 outline-0 border mt-2 h-10 w-full rounded' placeholder='Password' />
            <div><FontAwesomeIcon className='relative left-29 bottom-8 cursor-pointer' onClick={handleReveal} icon={showPassword ? faEyeSlash : faEye} /></div>
          </label>

          <label htmlFor="">
            <NavLink to={'/mailenter'} style={{color:"blue"}}>Forget Password ?</NavLink>
            <NavLink to={'/signup'} className='ml-21' style={{color:"blue"}}>sign-Up</NavLink>
          </label>
          <span className='w-full h-2' ref={getMessage}></span>


          <button onClick={handleSignIn} style={{ color: "white" }} type='submit' className='cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 h-10 mt-5 rounded shadow  hover:from-blue-600 hover:to-blue-800 font-semibold text-lg transition-all duration-200 text-center'>{isTransition ? <><div className='animate-pulse h-10 bg-blue-300 rounded w-full'></div></> : "Sign-In"}</button>
        </div>


      </section>
    </>
  )
}

export default SignIn