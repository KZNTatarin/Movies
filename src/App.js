import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Uİ/Navbar/Navbar";

import Main from "./pages/main/Main";
import Movies from "./pages/movies/Movies";
import Movie from "./pages/movie/Movie";
import NotFound from "./pages/NotFound";

import "./styles/app.scss";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<Movie />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;