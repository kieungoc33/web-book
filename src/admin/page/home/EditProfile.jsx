import { formatMessage } from "../../Admin";
import { useState, useEffect } from "react";
import { updateUser } from "./../admin/api";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { useNavigate } from "react-router-dom";

export default function EditProfile(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { passwordState, idProp, firstNameProp, lastNameProp, emailProp, passwordProp } = props;
    const [id, setId] = useState(idProp);
    const [firstName, setFirstName] = useState(firstNameProp);
    const [lastName, setLastName] = useState(lastNameProp);
    const [email, setEmail] = useState(emailProp);
    const [password, setPassword] = useState(passwordProp);

    useEffect(() => {
        setId(idProp);
        setFirstName(firstNameProp);
        setLastName(lastNameProp);
        setEmail(emailProp);
        setPassword(passwordProp);
    }, [props]);

    function cancelChange() {
        setId(idProp);
        setFirstName(firstNameProp);
        setLastName(lastNameProp);
        setEmail(emailProp);
        setPassword(passwordProp);
    }

    function saveChange() {
        dispatch(startLoading());
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };

        updateUser(id, data).then((res) => {
            if (res) {
                setId(id);
                setFirstName(firstName);
                setLastName(lastName);
                setEmail(email);
                setPassword(password);
                navigate(-1);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    return (
        <div className="">
            <div className="border shadow-md p-[60px] gap-[30px]">
                <div className="text-2xl font-bold pb-[20px]">
                    {formatMessage("home.editProfile")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="my-[20px]">
                        <label className="block text-sm font-bold mb-2">
                            {formatMessage("home.firstName")}
                        </label>
                        <input
                            className="w-full p-2 border outline-none rounded focus:border-[color:var(--admin-home-input-border-select-color)]"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="my-[20px]">
                        <label className="block text-sm font-bold mb-2">
                            {formatMessage("home.lastName")}
                        </label>
                        <input
                            className="w-full p-2 border outline-none rounded  focus:border-[color:var(--admin-home-input-border-select-color)]"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="my-[20px]">
                        <label className="block text-sm font-bold mb-2">
                            {formatMessage("home.email")}
                        </label>
                        <input
                            className="w-full p-2 border outline-none rounded focus:border-[color:var(--admin-home-input-border-select-color)]"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {!passwordState ? null : (
                        <div className="my-[20px]">
                            <label className="block text-sm font-bold mb-2">
                                {formatMessage("home.password")}
                            </label>
                            <input
                                className="w-full p-2 border outline-none rounded focus:border-[color:var(--admin-home-input-border-select-color)]"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    )}
                </div>
                <div className="flex justify-end mt-[40px]">
                    <button
                        className="bg-[color:var(--admin-home-button-color-1)] text-white px-4 py-2 rounded mr-[20px] hover:opacity-80 shadow-md"
                        onClick={saveChange}
                    >
                        {formatMessage("home.save")}
                    </button>
                    <button
                        className="bg-[color:var(--admin-home-button-color-2)] text-white px-4 py-2 rounded hover:opacity-80 shadow-md"
                        onClick={cancelChange}
                    >
                        {formatMessage("home.cancel")}
                    </button>
                </div>
            </div>
        </div>
    );
}
