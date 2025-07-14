import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Quickstart = () => {
    const [isOpen, setOpen] = useState(true);

    const hadnleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            {/* Sidebar */}
            {isOpen && (
                <aside className="w-64 fixed h-full overflow-y-auto bg-white shadow-lg shadow-blue-200 z-20 space-y-2 pb-30 border-r border-blue-100">
                    <div className="flex flex-col h-full">
                        <button onClick={handleClose} className="cursor-pointer ml-auto p-2 text-gray-500 hover:text-blue-600">
                            <span className="text-xl">×</span>
                        </button>
                        <div className="flex flex-col aptitudeitem px-4">
                            {/* Maths */}
                            <h1 className="mt-2 text-2xl font-bold text-blue-700">Maths</h1>
                            <NavLink to={'hcmlcm'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>HCM & LCM</NavLink>
                            <NavLink to={'averages'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Averages</NavLink>
                            <NavLink to={'ages'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Ages</NavLink>
                            <NavLink to={'boatStreams'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Boat & Streams</NavLink>
                            <NavLink to={'trains'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Trains</NavLink>
                            <NavLink to={'pipesCisterns'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Pipes & Cisterns</NavLink>
                            <NavLink to={'timeWork'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Time & Work</NavLink>
                            <NavLink to={'percentage'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Percentage</NavLink>
                            <NavLink to={'ratioProportion'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Ratio & Proportion</NavLink>
                            <NavLink to={'chainRule'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Chain-Rule</NavLink>
                            <NavLink to={'mixtureAlligation'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Mixture & Alligation</NavLink>
                            <NavLink to={'discount'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Discount</NavLink>
                            <NavLink to={'profitLoss'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Profit & Loss</NavLink>
                            <NavLink to={'simpleInterest'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Simple-Interest</NavLink>
                            <NavLink to={'compoundInterest'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Compound-Interest</NavLink>
                            <NavLink to={'probability'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Probability</NavLink>
                            <NavLink to={'permutationCombination'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Permutation & Combination</NavLink>
                            <NavLink to={'geometricProgression'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Geometric-Progression</NavLink>
                            <NavLink to={'arithmeticProgression'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Arithmetic-Progression</NavLink>
                            {/* Data Interpretation */}
                            <h1 className='mt-6 text-2xl font-bold text-blue-700'>Data Interpretation</h1>
                            <NavLink to={'barGrapg'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Bar-Graph</NavLink>
                            <NavLink to={'pieChart'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Pie-Chart</NavLink>
                            <NavLink to={'lineGraph'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Line-Graph</NavLink>
                            {/* Logical Reasoning */}
                            <h1 className='mt-6 text-2xl font-bold text-blue-700'>Logical-Resoning</h1>
                            <NavLink to={'direction'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Direction</NavLink>
                            <NavLink to={'bloodRelation'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Blood-Relations</NavLink>
                            <NavLink to={'seatingArangement'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Seating-Arrangement</NavLink>
                            <NavLink to={'clock'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Clock</NavLink>
                            <NavLink to={'statementConclusion'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Statement & Conclusion</NavLink>
                            <NavLink to={'statementArguments'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Statement & Arguments</NavLink>
                            <NavLink to={'statementAssumptions'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Statement & Assumptions</NavLink>
                            <NavLink to={'statementCourseofAction'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Statement & Course of Action</NavLink>
                            <NavLink to={'causeEffect'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Cause & Effect</NavLink>
                            <NavLink to={'codingDecoding'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Coding-Decoding</NavLink>
                            <NavLink to={'series'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Series</NavLink>
                            <NavLink to={'syllogism'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Syllogism</NavLink>
                            <NavLink to={'calendar'} className='mt-2 text-blue-600 hover:underline' onClick={handleClose}>Calendar</NavLink>
                        </div>
                    </div>
                </aside>
            )}
            {/* Main Content */}
            <div className={`flex-1 min-h-screen transition-all duration-300 ${isOpen ? 'ml-64' : ''}`}>
                <section className="container mx-auto px-4 py-8">
                    <button onClick={hadnleOpen} className="aptitudebar mt-2 cursor-pointer mb-4">
                        <div className="line"></div>
                        <div className="line mt-1"></div>
                    </button>
                    <div className="max-w-2xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 flex flex-col items-center mb-8">
                        <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">Sharpen Your Mind. Ace Every Formula And Shortcut.</h1>
                        <h2 className="text-lg text-blue-500 mb-4 text-center">Where Preparation Meets Perfection</h2>
                        <NavLink
                            to="/generate-questions"
                            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 font-semibold text-lg transition-all duration-200 text-center"
                        >
                            Generate Aptitude Questions
                        </NavLink>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Outlet />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Quickstart;