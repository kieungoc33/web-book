import { formatMessage } from "../../Admin";
import NavForm from "../navForm/NavForm";
import TableComponent from "../../components/table/TableComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { getAllAdmin } from "./api";

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
    },
];

export default function AdminPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postList, setPostList] = useState([
    ]);

    useEffect(() => {
        dispatch(startLoading());
        getAllAdmin().then((res) => {
            if (res) {
                setPostList(res.data);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, [])

    return (
        <div className="max-h-screen w-full px-[20px] pb-[20px] overflow-auto">
            <NavForm formName="admin" addButton={true} />
            <TableComponent
                tableContent={postList}
                columns={columns}
                tableTitle={"admin"}
            />
        </div>
    );
}
