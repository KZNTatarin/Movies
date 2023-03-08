import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Uİ/Navbar/Navbar";

import Main from "./pages/Main";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

import "./styles/app.scss";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;