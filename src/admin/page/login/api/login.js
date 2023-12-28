import axios from "../../../lib/axios";
// import { addNotification } from "../../../slices/NotificationSlice";

export async function login(data) {
    try {
        const result = await axios.post("/loginAdmin", data);
        return result;
    } catch (err) {
        // addNotification({
        //     message: err.msg,
        //     category: "error",
        // });    
    }
};