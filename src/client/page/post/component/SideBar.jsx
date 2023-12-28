import { formatMessage } from "../../../Client";
import { getSimilarPost } from "../api/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import book4 from "../../../../test/book4.jpg";
import book5 from "../../../../test/book5.jpg";

export default function SideBar(props) {
    const navigate = useNavigate();
    const { category } = props;
    const [similarPost, setSimilarPost] = useState([
        {
            id: "2",
            title: "The Fund: Ray Dalio, Bridgewater Associates, and the Unraveling of a Wall Street Legend",
            category: "Business",
            image: book4,
            date: "Monday, 12 July 2021",
        },
        {
            id: "3",
            title: "Just Once",
            category: "Christian",
            image: book5,
            date: "Monday, 12 July 2021",
        },
    ]);

    useEffect(() => {
        getSimilarPost(category).then((res) => {
            if (res) {
                setSimilarPost(res.data);
            }
        });
    }, []);

    function moveToPost(item) {
        navigate("/post/" + item.category + "/" + item.id);
    }

    function displaySimilarPost() {
        return similarPost.map((post, index) => {
            return (
                <div
                    className="my-[30px] flex flex-row justify-start items-center border-b pb-[20px] cursor-pointer words-break"
                    key={index}
                    onClick={() => moveToPost(post)}
                >
                    <div className="max-w-[50px] max-h-[50px] border rounded-lg overflow-hidden">
                        <img
                            className=""
                            src={post.image}
                            alt="book"
                        />
                    </div>
                    <div className="pl-[20px] ">
                        <div className="mb-[5px] text-[color:var(--client-display-item-text-color)] font-bold text-md hover:text-[color:var(--client-display-item-text-hover-color)] drop-shadow-md">
                            {post.title}
                        </div>
                        <div className="text-sm">{post.date}</div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="w-full border bg-[color:var(--client-display-item-bg-color)] shadow-lg">
            <div className="font-bold p-[30px] border-b font-lg">
                {formatMessage("post.similar")}
            </div>
            <div className="px-[30px] ">{displaySimilarPost()}</div>
        </div>
    );
}
