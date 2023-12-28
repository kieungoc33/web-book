import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export const getCategory = async (category) => {
    try {
        const res = await axios.get(`/post/?category=${category}`);
        return res.data;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });
    }
};
