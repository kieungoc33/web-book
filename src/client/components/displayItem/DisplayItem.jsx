import { formatMessage } from "../../Client";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function DisplayItem(props) {
    const { id, category, image, title, description, date } = props;
    const navigate = useNavigate();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    function convertDate(date) {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const month = dateObject.getMonth();
        const year = dateObject.getFullYear();
        return months[month] + " " + day + ", " + year;
    }

    function shortenDescription(description) {
        if (!description) return "";
        if (description.length > 200) {
            return description.substring(0, 200) + "...";
        }
        return description;
    }

    function moveToItem() {
        navigate("/post/" + category + "/" + id);
    }

    return (
        <div className="w-full border bg-[color:var(--client-display-item-bg-color)] shadow-lg">
            <div
                className="p-[30px] font-bold text-xl border-b cursor-pointer hover:text-[color:var(--client-display-item-text-hover-color)]"
                onClick={moveToItem}
            >
                {title}
            </div>
            <div
                className="w-full flex justify-center items-center overflow-hidden"
                onClick={moveToItem}
            >
                <img
                    src={image}
                    alt="book"
                    className="transform scale-100 hover:scale-125 transition-transform duration-300 cursor-pointer hover:opacity-50"
                />
            </div>
            <div className="p-[30px] border-b">
                {shortenDescription(<div dangerouslySetInnerHTML={{__html: description}}/>)}
                <div
                    className="pt-[30px] text-[color:var(--client-display-item-continue-color)] hover:underline hover:opacity-80 cursor-pointer hover:text-[color:var(--client-display-item-text-hover-color)]"
                    onClick={moveToItem}
                >
                    {formatMessage("displayItem.continueReading")}
                </div>
            </div>
            <div className="p-[15px] bg-[color:var(--client-display-time-bg-color)] text-[color:var(--client-display-time-text-color)]">
                {convertDate(date)}
            </div>
        </div>
    );
}
