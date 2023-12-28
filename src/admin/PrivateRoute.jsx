import { Navigate, Route } from "react-router-dom";
import AuthService from "./services/AuthService";

export default function PrivateRoute(props) {
    const component = props.element;
    const isLoggedIn = AuthService();

    return (
        <div>
            {isLoggedIn ? (
                component
            ) : (
                <Navigate to="/admin/login" />
            )}
        </div>
    );
}