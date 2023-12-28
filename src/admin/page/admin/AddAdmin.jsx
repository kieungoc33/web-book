import { useState, useEffect } from "react";
import { formatMessage } from "../../Admin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import backArrow from "../../resources/icons/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { addAdmin } from "./api";
// import { Image } from "@ckeditor/ckeditor5-image";

// ClassicEditor.create(document.querySelector("#editor"), {
//     plugins: [Image],
//     toolbar: ["imageUpload"],
// });

export default function AddAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function moveBack() {
        navigate(-1);
    }

    function handleSubmit() {
        dispatch(startLoading());
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };
        addAdmin(data).then((res) => {
            if (res) {
                navigate(-1);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    return (
        <div className="p-[60px] px-[100px]">
            <div className="pb-[24px]">
                <img
                    src={backArrow}
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={moveBack}
                />
            </div>
            <div className="pb-[60px] font-bold text-2xl ">
                {formatMessage("addAdmin.createAdmin")}
            </div>
            <div className="border py-[60px] px-[120px] bg-[color:var(--client-display-item-bg-color)] shadow-md">
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("addAdmin.firstName")}:
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border py-[5px] px-[20px] outline-none focus:border-[color:var(--client-addpost-border-color)] rounded"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                </div>
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("addAdmin.lastName")}:
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border py-[5px] px-[20px] outline-none focus:border-[color:var(--client-addpost-border-color)] rounded"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                </div>
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("addAdmin.email")}:
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border py-[5px] px-[20px] outline-none focus:border-[color:var(--client-addpost-border-color)] rounded"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                </div>
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("addAdmin.password")}:
                    </div>
                    <div>
                        <input
                            type="password"
                            className="w-full border py-[5px] px-[20px] outline-none focus:border-[color:var(--client-addpost-border-color)] rounded"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <div className="pt-[20px] flex justify-end">
                    <button
                        className="font-bold border py-[5px] px-[10px] rounded-lg text-[color:var(--client-post-reply-button-text-color)] bg-[color:var(--client-post-reply-button-color)] hover:bg-[color:var(--client-post-reply-button-hover-color)] hover:text-[color:var(--client-post-reply-button-text-hover-color)] cursor-pointer shadow-md border"
                        onClick={handleSubmit}
                    >
                        {formatMessage("addAdmin.submit")}
                    </button>
                </div>
            </div>
        </div>
    );
}
