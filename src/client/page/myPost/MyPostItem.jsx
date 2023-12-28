import { useNavigate } from "react-router-dom";
import { deleteMyPost } from "./api";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { useDispatch } from "react-redux";

export default function MyPostItem(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, title, image, date, category } = props;

    function moveToPost() {
        navigate("/post/" + category + "/" + id);
    }

    function moveToEditPost() {
        navigate("/edit/" + category + "/" + id);
    }

    function deletePost() {
        dispatch(startLoading());
        deleteMyPost(id).then((res) => {
            if (res) {
                navigate("/myPost");
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    return (
        <div className="border px-[30px] py-[30px] bg-[color:var(--client-display-item-bg-color)] mb-[30px] grid grid-cols-6 gap-[50px] shadow-md">
            <div className="w-[120px] h-[120px] col-span-1 cursor-pointe border overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className=" transform scale-100 hover:scale-125 transition-transform duration-300 cursor-pointer hover:opacity-50"
                    onClick={moveToPost}
                />
            </div>
            <div className="col-span-4 flex flex-col justify-evenly">
                <div
                    className="font-bold text-2xl cursor-pointer hover:text-[color:var(--client-display-item-text-hover-color)] hover:drop-shadow-md"
                    onClick={moveToPost}
                >
                    {title}
                </div>
                <div>{date}</div>
            </div>
            <div className="col-span-1 flex justify-between items-center">
                <button className="rounded-2xl px-[20px] py-[10px]">
                    <svg
                        className="icon icon-tabler icon-tabler-search searchIcon stroke-[color:var(--client-navbar-text-color)] hover:opacity-80"
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={moveToEditPost}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                </button>
                <button className="rounded-2xl px-[20px] py-[10px]">
                    <svg
                        className="icon icon-tabler icon-tabler-search searchIcon stroke-[color:var(--client-navbar-text-color)] hover:opacity-80"
                        width="25px"
                        height="25px"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={deletePost}
                    >
                        <path
                            d="M11.8489 22.6922C11.5862 22.7201 11.3509 22.5283 11.3232 22.2638L10.4668 14.0733C10.4392 13.8089 10.6297 13.5719 10.8924 13.5441L11.368 13.4937C11.6307 13.4659 11.8661 13.6577 11.8937 13.9221L12.7501 22.1126C12.7778 22.3771 12.5873 22.614 12.3246 22.6418L11.8489 22.6922Z"
                            fill="#000000"
                        />
                        <path
                            d="M16.1533 22.6418C15.8906 22.614 15.7001 22.3771 15.7277 22.1126L16.5841 13.9221C16.6118 13.6577 16.8471 13.4659 17.1098 13.4937L17.5854 13.5441C17.8481 13.5719 18.0387 13.8089 18.011 14.0733L17.1546 22.2638C17.127 22.5283 16.8916 22.7201 16.6289 22.6922L16.1533 22.6418Z"
                            fill="#000000"
                        />
                        <path
                            clipRule="evenodd"
                            d="M11.9233 1C11.3494 1 10.8306 1.34435 10.6045 1.87545L9.54244 4.37037H4.91304C3.8565 4.37037 3 5.23264 3 6.2963V8.7037C3 9.68523 3.72934 10.4953 4.67218 10.6145L7.62934 26.2259C7.71876 26.676 8.11133 27 8.56729 27H20.3507C20.8242 27 21.2264 26.6513 21.2966 26.1799L23.4467 10.5956C24.3313 10.4262 25 9.64356 25 8.7037V6.2963C25 5.23264 24.1435 4.37037 23.087 4.37037H18.4561L17.394 1.87545C17.1679 1.34435 16.6492 1 16.0752 1H11.9233ZM16.3747 4.37037L16.0083 3.50956C15.8576 3.15549 15.5117 2.92593 15.1291 2.92593H12.8694C12.4868 2.92593 12.141 3.15549 11.9902 3.50956L11.6238 4.37037H16.3747ZM21.4694 11.0516C21.5028 10.8108 21.3154 10.5961 21.0723 10.5967L7.1143 10.6285C6.86411 10.6291 6.67585 10.8566 6.72212 11.1025L9.19806 24.259C9.28701 24.7317 9.69985 25.0741 10.1808 25.0741H18.6559C19.1552 25.0741 19.578 24.7058 19.6465 24.2113L21.4694 11.0516ZM22.1304 8.7037C22.6587 8.7037 23.087 8.27257 23.087 7.74074V7.25926C23.087 6.72743 22.6587 6.2963 22.1304 6.2963H5.86957C5.34129 6.2963 4.91304 6.72743 4.91304 7.25926V7.74074C4.91304 8.27257 5.34129 8.7037 5.86956 8.7037H22.1304Z"
                            fill="#000000"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
