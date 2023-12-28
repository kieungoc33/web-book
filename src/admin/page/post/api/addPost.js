import axios from "./../../../lib/axios"
// import { addNotification } from "../../../../client/slices/NotificationSlice"

export async function addPost(data) {
    try {
        const res = await axios.post("/post", data)
        return res
    } catch (err) {

    }
}

export async function deletePost(id) {
    try {
        const res = await axios.delete(`/post/${id}`)
        return res
    } catch (err) {

    }
}

export async function updatePost(id, data) {
    try {
        const res = await axios.put(`/post/${id}`, data)
        return res
    } catch (err) {

    }
}