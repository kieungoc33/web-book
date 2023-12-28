export default function AuthService() {
    // check if token is in local storage
    const token = localStorage.getItem("adminToken");

    // if token is not in local storage, return false
    if (!token) {
        return false; 
    } else {
        return true;
    }
}