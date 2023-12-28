import { getReply, postReply } from "../api/index";
import { useState, useEffect } from "react";
import { formatMessage } from "../../../Client";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../../slices/LoadingSlice";

export default function Reply(props) {
    const dispatch = useDispatch();
    const intl = useIntl();
    const { postId } = props;
    const [reply, setReply] = useState([{}]);
    const [replyContent, setReplyContent] = useState("");

    useEffect((postId) => {
        dispatch(startLoading());
        getReply().then((res) => {
            if (res) {
                setReply(res.data);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, []);

    function sendReply() {
        dispatch(startLoading());
        const data = {
            content: replyContent,
        }
        postReply(postId, replyContent).then((res) => {
            if (res) {
                setReply(
                    prev => [...prev, data]
                );
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    function renderReply() {
        return reply.map((reply) => {
            return (
                <div>
                    <div>{reply.content}</div>
                    <div>{reply.author}</div>
                </div>
            );
        });
    }

    function handleReplyContentChange(event) {
        setReplyContent(event.target.value);
    }

    return (
        <div className="flex flex-col">
            <div>
                <div className="text-[30px] font-bold pb-[20px]">
                    {formatMessage("post.leaveReply")}
                </div>
                <div>
                    <textarea
                        className="border p-[20px] w-full"
                        name=""
                        id=""
                        placeholder={intl.formatMessage({
                            id: "app.client.post.replyPlaceholder",
                        })}
                        value={replyContent}
                        onChange={handleReplyContentChange}
                    ></textarea>
                </div>
                <div className="py-[20px] flex justify-end">
                    <button 
                        className="font-bold border py-[5px] px-[10px] rounded-lg text-[color:var(--client-post-reply-button-text-color)] bg-[color:var(--client-post-reply-button-color)] hover:bg-[color:var(--client-post-reply-button-hover-color)] hover:text-[color:var(--client-post-reply-button-text-hover-color)] cursor-pointer shadow-md"
                        onClick={sendReply}
                    >
                        {formatMessage("post.reply")}
                    </button>
                </div>
            </div>
            <div>
                {renderReply()}
            </div>
        </div>
    );
}
