import PostDetail from "../../components/post/PostDetail";
import { formatMessage } from "../../Admin";
import backArrow from "../../resources/icons/backArrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getApprovedPostById } from "./api";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";

export default function ApprovedPostDetail() {
    const dispatch = useDispatch();
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
        dispatch(startLoading());
        getApprovedPostById(id).then((res) => {
            if (res) {
                setTitle(res.data.title);
                setImage(res.data.image);
                setCategory(res.data.category.name);
                setContent(res.data.content);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, [title]);

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
                {formatMessage("approvedPost.approved")}
            </div>
            <PostDetail
                type="approved"
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
