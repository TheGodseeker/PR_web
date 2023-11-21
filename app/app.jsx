import { BrowserRouter, Routes, Route } from "react-router-dom";
import MediaQuery from 'react-responsive'
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

const ReactDOM = require("react-dom/client");
const React = require("react");

// const BSmin = require("bootstrap/dist/css/bootstrap.min.css")
// const BSbundle = require("bootstrap/dist/js/bootstrap.bundle.min")


const Main = require("./components/main.jsx");
const Reviews = require("./components/reviews.jsx");
const TopBar = require("./components/topbar.jsx");
const Bottom = require("./components/bottom.jsx");
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <BrowserRouter>
        <TopBar/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="*" element={<p>Что ты тут делаешь?</p>}/>
        </Routes>
        <Bottom/>
    </BrowserRouter>
);