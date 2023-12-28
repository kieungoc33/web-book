import { formatMessage } from "../../Admin";
import NavForm from "../navForm/NavForm";
import TableComponent from "../../components/table/TableComponent";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { getAwaitingPost } from "./api";

function createData(id, title, category, reviewer, postDate) {
    return { id, title, category, reviewer, postDate };
}

const columns = [
    {
        id: "id",
        label: "id",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "title",
        label: "title",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "category",
        label: "category",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "reviewer",
        label: "reviewer",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "postDate",
        label: "postDate",
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

export default function AwaitingPost() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [awaitingList, setAwaitingList] = useState([]);

    useEffect(() => {
        dispatch(startLoading());
        getAwaitingPost().then((res) => {
            if (res) {
                setAwaitingList(res.data);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, []);

    const [postList, setPostList] = useState(
        awaitingList.map((approved) =>
            createData(
                approved.id,
                approved.title,
                approved.category,
                approved.reviewer,
                approved.postDate
            )
        )
    );

    return (
        <div className="max-h-screen w-full px-[20px] pb-[20px] overflow-auto">
            <NavForm formName="awaitingPost" addButton={false} />
            <TableComponent
                tableContent={postList}
                columns={columns}
                tableTitle={"awaitingPost"}
            />
        </div>
    );
}
