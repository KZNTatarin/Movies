import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Navbar from "./components/Uİ/Navbar/Navbar";
import './styles/app.scss';


function App() {

    const [data, setData] = useState();

    const fetchData = () => {
        fetch('https://yts.mx/api/v2/list_movies.json?limit=1')
            .then((response) => response.json())
            .then((data) => setData(data));
    }


    useEffect(() => {
        fetchData();
        console.log(data);
    }, [data])

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<About setData={data} />} />
                <Route path='/movies' element='' />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
