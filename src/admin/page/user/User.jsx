import { formatMessage } from "../../Admin";
import NavForm from "../navForm/NavForm";
import TableComponent from "../../components/table/TableComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { getAllUsers } from "./api/getAllUsers";

function createData(id, firstName, lastName, email) {
    return { id, firstName, lastName, email };
}

const columns = [
    {
        id: "id",
        label: "id",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "firstName",
        label: "firstName",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    }, 
    {
        id: "lastName",
        label: "lastName",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    }, 
    {
        id: "email",
        label: "email",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    }, 
    {
        id: "actions", 
        label: "actions",
        minWidth: 170,
        align: "right", 
        format: (value) => value.toLocaleString("en-US"),
    }
]

export default function User() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userList, setUserList] = useState([
    ]);

    useEffect(() => {
        dispatch(startLoading());
        getAllUsers()
            .then((res) => {
                if (res) {
                    setUserList(res.data);
                }
            })
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, [])

    return (
        <div className="max-h-screen w-full px-[20px] pb-[20px] overflow-auto">
            <NavForm formName="user" addButton={false} />
            <TableComponent
                tableContent={userList}
                columns={columns}
                tableTitle={"user"}
            />
        </div>
    );
}