import axios from "../../../lib/axios";
// import { addNotification } from "../../../slices/NotificationSlice";

export async function getAdminById(adminId) {
    try {
        const res = await axios.get(`/admin/${adminId}`);
        return res;
    } catch (err) {
        console.log(err);
        // addNotification({ type: "error", message: "Something went wrong" });
    }
}