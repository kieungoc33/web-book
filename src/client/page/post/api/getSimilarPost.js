import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export async function getSimilarPost(postId) {
    try {
        const res = await axios.get(`/post/${postId}/similar`);
        return res;
    } catch (err) {
        addNotification({ type: "error", message: "Something went wrong" });
    }
}