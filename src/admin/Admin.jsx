import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import User from "./page/user/User";
import AwaitingPost from "./page/post/AwaitingPost";
import AwaitingPostDetail from "./page/post/AwaitingPostDetail";
import ApprovedPost from "./page/post/ApprovedPost";
import ApprovedPostDetail from "./page/post/ApprovedPostDetail";
import AddPost from "./page/post/AddPost";
import AdminPage from "./page/admin/AdminPage";
import AddAdmin from "./page/admin/AddAdmin";
import ForgotPassword from "./page/forgotPassword/ForgotPassword";
import Page from "./Page";
import Login from "./page/login/Login";
import Loading from "./components/loading/Loading";
import AdminDetail from "./page/admin/AdminDetail";
import UserDetail from "./page/user/UserDetail";
import { FormattedMessage, IntlProvider } from "react-intl";
import { useAppSelector } from "../app/store";
import enTransalation from "./translation/en.json";
import viTransalation from "./translation/vi.json";
import PrivateRoute from "./PrivateRoute";

export function formatMessage(item) {
    return <FormattedMessage id={"app.admin." + item} />;
}

export default function Admin() {
    const language = useAppSelector((state) => state.adminLanguage.language);
    const loading = useAppSelector((state) => state.adminLoading.loading);
    const localeData = {
        en: enTransalation,
        vi: viTransalation,
    };

    return (
        <IntlProvider locale={language} messages={localeData[language]}>
            {loading ? <Loading /> : null}
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute
                            path="/"
                            element={<Page content={<Home />} />}
                        />
                    }
                />
                <Route
                    path="/user"
                    element={
                        <PrivateRoute
                            path="/user"
                            element={<Page content={<User />} />}
                        />
                    }
                />
                <Route
                    path="/user/:id"
                    element={
                        <PrivateRoute
                            path="/user/:id"
                            element={<Page content={<UserDetail />} />}
                        />
                    }
                />
                <Route
                    path="/post/awaitingPost"
                    element={
                        <PrivateRoute
                            path="/post/awaitingPost"
                            element={<Page content={<AwaitingPost />} />}
                        />
                    }
                />
                <Route
                    path="/post/awaitingPost/:id"
                    element={
                        <PrivateRoute
                            path="/post/awaitingPost/:id"
                            element={<Page content={<AwaitingPostDetail />} />}
                        />
                    }
                />
                <Route
                    path="/post/approvedPost"
                    element={
                        <PrivateRoute
                            path="/post/approvedPost"
                            element={<Page content={<ApprovedPost />} />}
                        />
                    }
                />
                <Route 
                    path="/post/approvedPost/:id"
                    element={
                        <PrivateRoute
                            path="/post/approvedPost/:id"
                            element={<Page content={<ApprovedPostDetail />} />}
                        />
                    }
                />
                <Route
                    path="/post/approvedPost/add"
                    element={
                        <PrivateRoute
                            path="/post/approvedPost/add"
                            element={<Page content={<AddPost />} />}
                        />
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute
                            path="/admin"
                            element={<Page content={<AdminPage />} />}
                        />
                    }
                />
                <Route
                    path="/admin/add"
                    element={
                        <PrivateRoute
                            path="/admin/add"
                            element={<Page content={<AddAdmin />} />}
                        />
                    }
                />
                <Route
                    path="/admin/:id"
                    element={
                        <PrivateRoute
                            path="/admin/:id"
                            element={<Page content={<AdminDetail />} />}
                        />
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Routes>
        </IntlProvider>
    );
}
