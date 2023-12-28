import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export const getMyPost = async () => {
    try {
        const res = await axios.get("/post/myPost");
        return res.data;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });
    }
};

export const getMyPostById = async (id) => {
    try {
        const res = await axios.get(`/post/myPost/${id}`);
        return res.data;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });
    }
};
