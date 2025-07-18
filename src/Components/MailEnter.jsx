import { useRef } from "react";
import { NavLink } from "react-router-dom";

const MailEnter = () => {

    const emailRef = useRef();
    const alertref = useRef();

    const handlemail = async () => {

        const validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRef.current.value == "" || !validemail.test(emailRef.current.value)) {

            alertref.current.innerHTML = '<h2>Enter valid email</h2>';
        } else {
            alertref.current.innerHTML = "";
            const res = await fetch("https://adyakarmabackend.onrender.com/auth/isvalidmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": emailRef.current.value
                })
            });
            console.log(res);

            const data = await res.json();
            if (data) {
                console.log(data);
            }
        }

    }




    return (
        <>
            <section className="container text-center mt-2">

                <NavLink style={{ color: "blue" }} className={'mt-2'} to={'/signin'}>/ Sign-In</NavLink>

                <div className="flex flex-col w-75 mt-2  text-center rounded m-auto border pl-3 pr-3 pt-5 pb-5">
                    <h1 className='text-2xl font-bold'>Enter your mail</h1>
                    <p>Enter your mail, we'll send youc otp to reset you password</p>

                    <label htmlFor="" className='mt-5 text-center'>
                        <input type={'mail'} ref={emailRef} className='pl-3 outline-0 border mt-2 h-10 w-full rounded' placeholder='XYZ@gmail.com' />
                        <br />
                        <span className="flex justify-center mt-4 text-red-600" ref={alertref}></span>
                    </label>



                    <button style={{ color: "white" }}
                        onClick={handlemail}
                        className='cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 h-10 mt-4 rounded shadow  hover:from-blue-600 hover:to-blue-800 font-semibold text-lg transition-all duration-200 text-center'>Send OTP</button>
                </div>

            </section>
        </>
    )

}

export default MailEnter;