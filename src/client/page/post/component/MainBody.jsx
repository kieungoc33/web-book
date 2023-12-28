import { formatMessage } from "../../../Client";
import BookMark from "./BookMark";
import Reply from "./Reply";

export default function MainBody(props) {
    const { post } = props;
    console.log(post)

    return (
        <div className="w-full border bg-[color:var(--client-display-item-bg-color)] shadow-lg">
            <div className="py-[65px] px-[80px] font-bold text-[45px] border-b cursor-pointer hover:text-[color:var(--client-display-item-text-hover-color)] drop-shadow-md">
                {post.title}
            </div>
            <div className="w-full flex justify-center items-center overflow-hidden">
                <img
                    src={post.image}
                    alt="book"
                    className=" transform scale-100 hover:scale-125 transition-transform duration-300 cursor-pointer hover:opacity-50"
                />
            </div>
            <div className="p-[80px] text-xl">
                <div 
                    dangerouslySetInnerHTML={{__html: post.content}}
                />
            </div>
            <div className="pt-[80px] ">
                <BookMark
                    date={post.date}
                    category={post.category.name}
                    user={post.user}
                    nextBook={post.nextBook}
                    prevBook={post.prevBook}
                />
            </div>
            <div className="p-[80px]">
                <Reply postId={post.id} />
            </div>
        </div>
    );
}