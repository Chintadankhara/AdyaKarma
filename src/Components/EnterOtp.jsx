import { use, useCallback, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const EnterOtp = () => {

    const location = useLocation();
    const otp = location.state?.otp;
    const email = location.state?.email;
    const errorMessage = useRef(null);
    const toResetPassword = useNavigate()
    const otp1 = useRef(null);
    const otp2 = useRef(null);
    const otp3 = useRef(null);
    const otp4 = useRef(null);



    const tab2 = () => {
        if (otp1.current.value.length === 1)
            otp2.current.focus();
    }
    const tab3 = () => {
        if (otp2.current.value.length === 1)
            otp3.current.focus();
    }
    const tab4 = () => {
        if (otp3.current.value.length === 1)
            otp4.current.focus();
    }

    const handleotp = () => {
        const userOTP = Number(`${otp1.current.value}${otp2.current.value}${otp3.current.value}${otp4.current.value}`);

        if (userOTP === otp) {
            errorMessage.current.innerHTML = "";
            toResetPassword("/resetpassword", { state: { email: email } })

        }
        else {
            errorMessage.current.innerHTML = `<h1>Enter valid OTP !</h1>`
        }

    }


    return (
        <>
            <section className="container text-center mt-2">


                <div className="flex flex-col w-75 mt-2  text-center rounded m-auto border pl-3 pr-3 pt-5 pb-5">

                    <h1 className='text-2xl font-bold'>Enter your otp</h1>
                    <p className="mt-2">we have sent you a four digit otp to your {`${email}`} email address</p>

                    <label htmlFor="" className='flex justify-center mt-5 text-center'>
                        <input type={'number'} ref={otp1} maxLength={1} className='pl-5 outline-0 border mt-2 h-11 w-14  mr-4 rounded' onInput={tab2} placeholder="X" autoFocus />

                        <input type={'number'} ref={otp2} maxLength={1} className='pl-5 outline-0 border mt-2 h-11 w-14 mr-4 rounded' onInput={tab3} placeholder="X" />

                        <input type={'number'} ref={otp3} maxLength={1} className='pl-5 outline-0 border mt-2 h-11 w-14 mr-4 rounded' onInput={tab4} placeholder="X" />

                        <input type={'number'} ref={otp4} maxLength={1} className='pl-5 outline-0 border mt-2 h-11 w-14 rounded' placeholder="X" />

                    </label>

                    <span className="fixed mt-48 ml-19 text-red-600" ref={errorMessage}></span>

                    <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 h-10 mt-10 rounded shadow  hover:from-blue-600 hover:to-blue-800 font-semibold text-lg transition-all duration-200 text-center" onClick={handleotp} style={{ color: "white" }}>Enter OTP</button>

                </div>
            </section>
        </>
    )

}
export default EnterOtp;