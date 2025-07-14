import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='grid lg:grid-cols-2 text-white bg-black mt-5'>
                <div className='justify-self-center text-center mt-5'>
                    <h1>Aptitude</h1>
                    <h1>Logical</h1>
                    <h1>Verbal Ability</h1>
                    <h1>Ai Quiz</h1>
                    <h1>Formulas</h1>
                    <h1>Shortcuts</h1>
                    <h1>Interview Tips</h1>
                    <h1>Ai Interview</h1>

                </div>

                <div className='justify-self-center text-center mt-5'>
                    <a href="">More Info</a><br />
                    <a href="">Feedback</a><br />
                    <a href="">Developer Info</a><br />
                    <a href="">To be part of us</a><br />
                    <a href="">Bug Report</a>
                </div>

                <div className='justify-self-center mt-5'>
                    Chintan Dankhara @ 2025
                </div>
                <div className='justify-self-center mt-5'>
                    <p>All @right Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer