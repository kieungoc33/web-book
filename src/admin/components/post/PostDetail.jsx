import { useState, useEffect } from "react";
import { formatMessage } from "../../Admin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import { deletePost, updatePost } from "../../page/post/api";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

// import { Image } from "@ckeditor/ckeditor5-image";

// ClassicEditor.create(document.querySelector("#editor"), {
//     plugins: [Image],
//     toolbar: ["imageUpload"],
// });

export default function PostDetail(props) {
    const categoryList = [
        { name: "category.art" },
        { name: "category.biography" },
        { name: "category.business" },
        { name: "category.children" },
        { name: "category.christian" },
        { name: "category.classics" },
        { name: "category.cooking" },
        { name: "category.ebook" },
        { name: "category.fantasy" },
        { name: "category.fiction" },
        { name: "category.history" },
        { name: "category.horror" },
        { name: "category.memoir" },
        { name: "category.music" },
        { name: "category.mystery" },
        { name: "category.nonfiction" },
        { name: "category.poetry" },
        { name: "category.psychology" },
        { name: "category.romance" },
        { name: "category.science" },
        { name: "category.scifi" },
        { name: "category.selfHelp" },
        { name: "category.sports" },
        { name: "category.thriller" },
        { name: "category.travel" },
        { name: "category.youngAdult" },
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        type,
        idProp,
        imageProp,
        titleProp,
        categoryProp,
        contentProp,
        approvedProp,
    } = props;
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setTitle(titleProp);
        setImage(imageProp);
        setCategory("category." + categoryProp);
        setContent(contentProp);
    }, [titleProp]);

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function removePost() {
        dispatch(startLoading());
        deletePost(idProp).then((res) => {
            if (res) {
                navigate(-1);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    function sendPost() {
        dispatch(startLoading());
        const data = new FormData();
        data.append("title", title);
        data.append("image", image);
        data.append("category", category);
        data.append("content", content);
        data.append("approved", 1);

        updatePost(idProp, data).then((res) => {
            if (res) {
                navigate(-1);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    return (
        <div className="border py-[60px] px-[120px] bg-[color:var(--client-display-item-bg-color)] shadow-md">
            <div className="py-[20px]">
                <div className="font-bold text-lg pb-[10px]">
                    {formatMessage("addPost.title")}:
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
                    {formatMessage("addPost.image")}:
                </div>
                <div>
                    <input
                        type="file"
                        className="w-full border py-[5px] px-[20px] outline-none focus:border-[color:var(--client-addpost-border-color)] rounded"
                        onChange={handleImageChange}
                    />
                </div>
            </div>
            <div className="py-[20px]">
                <div className="font-bold text-lg pb-[10px]">
                    {formatMessage("addPost.category")}:
                </div>
                <div>
                    <Select
                        className="w-full"
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        {categoryList.map((item) => {
                            return (
                                <MenuItem value={item.name}>
                                    {formatMessage(item.name)}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </div>
            </div>
            <div className="py-[20px]">
                <div className="font-bold text-lg pb-[10px]">
                    {formatMessage("addPost.content")}:
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
                {type === "awaiting" ? (
                    <>
                        <button
                            className="bg-[color:var(--admin-home-button-color-1)] text-white px-4 py-2 rounded mr-[20px] hover:opacity-80 shadow-md"
                            onClick={sendPost}
                        >
                            {formatMessage("postDetail.approve")}
                        </button>
                        <button
                            className="bg-[color:var(--admin-home-button-color-2)] text-white px-4 py-2 rounded hover:opacity-80 shadow-md"
                            onClick={removePost}
                        >
                            {formatMessage("postDetail.reject")}
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="bg-[color:var(--admin-home-button-color-1)] text-white px-4 py-2 rounded mr-[20px] hover:opacity-80 shadow-md"
                            onClick={sendPost}
                        >
                            {formatMessage("postDetail.confirm")}
                        </button>
                        <button
                            className="bg-[color:var(--admin-home-button-color-2)] text-white px-4 py-2 rounded hover:opacity-80 shadow-md"
                            onClick={removePost}
                        >
                            {formatMessage("postDetail.delete")}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
