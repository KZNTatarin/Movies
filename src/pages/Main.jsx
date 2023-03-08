import React, { useEffect, useState } from "react";

import { MoviesService } from "../services/MoviesService";

import { generateRandomId } from "../utils/randomİd";

import Loader from "../components/Uİ/Loader/Loader";

const Main = () => {
    const [film, setFilm] = useState();

    // загружаем фильм при первой загрузке страницы
    useEffect(() => {
        // получаем один отдельный фильм по рандомному Id (İD)
        const fetchOneFilm = async (randomId) => {
            const data = await MoviesService.getOneMovie(randomId + 1);
            const oneMovie = await data.json();
            setFilm(oneMovie.data.movie);
        };

        if (!film) {
            fetchOneFilm(generateRandomId(20));
        }
    }, []);

    return film ? (
        <div style={{ backgroundImage: `url(${film.background_image})` }} className="main-bg">
            <div className="main">
                <div className="container">
                    <div className="film__content">

                        <div className="film__text">
                            <h1 className="film__title">{film.title}</h1>
                            <p className="film__subtitle">{film.description_intro.slice(0, 300)}...</p>
                        </div>

                        <div className="film__img">
                            <img src={film.medium_cover_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <Loader />;
};

export default Main;
