import { useState, useEffect, useTransition } from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


const Navbar = () => {

  const [isCalling, isSetCalling] = useTransition();
  const [isTokenValid, setTokenValid] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setOpen] = useState(false);

  const setSmallCanvas = () => {
    if (isOpen) {
      setOpen(false)
    }
    if (!isOpen) {
      setOpen(true)
    }
  }
  const removeSmallCanvas = () => {
    if (!isMobile) {
      setOpen(true)
    }
    setOpen(false)

  }
  window.addEventListener("resize", () => {
    setOpen(false);
  })

  useEffect(() => {
    const apiCallForJWTCheck = () => {
      try {
        isSetCalling(async () => {
          const getToken = document.cookie.split("=")[1];
          const res = await fetch("https://adyakarmabackend.onrender.com/auth/signin/tokencheck", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "token": getToken
            })
          });
          const data = await res.json();
          if (data.success) {
            setTokenValid(true);
          } else {
            setTokenValid(false)
          }
        })

      } catch (error) {
        console.log(error);
      }
    }
    apiCallForJWTCheck();
  }, [])

  // Sign out handler
  const handleSignOut = () => {
    // Clear the auth cookie (set expiry in the past)
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setTokenValid(false);
    setOpen(false); // Close mobile menu if open
  };


  return (
    <>
      {/* Main Navigation bar in container-fluid */}
      <div className='container-fluid sticky flex items-center top-0 h-13  shadow w-full bg-white'>

        {/* Items of the container inside the container-fluid */}
        <div className='container'>
          <div className='grid grid-cols-2'>
            {/* Logo of the AdyaKarma wit Navigation */}
            <div className='flex items-center gap-3'>
              <img src="/logo.jpg" alt="" className='w-10 h-10 rounded-4xl' />
              <h1 className='font-bold'>AdyaKarma</h1>
              <NavLink to='/' className='curp'>Home</NavLink>
              {!isMobile ? <>
                <NavLink to='/about'>About</NavLink>
              </> : <></>}
            </div>

            {/* Login and Sign-Up button */}
            <div className='justify-end flex items-center'>
              {!isMobile ?
                <>
                  {isTokenValid ? (
                    <button
                      onClick={handleSignOut}
                      className='rounded bg-blue-600 transition shadow shadow-gray-500 hover:bg-blue-700 pt-1 pb-1 pl-3 pr-3 mr-1 text-xl'
                      style={{ color: "white" }}
                    >
                      Sign Out
                    </button>
                  ) : (
                    <>
                      <NavLink to={'/signin'} className='rounded bg-blue-700  transition shadow shadow-gray-500 hover:bg-blue-800 pt-1 pb-1 pl-3 pr-3 mr-1 text-xl' style={{ color: "white" }}>Sign-In</NavLink>
                      <NavLink to={'signup'} className='rounded bg-blue-700 transition shadow shadow-gray-500 hover:bg-blue-800 pt-1 pb-1 pl-3 pr-3  text-xl' style={{ color: "white" }}>Sign-Up</NavLink>
                    </>
                  )}
                </> :
                <>
                  {/* Button For open small offcanvas */}
                  <button onClick={setSmallCanvas} className='menubar cursor-pointer'>
                    <div className='firstline'></div>
                    <div className='secondline'></div>
                  </button>
                </>
              }

            </div>
          </div>
        </div>

      </div>

      {isOpen && isMobile ?
        <>
          {/* Main Offcanvas */}
          <div className='ml-auto fixed top-0 p-2  scroll-auto h-full w-55 bg-gray-50 shadow '>

            <div className='flex flex-col'>

              {/* Button for closing small offcanvas*/}
              <div className='grid grid-cols-2'>
                <h1 className='top-1 relative ml-14 font-bold '>AdyaKarma</h1>
                <button onClick={removeSmallCanvas} className='closemenu cursor-pointer relative left-17 top-1'><div className='firstline'></div><div className='secondline'></div></button> <br />
              </div>

              <NavLink to='/about' onClick={removeSmallCanvas} className='m-auto mt-5' >About</NavLink>

              {isTokenValid ? (
                <button
                  onClick={handleSignOut}
                  className='rounded bg-blue-600 transition shadow shadow-gray-500 hover:bg-blue-700 pt-1 pb-1 w-full text-center text-xl m-auto mt-3'
                  style={{ color: "white" }}
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <NavLink onClick={removeSmallCanvas} to={'/signin'} className='rounded bg-blue-700  transition shadow shadow-gray-500 hover:bg-blue-800 pt-1 pb-1 w-full text-center  text-xl m-auto mt-3' style={{ color: "white" }}>Sign-In</NavLink>
                  <NavLink onClick={removeSmallCanvas} to={'/signup'} className='rounded bg-blue-700  transition shadow shadow-gray-500 hover:bg-blue-800 pt-1 pb-1 w-full text-center text-xl mt-2' style={{ color: "white" }}>Sign-Up</NavLink>
                </>
              )}

            </div>

          </div>
        </> :
        <></>
      }
    </>
  )
}

export default Navbar