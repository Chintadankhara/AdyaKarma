import React from "react";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaComputer } from "react-icons/fa6";
import { RiWomenFill } from "react-icons/ri";
import { WiHot } from "react-icons/wi";
import { BiArrowFromLeft, BiMath } from "react-icons/bi";

const Home = () => {
 

  return (
    <>
      <section className='container mt-2 '>
        <header className="text-center">
          <div className="grid grid-cols-1">

            <p className="lg:text-5xl md:text-4xl text-3xl  font-bold mb-5">
              "Learn faster with smart shortcuts, master aptitude with formulas, practice AI-generated questions, and interviews"
            </p>

            <NavLink to={'/quickstart'} className="cursor-pointer bg-blue-800 hover:bg-blue-900 pt-2 pb-2 shadow-md shadow-gray-400 text-2xl pl-3 justify-self-center md:w-100 w-full pr-3 rounded" style={{ color: "white" }}>
              <span>Start Now</span>
            </NavLink>

          </div>

        </header>

        <section className="mt-5 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">

          <div className="flex p-3 flex-col items-center border border-white bg-blue-50 shadow-md shadow-gray-400 rounded">
            <img src="./formula.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">Formulas & Shortcuts</h1>
            <p className="font-extralight ">Quick-access math and logic shortcuts</p>
          </div>

          <div className="flex flex-col items-center border border-white p-3 bg-blue-50 shadow-md shadow-gray-400 rounded">
            <img src="./aptitude.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">Aptitude Practice</h1>
            <p className="font-extralight ">Practice MCQs with smart hints</p>
          </div>

          <div className="flex flex-col items-center border border-white p-3 bg-blue-50 shadow-md shadow-gray-400 rounded">
            <img src="./question.jpg" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">AI-Generated Questions</h1>
            <p className="font-extralight ">Dynamic questions personalized to you</p>
          </div>

          <div className="flex flex-col items-center border border-white p-3 bg-blue-50 shadow-md shadow-gray-400 rounded">
            <img src="./lady.png" className="rounded-full w-45 h-45" alt="formula" />
            <h1 className="font-bold mt-5">AI Interview Prepration</h1>
            <p className="font-extralight ">Simulated Interviews with AI feedback</p>
          </div>

        </section>

        <div className="grid mt-5  lg:grid-cols-3 gap-5 text-white md:grid-cols-2 grid-cols-1 ">
          {/* Formulas */}
          <div className="bg-white text-cyan-950 cursor-pointer shadow-md shadow-gray-400 rounded h-25 justify-self-center w-full flex text-2xl flex-col justify-center items-center">
            <p className="mr-1 font-extrabold">Formulas</p>
            <h1 className="font-bold">200 +</h1>
          </div>
          {/* Shortcuts */}
          <div className="bg-white text-cyan-950 cursor-pointer shadow-md shadow-gray-400 rounded w-full h-25  justify-self-center flex text-2xl flex-col justify-center items-center">
            <p className="mr-1 font-extrabold">Shortcuts</p>
            <h1 className="font-bold">100+</h1>
          </div>
          {/* Quiz */}
          <div className="bg-white text-cyan-950 cursor-pointer rounded w-full shadow-md shadow-gray-400 h-25 justify-center flex flex-col text-2xl justify-self-center items-center">
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