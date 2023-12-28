import logo from "../../images/bookaholic-logo.png";
import { formatMessage } from "../../Client";
import { useSelector } from "react-redux";
import { useState } from "react";
import Search from "../search/Search";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const searchState = useSelector((state) => state.clientSearch.searchState);
    const [searchHeight, setSearchHeight] = useState(0);

    const handleSearchToggle = () => {
        setSearchHeight(searchState ? 200 : 0); 
    };

    function moveToHome() {
        navigate("/");
    }

    return (
        <div>
            <div className="relative bg-header-background bg-no-repeat bg-cover bg-center h-[400px] w-full flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-20 h-full"></div>
                <div className="z-10 flex justify-center items-center flex-col">
                    <div onClick={moveToHome}>
                        <div className="cursor-pointer">
                            <img src={logo} alt="logo" className="h-[150px]" />
                        </div>
                        <div
                            className="text-[2.25rem] text-[color:var(--header-title-color)] drop-shadow-lg  font-pacifico cursor-pointer hover:text-[color:var(--header-title-hover-color)]"
                            onClick={handleSearchToggle}
                        >
                            {formatMessage("header.name")}
                        </div>
                    </div>
                    <div className="text-xl text-[color:var(--client-header-description-color)] drop-shadow-lg  mt-[10px]">
                        {formatMessage("header.description")}
                    </div>
                </div>
                <div className="w-full absolute">
                    <Search isTrigger={searchState} />
                </div>
            </div>
        </div>
    );
}
