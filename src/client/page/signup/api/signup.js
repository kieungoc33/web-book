import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export async function signup(data) {
    try {
        const result = await axios.post("/signup", data);
        return result;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });
        
    }
}