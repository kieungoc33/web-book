import { formatMessage } from "../../Admin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { login } from "./api/index";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
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
        navigate("/admin");
    }

    function moveToForgotPassword() {
        navigate("/admin/forgotPassword");
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function sendLoginRequest() {
        dispatch(startLoading());
        const data = {
            email: email,
            password: password,
        };
        login(data).then((res) => {
            if (res) {
                localStorage.setItem("adminToken", res.data.token);
                navigate("/admin");
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
                    <div className="font-bold text-2xl pb-[24px]">
                        {formatMessage("login.login")}
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
                    <div className="pt-[24px] w-full">
                        <p className="mb-2">
                            {formatMessage("login.password")}
                        </p>
                        <input
                            type="password"
                            className="py-3 px-2 w-full bg-[color:var(--login-input-color)] outline-none"
                            value={password}
                            onChange={handlePassword}
                        />
                        {checkPassword() ? null : (
                            <div className="text-[color:var(--login-input-incorrect)] text-[12px]">
                                {formatMessage("login.passwordError")}
                            </div>
                        )}
                    </div>
                    <div className="pt-[24px] flex ">
                        <div
                            className="text-[color:var(--login-hover-color)] cursor-pointer hover:opacity-60 hover:underline"
                            onClick={moveToForgotPassword}
                        >
                            {formatMessage("login.forgotPassword")}
                        </div>
                    </div>
                    <div className="pt-[48px]">
                        <button
                            className="py-3 px-2 w-full font-bold bg-[color:var(--login-button-color)] text-[color:var(--login-button-text-color)] outline-none hover:bg-[color:var(--login-button-hover-color)] hover:text-[color:var(--login-button-text-hover-color)]"
                            onClick={sendLoginRequest}
                        >
                            {formatMessage("login.login")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
