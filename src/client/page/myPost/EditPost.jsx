import { useEffect, useState } from "react";
import { formatMessage } from "../../Client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getMyPostById } from "./api/index";
import { useParams } from "react-router-dom";
import backArrow from "../../images/icons/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
// import { Image } from "@ckeditor/ckeditor5-image";

// ClassicEditor.create(document.querySelector("#editor"), {
//     plugins: [Image],
//     toolbar: ["imageUpload"],
// });

export default function EditPost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams().id;
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        dispatch(startLoading());
        getMyPostById(id).then((res) => {
            if (res) {
                setTitle(res.data.title);
                setImage(res.data.image);
                setCategory(res.data.category);
                setContent(res.data.content);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, []);

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    function handleCategoryChange(event) {}

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function moveBack() {
        navigate(-1);
    }

    return (
        <div className="p-[60px] px-[200px] bg-[color:var(--client-display-list-bg-color)]">
            <div className="pb-[24px]">
                <img
                    src={backArrow}
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={moveBack}
                />
            </div>
            <div className="pb-[60px] font-bold text-2xl ">
                {formatMessage("editPost.editPost")}
            </div>
            <div className="border py-[60px] px-[120px] bg-[color:var(--client-display-item-bg-color)] shadow-md">
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("editPost.title")}:
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border py-[5px] px-[20px] outline-none focus:border-[color:var(--client-addpost-border-color)] rounded"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                </div>
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("editPost.image")}:
                    </div>
                    <div>
                        <input
                            type="file"
                            className="w-full border py-[5px] px-[20px] outline-none focus:border-[color:var(--client-addpost-border-color)] rounded"
                            value={image}
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("editPost.category")}:
                    </div>
                    <div>
                        <select>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div className="py-[20px]">
                    <div className="font-bold text-lg pb-[10px]">
                        {formatMessage("editPost.content")}:
                    </div>
                    <div>
                        <CKEditor
                            className="min-w-[200px]"
                            editor={ClassicEditor}
                            config={{
                                toolbar: [
                                    "heading",
                                    "|",
                                    "bold",
                                    "italic",
                                    "link",
                                    "bulletedList",
                                    "numberedList",
                                    "blockQuote",
                                    "undo",
                                    "redo",
                                ],
                                heading: {
                                    options: [
                                        {
                                            model: "paragraph",
                                            title: "Paragraph",
                                            class: "ck-heading_paragraph",
                                        },
                                        {
                                            model: "heading1",
                                            view: "h1",
                                            title: "Heading 1",
                                            class: "ck-heading_heading1",
                                        },
                                        {
                                            model: "heading2",
                                            view: "h2",
                                            title: "Heading 2",
                                            class: "ck-heading_heading2",
                                        },
                                    ],
                                },
                            }}
                            data={content}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setContent(data);
                            }}
                            onReady={(editor) => {
                                console.log("Editor is ready to use!", editor);
                            }}
                        />
                    </div>
                </div>
                <div className="pt-[20px] flex justify-end">
                    <button className="font-bold border py-[5px] px-[10px] rounded-lg text-[color:var(--client-post-reply-button-text-color)] bg-[color:var(--client-post-reply-button-color)] hover:bg-[color:var(--client-post-reply-button-hover-color)] hover:text-[color:var(--client-post-reply-button-text-hover-color)] cursor-pointer shadow-md border ">
                        {formatMessage("editPost.submit")}
                    </button>
                </div>
            </div>
        </div>
    );
}
