import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./components/Uİ/Navbar/Navbar";
import "./styles/app.scss";
import Movies from "./pages/Movies";

function App() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState('');
  console.log(filter);


  const fetchData = (filterData) => {
    console.log(`https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=${filterData}`);
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=${filterData}`)
      .then((response) => response.json())
      .then((data) => setData(data.data));
  };

  useEffect(() => {
    if (data === undefined) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    fetchData(filter);
  }, [filter])




  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Main data={data} />} />
        <Route path="/movies" element={<Movies data={data} setFilter={setFilter}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
