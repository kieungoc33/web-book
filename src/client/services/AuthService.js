export default function AuthService() {
    // check if token is in local storage
    const token = localStorage.getItem("userToken");

    // if token is not in local storage, return false
    if (!token) {
        return false;
    } else {
        return true;
    }
}
