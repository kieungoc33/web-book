import { formatMessage } from "../../Admin";
import { useNavigate } from "react-router-dom";

export default function NavForm(props) {
    const navigate = useNavigate();
    const { formName, addButton } = props;

    function moveToAdd() {
        navigate("./add");
    }

    return (
        <div className="py-[40px]">
            <div className="text-2xl font-bold pb-[20px]">
                {formatMessage(formName)}
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex justify-between bg-[color:var(--admin-stock-input-color)] px-[16px] border shadow-md">
                        <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-[20px] color-inherit"
                        >
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="py-[6px] outline-none px-[12px] rounded"
                        />
                    </div>
                    <div className="flex items-center justify-center ml-[10px] bg-[color:var(--admin-stock-input-color)] px-[16px] border shadow-md hover:bg-[color:var(--admin-stock-input-color-hover)] rounded">
                        <button>{formatMessage("search")}</button>
                    </div>
                </div>
                {addButton ? (
                    <div
                        className="flex items-center justify-center ml-[10px] text-[color:var(--admin-stock-add-stock-text-color)] bg-[color:var(--admin-stock-add-stock-color)] px-[16px] border shadow-md hover:bg-[color:var(--admin-stock-add-stock-color-hover)] rounded cursor-pointer"
                        onClick={moveToAdd}
                    >
                        <button>{formatMessage(`${formName}.add`)}</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
