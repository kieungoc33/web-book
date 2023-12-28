import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export const getAuthor = async (authorId) => {
    try {
        const res = await axios.get(`/api/author/?author=${authorId}`);
        return res.data;
    } catch (err) {
        return addNotification({
            message: err.msg,
            category: "error",
        });
    }
};
