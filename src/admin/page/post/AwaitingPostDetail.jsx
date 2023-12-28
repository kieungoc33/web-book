import PostDetail from "../../components/post/PostDetail";
import { formatMessage } from "../../Admin";
import backArrow from "../../resources/icons/backArrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAwaitingPostById } from "./api";

export default function AwaitingPostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    function moveBack() {
        navigate(-1);
    }

    useEffect(() => {
        getAwaitingPostById(id).then((res) => {
            if (res) {
                setTitle(res.data.title);
                setImage(res.data.image);
                setCategory(res.data.category);
                setContent(res.data.content);
            }
        });
    }, []);

    return (
        <div className="p-[60px] px-[200px]]">
            <div className="pb-[24px]">
                <img
                    src={backArrow}
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={moveBack}
                />
            </div>
            <div className="pb-[60px] font-bold text-2xl ">
                {formatMessage("awaitingPost.awaiting")}
            </div>
            <PostDetail
                type="awaiting"
                idProp={id}
                titleProp={title}
                imageProp={image}
                categoryProp={category}
                contentProp={content}
                approveProp={true}
            />
        </div>
    );
}
