import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export const deleteMyPost = async (id) => {
    try {
        const res = await axios.delete(`/post/myPost/${id}`);
        return res.data;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });
    }
};