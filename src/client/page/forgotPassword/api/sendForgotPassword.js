import axios from "../../../lib/axios";
import { addNotification } from "../../../slices/NotificationSlice";

export async function sendForgotPassword(data) {
    try {
        const result = await axios.post("/sendEmail", data);
        return result;
    } catch (err) {
        addNotification({
            message: err.msg,
            category: "error",
        });    
    }
};