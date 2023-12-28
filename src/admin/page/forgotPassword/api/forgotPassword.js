import axios from "../../../lib/axios";

export async function sendForgotPassword(data) {
    try {
        const res = await axios.post("/sendEmail", data);
        return res.data;
    } catch (error) {}
}