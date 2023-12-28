import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Client from "./client/Client";
import Admin from "./admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/admin/*" element={<Admin />} />
                    <Route path="/*" element={<Client />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
);