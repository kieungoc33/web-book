import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export async function postPost(data) {
    try {
        const res = await axios.post("/post/addPost", data);
        return res.data;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });
    }
};