import axios from "./../../../lib/axios.js";

export async function getAwaitingPost() {
    try {
        const res = await axios.get("/post/awaiting");
        return res;
    } catch (error) {
    }
}

export async function updateAwaitingPost(id, data) {
    try {
        const res = await axios.put(`/post/${id}`, data);
        return res;
    } catch (error) {
    }
}

export async function getAwaitingPostById(id) {
    try {
        const res = await axios.get(`/post/${id}`);
        return res;
    } catch (error) {
    }
}
