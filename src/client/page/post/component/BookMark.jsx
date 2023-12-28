import { formatMessage } from "../../../Client";
import clock from "../../../images/icons/clock.svg";
import folder from "../../../images/icons/folder.svg";
import tag from "../../../images/icons/tag.svg";
import logo from "../../../images/bookaholic-logo.png";
import box from "../../../images/box.png";
import { useNavigate } from "react-router-dom";
import leftArrow from "../../../images/icons/leftArrow.svg";
import rightArrow from "../../../images/icons/rightArrow.svg";

export default function BookMark(props) {
    const navigate = useNavigate();
    const { date, category, user, nextBook, prevBook } = props;

    function getPostByAuthor() {
        navigate("/author/" + user.firstName + user.lastName);
    }

    function moveToPost(item) {
        navigate("/post/" + item.category + "/" + item.id);
    }

    return (
        <div className="grid grid-cols-5 text-[color:var(--client-post-bookmark-text-color)] text-lg">
            <div className="col-span-3 bg-[color:var(--client-post-bookmark-bg-color-1)] flex flex-col p-[30px]">
                <div className="flex ">
                    <img src={logo} alt="" className="h-[40px] w-[40px]" />
                    <div className="pl-[40px] ">
                        <div className="pb-[10px] font-bold text-2xl text-[color:var(--client-post-bookmark-text-color-2)] ">
                            {formatMessage("post.bookmarkTitle")}
                        </div>
                        <div className="pb-[10px]">
                            {formatMessage("post.bookmarkDescription")}
                        </div>
                        <div
                            className="flex pt-[20px] items-center"
                            onClick={getPostByAuthor}
                        >
                            <div className="w-[30px] h-[30px] bg-[color:var(--client-post-bookmark-text-color)] flex justify-center items-center rounded-full cursor-pointer hover:bg-green-200">
                                <img
                                    src={box}
                                    alt=""
                                    className="w-[20px] h-[20px]"
                                />
                            </div>
                            <span className="pl-[10px] text-[color:var(--client-post-bookmark-text-color-3)] cursor-pointer text-base">
                                {formatMessage("post.viewAllPosts")}
                                {user.firstName + " " + user.lastName}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 bg-[color:var(--client-post-bookmark-bg-color-2)] h-full p-[30px] font-bold text-base">
                <div className="border-b border-[color:var(--client-post-bookmart-text-color)]">
                    <div className="flex pb-[10px]">
                        <img src={clock} alt="" />
                        <span className="pl-[10px]">{date}</span>
                    </div>
                    <div className="flex pb-[10px]">
                        <img src={folder} alt="" />
                        <span className="pl-[10px]">{category}</span>
                    </div>
                    <div className="flex pb-[10px]">
                        <img src={tag} alt="" />
                        <span className="pl-[10px]">
                            {user.firstName + " " + user.lastName}
                        </span>
                    </div>
                </div>
                <div className="pt-[20px]">
                    {nextBook === undefined ? null : (
                        <div
                            className="flex flex-row justify-start pb-[10px]"
                            onClick={() => moveToPost(nextBook)}
                        >
                            <img src={leftArrow} alt="" />
                            <div className="ml-[10px] cursor-pointer hover:text-[color:var(--client-display-item-text-hover-color)]">
                                {nextBook.title}
                            </div>
                        </div>
                    )}
                    {prevBook === undefined ? null : (
                        <div
                            className="flex flex-row justify-end"
                            onClick={() => moveToPost(prevBook)}
                        >
                            <div className="mr-[10px] cursor-pointer hover:text-[color:var(--client-display-item-text-hover-color)]">
                                {prevBook.title}
                            </div>
                            <img src={rightArrow} alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
