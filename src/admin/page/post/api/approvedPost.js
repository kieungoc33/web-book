import axios from "../../../lib/axios.js";

export async function getApprovedPost() {
    try {
        const res = await axios.get("/post/approved");
        return res;
    } catch (error) {
    }
}

export async function updateApprovedPost(id, data) {
    try {
        const res = await axios.put(`/post/${id}`, data);
        return res;
    } catch (error) {
    }
}

export async function getApprovedPostById(id) {
    try {
        const res = await axios.get(`/post/${id}`);
        return res;
    } catch (error) {
    }
}
