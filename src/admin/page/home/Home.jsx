import { formatMessage } from "../../Admin";
import EditProfile from "./EditProfile";
import { useState, useEffect } from "react";
import { changeLanguage } from "../../../client/slices/LanguageSlice";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { getAdmin } from "./api";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const lang = useSelector((state) => state.adminLanguage.language);

    function handleLanguageChange(event) {
        dispatch(changeLanguage(event.target.value));
    }

    useEffect(() => {
        dispatch(startLoading());
        getAdmin().then((res) => {
            if (res) {
                setId(res.id);
                setFirstName(res.firstName);
                setLastName(res.lastName);
                setEmail(res.email);
                setPassword(res.password);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, []);

    function logout() {
        dispatch(startLoading());
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    return (
        <div className="min-h-screen w-full px-[20px] pb-[20px] overflow-auto">
            <div className="flex justify-end py-[20px]">
                <div className="flex items-center mr-[40px]">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value={lang}
                            onChange={handleLanguageChange}
                            class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium uppercase">
                            {lang}
                        </span>
                    </label>
                </div>
                <div>
                    <div
                        className="flex items-center justify-center g-[color:var(--admin-stock-input-color)] px-[16px] py-[8px] border shadow-md hover:bg-[color:var(--admin-stock-input-color-hover)] rounded cursor-pointer"
                        onClick={logout}
                    >
                        {formatMessage("home.logout")}
                    </div>
                </div>
            </div>
            <EditProfile
                passwordState={true}
                idProp={id}
                firstNameProp={firstName}
                lastNameProp={lastName}
                emailProp={email}
                passwordProp={password}
            />
        </div>
    );
}
