import { getAuthor } from "./api/index";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatMessage } from "../../Client";
import DisplayList from "../../components/displayItem/DisplayList";

export default function Author() {
    const { author } = useParams();
    const [authorItems, setAuthorItems] = useState([
        {
            id: 0,
            title: "",
            category: "art",
            image: "",
            description: "",
            date: "",
        },
    ]);

    useEffect(() => {
        getAuthor(author).then((res) => {
            if (res.data === undefined) {
                return;
            }
            setAuthorItems(res.data);
        });
    }, []);

    return (
        <div className="flex flex-col bg-[color:var(--client-display-list-bg-color)]">
            <div className="uppercase flex justify-center my-[60px] font-bold text-lg">
                <div className="border-b border-[color:var(--client-category-border-color)]">
                    {formatMessage("category.category")}
                    {": " + author}
                </div>
            </div>
            <DisplayList items={authorItems} />
        </div>
    );
}
