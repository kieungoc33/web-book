import axios from "../../../lib/axios";

export async function updateUser(id, data) {
    try {
        const res = await axios.put(`/user/${id}`, data);
        return res;
    } catch (err) {}
}
