import { formatMessage } from "../../Client"

export default function More() {
    return (
        <div className="flex justify-center items-center pb-[30px] bg-[color:var(--client-display-list-bg-color)]">
            <div className="shadow-lg py-1 px-2 font-bold bg-[color:var(--login-button-color)] text-[color:var(--login-button-text-color)] outline-none hover:bg-[color:var(--login-button-hover-color)] hover:text-[color:var(--login-button-text-hover-color)] cursor-pointer">
                {formatMessage("home.more")}
            </div>
        </div>
    );
}