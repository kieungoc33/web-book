import ScrollToTop from "./ScrollToTop";
import { useAppSelector } from "../app/store";
import Loading from "./page/loading/Loading";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

export default function Page(props) {
    const loading = useAppSelector((state) => state.clientLoading.loadingState);
    console.log(loading);
    const content = props.content;

    return (
        <>
            {loading ? <Loading /> : null}
            <Header />
            <Navbar />
            {content}
            <ScrollToTop />
        </>
    );
}
