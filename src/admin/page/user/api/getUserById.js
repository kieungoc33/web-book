import axios from "./../../../lib/axios";

export async function getUserById(id) {
    try {
        const res = await axios.get(`/user/${id}`)
        return res
    } catch (err) {

    }
}