import axios from "../../../lib/axios";

export const getAdmin = async () => {
  try {
    const res = await axios.get("/adminInfo");
    return res.data;
  } catch (error) {
    
  }
};