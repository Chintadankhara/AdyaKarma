import React, { useContext, useRef } from "react";
import Footer from "../Components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from '../assets/AppContext';

const Home = () => {

  const { isLogin } = useContext(AppContext);
  const toNavigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    if (!isLogin) {
      toNavigate("/signin")
    } else {
      toNavigate("quickstart");
    }
  }

  return (
    <>

      <section className='container mt-2'>
        <header className="text-center">
          <div className="grid grid-cols-1">

            <p className="lg:text-5xl  font-semibold md:text-4xl text-3xl mb-5" style={{fontFamily:"sans-serif"}}>
              "Start your interview journey with smart shortcuts, master aptitude with formulas, practice AI-generated questions..."
            </p>

            <NavLink onClick={handleStart} className="justify-self-center bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-lg shadow lg:w-100 hover:from-blue-600 hover:to-blue-800 font-semibold md:w-full w-full  text-lg transition-all duration-200 text-center" style={{ color: "white" }}>
              <span>Start Now</span>
            </NavLink>

          </div>

        </header>

        <section className="mt-5 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4"> 

          <div className="flex p-3 flex-col items-center bg-white/90 rounded-xl shadow-lg">
            <img src="./shortcuts.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">Formulas & Shortcuts</h1>
            <p className="font-extralight ">Quick-access math and logic shortcuts</p>
          </div>

          <div className="flex flex-col items-center p-3 bg-white/90 rounded-xl shadow-lg">
            <img src="./maths.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">Math Aptitude </h1>
            <p className="font-extralight ">Practice with smart hints and shortcuts</p>
          </div>


          <div className="flex flex-col items-center p-3 bg-white/90 rounded-xl shadow-lg">
            <img src="./logicals.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">Logical Reasoning</h1>
            <p className="font-extralight ">Dynamic questions personalized to you</p>
          </div>

          
          <div className="flex flex-col items-center p-3 bg-white/90 rounded-xl shadow-lg">
            <img src="./verbals.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">Verbal Reasoning</h1>
            <p className="font-extralight ">Sharp your brain with smarts hints and tricks</p>
          </div>

          <div className="flex flex-col items-center p-3 bg-white/90 rounded-xl shadow-lg">
            <img src="./questions.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">AI-Generated Questions</h1>
            <p className="font-extralight ">Dynamic questions personalized to you</p>
          </div>


        </section>

        <div className="grid mt-5 lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
          {/* Formulas */}
          <div className="bg-cyan-50 rounded-xl shadow-lg  text-cyan-950 cursor-pointer h-25 justify-self-center w-full flex text-2xl flex-col justify-center items-center">
            <p className="mr-1 font-extrabold">Formulas</p>
            <h1 className="font-bold">200 +</h1>
          </div>
          {/* Shortcuts */}
          <div className="bg-cyan-50 rounded-xl shadow-lg text-cyan-950 cursor-pointer w-full h-25  justify-self-center flex text-2xl flex-col justify-center items-center">
            <p className="mr-1 font-extrabold">Shortcuts</p>
            <h1 className="font-bold">100+</h1>
          </div>
          {/* Quiz */}
          <div className="bg-cyan-50 rounded-xl shadow-lg text-cyan-950 cursor-pointer  w-full h-25 justify-center flex flex-col text-2xl justify-self-center items-center">
            <p className="mr-1 font-extrabold">Quiz</p>
            <h1 className="font-bold">50+</h1>
          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Home