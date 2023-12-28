import { formatMessage } from "../../Client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import backArrow from "../../images/icons/backArrow.svg";
import { signup } from "./api/signup";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { useDispatch } from "react-redux";

export default function Signin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function checkEmail() {
        if (submitted && email.length === 0) {
            return false;
        }
        return true;
    }

    function checkPassword() {
        if (submitted && password.length === 0) {
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

    function moveToLogin() {
        navigate("/login");
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleFirstName(event) {
        setFirstName(event.target.value);
    }

    function handleLastName(event) {
        setLastName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function sendLoginRequest() {
        dispatch(startLoading());
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }
        signup(data).then((res) => {
            if (res) {
                navigate("/login");
            }
        });
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
                        {formatMessage("signup.signup")}
                    </div>
                    <div className="pt-[24px] w-full">
                        <p className="mb-2">{formatMessage("signup.email")}</p>
                        <input
                            type="text"
                            className="py-3 px-2 w-full bg-[color:var(--login-input-color)] outline-none"
                            value={email}
                            onChange={handleEmail}
                        />
                        {checkEmail() ? null : (
                            <div className="text-[color:var(--login-input-incorrect)] text-[12px]">
                                {formatMessage("signup.emailError")}
                            </div>
                        )}
                    </div>
                    <div className="pt-[24px] w-full">
                        <p className="mb-2">
                            {formatMessage("signup.firstName")}
                        </p>
                        <input
                            type="firstName"
                            className="py-3 px-2 w-full bg-[color:var(--login-input-color)] outline-none"
                            value={firstName}
                            onChange={handleFirstName}
                        />
                    </div>
                    <div className="pt-[24px] w-full">
                        <p className="mb-2">
                            {formatMessage("signup.lastName")}
                        </p>
                        <input
                            type="lastName"
                            className="py-3 px-2 w-full bg-[color:var(--login-input-color)] outline-none"
                            value={lastName}
                            onChange={handleLastName}
                        />
                    </div>
                    <div className="pt-[24px] w-full">
                        <p className="mb-2">
                            {formatMessage("signup.password")}
                        </p>
                        <input
                            type="password"
                            className="py-3 px-2 w-full bg-[color:var(--login-input-color)] outline-none"
                            value={password}
                            onChange={handlePassword}
                        />
                        {checkPassword() ? null : (
                            <div className="text-[color:var(--login-input-incorrect)] text-[12px]">
                                {formatMessage("signup.passwordError")}
                            </div>
                        )}
                    </div>
                    <div className="pt-[24px] flex justify-between">
                        <div>
                            {formatMessage("signup.haveAccount")}{" "}
                            <span
                                className="text-[color:var(--hover-color)] cursor-pointer hover:opacity-60 hover:underline text-[color:var(--login-hover-color)] "
                                onClick={moveToLogin}
                            >
                                {formatMessage("signup.login")}
                            </span>
                        </div>
                    </div>
                    <div className="pt-[48px]">
                        <button
                            className="py-3 px-2 w-full font-bold bg-[color:var(--login-button-color)] text-[color:var(--login-button-text-color)] outline-none hover:bg-[color:var(--login-button-hover-color)] hover:text-[color:var(--login-button-text-hover-color)]"
                            onClick={sendLoginRequest}
                        >
                            {formatMessage("signup.signup")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
