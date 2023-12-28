import { Navigate, Route } from "react-router-dom";
import AuthService from "./services/AuthService";
import { formatMessage } from "./Client";

export default function PrivateRoute(props) {
    const component = props.element;
    const isLoggedIn = AuthService();

    return <div>{isLoggedIn ? component : (
        <div className="font-bold text-2xl min-h-screen flex justify-center items-center">
            {formatMessage("loginRequired")}
        </div>
    )}</div>;
}
