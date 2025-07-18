import { NavLink } from "react-router-dom";
const EnterOtp = () => {
    return (
        <>
            <section className="container text-center mt-2">

                <NavLink style={{ color: "blue" }} className={'mt-2'} to={'/signin'}>/ Sign-In</NavLink>
                <NavLink></NavLink>

                <div className="flex flex-col w-75 mt-2  text-center rounded m-auto border pl-3 pr-3 pt-5 pb-5">

                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                </div>
            </section>
        </>
    )

}
export default EnterOtp;