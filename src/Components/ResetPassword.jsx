import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useTransition } from "react";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from "react-router-dom"

export const ResetPassword = () => {
    const location = useLocation();
    const email = location.state?.email;
    const resetPassword = useRef(null);
    const errorMessage = useRef(null);
    const [isTransition, setTransition] = useTransition();
    const toSignin = useNavigate();
    const [isReveal, setReveal] = useState(false);

    const handleReveal = () => {
        if (isReveal) {
            setReveal(false);
        } if (!isReveal) {
            setReveal(true);
        }
    }

    const handleResetPassword = () => {

        const validPasswod = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if (ResetPassword.currentvalue == "" || !validPasswod.test(resetPassword.current.value)) {

            errorMessage.current.innerHTML = '<h2>Enter valid new password !</h2>';
        } else {
            errorMessage.current.innerHTML = "";
            setTransition(async () => {
                const res = await fetch("https://adyakarmabackend.onrender.com/auth/resetpassword", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "email": email,
                        "newPassword": resetPassword.current.value
                    })
                });
                const data = await res.json();
                console.log(data);
                if (data.success) {
                    toSignin('/signin');
                } else {
                    errorMessage.current.innerHTML = `<h2>${data.error} !</h2>`
                }
            })

        }
    }


    return (
        <>
            <section className="container text-center mt-2">

                <div className="flex flex-col w-75 mt-2  text-center rounded m-auto border pl-3 pr-3 pt-5 pb-5">

                    <h1 className='text-2xl font-bold'>Enter your new password</h1>

                    <label htmlFor="" className='flex justify-center mt-5 text-center'>
                        <input type={isReveal ? 'text' : 'password'} ref={resetPassword} className='pl-3 outline-0 border mt-2 h-10 w-full rounded' placeholder="Password" autoFocus />
                        <FontAwesomeIcon className="fixed ml-58 mt-5" onClick={handleReveal} icon={isReveal ? faEyeSlash : faEye} />

                    </label>

                    <span ref={errorMessage} className="text-red-600 fixed mt-35 ml-11"></span>

                    <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 h-10 mt-10 rounded shadow  hover:from-blue-600 hover:to-blue-800 font-semibold text-lg transition-all duration-200 text-center" onClick={handleResetPassword} style={{ color: "white" }}>{isTransition ? <><div className='animate-pulse h-10 bg-blue-300 rounded w-full'></div></> : "Reset password"}
                    </button>

                </div>
            </section>
        </>


    )
}