import axios from "../../../lib/axios";
// import { addNotification } from "../../../slices/NotificationSlice";

export async function getAllAdmin() {
    try {
        const res = await axios.get(`/admins`);
        return res;
    } catch (err) {
        // addNotification({ type: "error", message: "Something went wrong" });
    }
}