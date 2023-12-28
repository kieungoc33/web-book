import axios from "../../../lib/axios";

export const updateAdmin = async (id, data) => {
    try {
        const res = await axios.put(`/user/${id}`, data);
        return res.data;
    } catch (error) {}
};
