import { formatMessage } from "../../Client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import backArrow from "../../images/icons/backArrow.svg";
import { sendForgotPassword } from "./api/index";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { useDispatch } from "react-redux";

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function checkEmail() {
        if (submitted && email.length === 0) {
            return false;
        }
        return true;
    }

    function moveToHome() {
        navigate("/");
    }

    function moveBack() {
        navigate(-1);
    }

    function moveToSignUp() {
        navigate("/signup");
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function sendEmail() {
        dispatch(startLoading());
        const data = {
            email: email,
        }
        sendForgotPassword(data)
            .then((res) => {
                if (res !== undefined && res !== null) {
                    navigate("/login")
                } else {
                    setEmail("");
                    setSubmitted(true);
                }
            })
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    return (
        <div className="w-full min-h-screen flex justify-center bg-login-wrapper relative">
            <div
                className="absolute top-[20px] left-[20px] text-[2.25rem] text-[color:var(--header-title-color)] drop-shadow-lg font-pacifico cursor-pointer hover:text-[color:var(--header-title-hover-color)]"
                onClick={moveToHome}
            >
                {formatMessage("header.name")}
            </div>
            <div className="w-[40%] m-10 p-[40px] bg-[color:var(--login-bg-color)] shadow-xl">
                <div className="w-full">
                    <div className="pb-[24px]">
                        <img
                            src={backArrow}
                            className="w-[24px] h-[24px] cursor-pointer"
                            onClick={moveBack}
                        />
                    </div>
                    <div className="font-bold text-2xl pb-[24px]">
                        {formatMessage("forgotPassword.forgotPassword")}
                    </div>
                    <div className="pt-[24px] w-full">
                        <p className="mb-2">{formatMessage("login.email")}</p>
                        <input
                            type="text"
                            className="py-3 px-2 w-full bg-[color:var(--login-input-color)] outline-none"
                            value={email}
                            onChange={handleEmail}
                        />
                        {checkEmail() ? null : (
                            <div className="text-[color:var(--login-input-incorrect)] text-[12px]">
                                {formatMessage("login.emailError")}
                            </div>
                        )}
                    </div>
                    <div className="pt-[24px] flex justify-between">
                        <div>
                            {formatMessage("forgotPassword.noAccount")}{" "}
                            <span
                                className="text-[color:var(--hover-color)] cursor-pointer hover:opacity-60 hover:underline text-[color:var(--login-hover-color)] "
                                onClick={moveToSignUp}
                            >
                                {formatMessage("forgotPassword.signup")}
                            </span>
                        </div>
                    </div>
                    <div className="pt-[48px]">
                        <button
                            className="py-3 px-2 w-full font-bold bg-[color:var(--login-button-color)] text-[color:var(--login-button-text-color)] outline-none hover:bg-[color:var(--login-button-hover-color)] hover:text-[color:var(--login-button-text-hover-color)]"
                            onClick={sendEmail}
                        >
                            {formatMessage("forgotPassword.sendEmail")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
