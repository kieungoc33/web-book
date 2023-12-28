import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

export default function Search(props) {
    const intl = useIntl();
    const search = intl.formatMessage({ id: "app.client.search.search" });
    const searchState = useSelector((state) => state.clientSearch.searchState);

    return (
        <div
            className={`relative h-[400px] w-full flex justify-start items-center bg-[color:var(--client-search-bg-color)] transition ease-in-out duration-700 z-20 ${
                searchState
                    ? "scale-y-100 translate-y-0"
                    : "scale-y-0 -translate-y-full"
            }`}
        >
            <input
                type="text"
                className="w-full mx-[60px] text-[40px] p-[10px] outline-none bg-[color:var(--client-search-input-bg-color)] text-[color:var(--client-search-input-text-color)] border border-transparent focus:border-[color:var(--client-search-input-border-color)]  transition duration-300 ease-in-out hover:opacity-75"
                placeholder={search}
            />
        </div>
    );
}
