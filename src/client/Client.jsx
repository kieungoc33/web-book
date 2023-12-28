import { useAppSelector } from "../app/store";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import enTransalation from "./translation/en.json";
import viTransalation from "./translation/vi.json";
import { IntlProvider, FormattedMessage } from "react-intl";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import SignUp from "./page/signup/SignUp";
import ForgotPassword from "./page/forgotPassword/ForgotPassword";
import Category from "./page/category/Category";
import Author from "./page/author/Author";
import MyPost from "./page/myPost/MyPost";
import AddPost from "./page/addPost/AddPost";
import EditPost from "./page/myPost/EditPost";
import ContactUs from "./page/contactUs/ContactUs";
import Post from "./page/post/Post";
import Page from "./Page";
import Loading from "./page/loading/Loading";
import PrivateRoute from "./PrivateRoute";

export function formatMessage(item) {
    return <FormattedMessage id={"app.client." + item} />;
}

export default function Client() {
    const language = useSelector((state) => state.clientLanguage.language);
    const localeData = {
        en: enTransalation,
        vi: viTransalation,
    };

    return (
        <IntlProvider locale={language} messages={localeData[language]}>
            <Routes>
                <Route path="/" element={<Page content={<Home />} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route
                    path="/category/:category"
                    element={<Page content={<Category />} />}
                />
                <Route
                    path="/author/:author"
                    element={<Page content={<Author />} />}
                />
                <Route
                    path="/post/:category/:id"
                    element={<Page content={<Post />} />}
                />
                <Route
                    path="/myPost"
                    element={
                        <Page content={<PrivateRoute element={<MyPost />} />} />
                    }
                />
                <Route
                    path="/edit/:category/:id"
                    element={<Page content={<EditPost />} />}
                />
                <Route
                    path="/addPost"
                    element={
                        <Page
                            content={<PrivateRoute element={<AddPost />} />}
                        />
                    }
                />
                <Route
                    path="/contactUs"
                    element={<Page content={<ContactUs />} />}
                />
            </Routes>
        </IntlProvider>
    );
}
