import { formatMessage } from "../../Admin";
import NavForm from "../navForm/NavForm";
import TableComponent from "../../components/table/TableComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function createData(id, title, category, reviewer, postDate) {
    return { id, title, category, reviewer, postDate};
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

export default function Post() {
    const navigate = useNavigate();
    const [postList, setUserList] = useState([
        createData("1", "Post 1", "Category 1", "", "Reviewer 1", "2021-10-10"),
    ]);

    return (
        <div className="max-h-screen w-full px-[20px] pb-[20px] overflow-auto">
            <NavForm formName="post" addButton={true} />
            <TableComponent
                tableContent={postList}
                columns={columns}
                tableTitle={"post"}
            />
        </div>
    );
}
