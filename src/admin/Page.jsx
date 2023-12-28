import Navbar from "./components/navbar/Navbar";

export default function Page(props) {
    const { content } = props;

    return (
        <div className="grid grid-cols-6">
            <div className="col-span-1">
                <Navbar />
            </div>
            <div className="col-span-5 overflow-auto max-h-screen bg-[color:var(--admin-stock-bg-color)]">
                {content}
            </div>
        </div>
    );
}