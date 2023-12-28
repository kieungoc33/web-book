import axios from "./../../../lib/axios";   

export async function addAdmin(data) {
    try {
        const res = await axios.post("/createAdmin", data)
        return res
    } catch (err) {

    }
};