import { BrowserRouter, Routes, Route } from "react-router-dom";
import MediaQuery from 'react-responsive'
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

import TopBar from "./components/topbar.jsx";
import Main from "./components/main.jsx";
import Reviews from "./components/reviews.jsx";
import Search from "./components/search.jsx";
import Results from "./components/results.jsx";

const ReactDOM = require("react-dom/client");
const React = require("react");

// const BSmin = require("bootstrap/dist/css/bootstrap.min.css")
// const BSbundle = require("bootstrap/dist/js/bootstrap.bundle.min")


const Bottom = require("./components/bottom.jsx");
const Services = require("./components/services.jsx")
const Service = require("./components/service.jsx")  


ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <BrowserRouter>
        <TopBar/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="results" element={<Results/>}/>
            <Route path="*" element={<p>Что ты тут делаешь?</p>}/>
        </Routes>
        <Bottom/>
    </BrowserRouter>
);