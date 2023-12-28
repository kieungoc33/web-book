import EditProfile from "../home/EditProfile";
import backArrow from "../../resources/icons/backArrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { getUserById } from "./api";
import { useEffect, useState } from "react";

export default function UserDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function moveBack() {
        navigate(-1);
    }

    useEffect(() => {
        dispatch(startLoading());
        getUserById(id).then((res) => {
            if (res) {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, []);

    return (
        <div className="p-[60px] px-[100px]">
            <div className="pb-[24px]">
                <img
                    src={backArrow}
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={moveBack}
                />
            </div>
            <EditProfile
                passwordState={false}
                idProp={id}
                firstNameProp={firstName}
                lastNameProp={lastName}
                emailProp={email}
            />
        </div>
    );
}
