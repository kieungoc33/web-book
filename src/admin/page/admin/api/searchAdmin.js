import axios from "../../../lib/axios";
// import { addNotification } from "../../../slices/NotificationSlice";

export async function searchAdmin(search) {
    try {
        const res = await axios.get(`/admin/?search=${search}`);
        return res;
    } catch (err) {
        // addNotification({ type: "error", message: "Something went wrong" });
    }
};