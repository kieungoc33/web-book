import { useState } from "react";
import { formatMessage } from "../../Client";
import { useNavigate } from "react-router-dom";

export default function NavItem(props) {
    const { name, items } = props;
    const [openItem, setOpenItem] = useState(false);
    const navigate = useNavigate();

    function handleMouseEnter() {
        setOpenItem(true);
    }

    function handleMouseLeave() {
        setOpenItem(false);
    }

    function moveToTab() {
        const tabName = name.slice(7);
        if (tabName !== "home" && tabName !== "browse") navigate("/" + tabName);
        if (tabName === "home") navigate("/");
    }

    function moveToCategory(categoryName) {
        if (name !== "browse") {
            categoryName = categoryName.replace(".", "/");
            navigate("/" + categoryName);
        }
    }

    return (
        <div
            className="px-[30px] py-[15px] relative cursor-pointer"
            onMouseLeave={handleMouseLeave}
            onClick={moveToTab}
        >
            <div
                className="cursor-pointer hover:text-[color:var(--client-navbar-navitem-hover-text-color)]"
                onMouseEnter={handleMouseEnter}
            >
                {formatMessage(name)} {items.length > 0 ? "▾" : null}
            </div>
            {openItem && items.length > 0 ? (
                <div className="px-[30px] py-[20px] absolute top-full left-0 grid grid-cols-3 gap-[10px] w-[300%] text-base font-normal z-10 bg-[color:var(--client-navbar-navitem-bg-color)]">
                    {items.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="cursor-pointer hover:text-[color:var(--client-navbar-navitem-hover-text-color)]"
                                onClick={() => moveToCategory(item.name)}
                            >
                                <div>
                                    {formatMessage("navitem." + item.name)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
