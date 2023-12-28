import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export const getAllPost = async (pageNum, pageSize) => {
    try {
        const res = await axios.get(`/posts/${pageNum}/${pageSize}`);
        return res;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });
    }
};