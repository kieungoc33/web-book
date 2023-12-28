import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { formatMessage } from "../../Admin";

export default function Navbar() {
    const navigate = useNavigate();
    const navInfo = [
        {
            position: 1,
            label: "home",
        },
        {
            position: 2,
            label: "user",
        },
        {
            position: 3,
            label: "post",
            content: [
                {
                    position: 4,
                    label: "awaitingPost", 
                }, 
                {
                    position: 5,
                    label: "approvedPost",
                },
                // {
                //     label: "rejectedPost",
                // },
            ]
        },
        {
            position: 6,
            label: "admin",
        },
    ];

    
    function displayInfo() {
        return navInfo.map((item, index) => {
            return (
                <NavItem
                    position={item.position}
                    label={item.label}
                    key={index}
                    content={item.content}
                />
            );
        });
    }

    function moveToHome() {
        navigate("/");
    }

    return (
        <div className="max-w-full h-screen break-words bg-[color:var(--admin-navbar-bg-color)] border-r shadow-md">
            <div
                className="py-[20px] flex justify-center items-center text-[2.25rem] text-[color:var(--header-title-color)] drop-shadow-lg font-pacifico cursor-pointer hover:text-[color:var(--header-title-hover-color)]"
                onClick={moveToHome}
            >
                {formatMessage("header.name")}
            </div>
            {displayInfo()}
        </div>
    );
}