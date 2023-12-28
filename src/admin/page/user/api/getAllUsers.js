import axios from "./../../../lib/axios";

export async function getAllUsers() {
    try {
        const res = await axios.get("/users")
        return res
    } catch (err) {

    }
}