import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export async function getReply(postId) {
    try {
        const res = await axios.get(`/reply/?id=${postId}`);
        return res;
    } catch (err) {
        addNotification({
            type: "error",
            message: "Something went wrong",
        });
    }
}
