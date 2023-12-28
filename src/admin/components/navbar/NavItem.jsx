import { useNavigate } from "react-router-dom";
import { formatMessage } from "../../Admin";
import { useState } from "react";
import dropdown from "../../resources/icons/dropdown.svg";
import dropdown_hover from "../../resources/icons/dropdown_hover.svg";
import moveup from "../../resources/icons/moveup.svg";
import moveup_hover from "../../resources/icons/moveup_hover.svg";

export default function NavItem(props) {
    const navigate = useNavigate();
    const { label, content, position } = props;
    const [openContent, setOpenContent] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const adminTab = localStorage.getItem("adminTab");

    function moveToLabel() {
        if (content && content.length > 0) {
            setOpenContent(!openContent);
            return;
        }
        if (label !== "home") {
            localStorage.setItem("adminTab", position)
            navigate("/admin/" + label);
        } else {
            localStorage.setItem("adminTab", position);
            navigate("/admin/");
        }
    }

    function moveToContentLabel(contentLabel, position) {
        localStorage.setItem("adminTab", position);
        navigate("/admin/" + label + "/" + contentLabel);
    }

    function displayContent() {
        if (!content) return;
        return content.map((item, index) => (
            <div
                className={`flex justify-center px-[30px] py-[20px] cursor-pointer text-md text-[color:var(--admin-navbar-text-color)] hover:bg-[color:var(--admin-navbar-bg-color-select)] hover:text-[color:var(--admin-navbar-text-color-select)] font-bold
                    ${
                        item.position == adminTab
                            ? " bg-[color:var(--admin-navbar-bg-color-select)] text-[color:var(--admin-navbar-text-color-select)]"
                            : "bg-[color:var(--admin-navbar-bg-color)]"
                    }
                `}
                key={index}
                onClick={() => moveToContentLabel(item.label, item.position)}
            >
                {formatMessage("post." + item.label)}
                {content && content.length > 0 && (
                    <i className="fas fa-chevron-right ml-[10px]"></i>
                )}
            </div>
        ));
    }

    return (
        <>
            <div
                className={`flex justify-between px-[30px] py-[20px] cursor-pointer text-lg text-[color:var(--admin-navbar-text-color)] hover:bg-[color:var(--admin-navbar-bg-color-select)] hover:text-[color:var(--admin-navbar-text-color-select)] font-bold
                
                    ${
                        position == adminTab
                            ? " bg-[color:var(--admin-navbar-bg-color-select)] text-[color:var(--admin-navbar-text-color-select)]"
                            : "bg-[color:var(--admin-navbar-bg-color)]"
                    }
                `}
                onClick={moveToLabel}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {formatMessage(label)}
                {content &&
                    content.length > 0 &&
                    (openContent ? (
                        <img src={isHovered ? moveup_hover : moveup} alt="" />
                    ) : (
                        <img
                            src={isHovered ? dropdown_hover : dropdown}
                            alt=""
                        />
                    ))}
            </div>
            <div
                className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
                    openContent ? "max-h-[500px]" : "max-h-0"
                }`}
            >
                {openContent && <>{displayContent()}</>}
            </div>
        </>
    );
}
