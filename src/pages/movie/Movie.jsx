import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { MoviesService } from '../../services/MoviesService';

import Loader from '../../components/Uİ/Loader/Loader';

import "./Movie.scss";

const Movie = () => {
    const [film, setFilm] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (film) {
            document.title = film.title_long;
        };
    }, [film]);

    useEffect(() => {
        const fetchMovieDetails = async (İd) => {
            const data = await MoviesService.getMovieDetails(İd);
            const movie = await data.json();

            if (movie.data.movie.id !== 0) {
                setFilm(movie.data.movie);
            } else {
                navigate("/404");
            };
        };

        if (!film && id) {
            fetchMovieDetails(id);
        };
    }, []);

    return film ? (
        <div>
            <div className='movie__header' >
                <img style={{ marginRight: "10px" }} src={film.medium_cover_image} alt='not found' />
                <div>
                    <h1>{film.title_long}</h1>
                    <span className='red-text'>Genres</span> : {film.genres.map((genre) => (
                        <div>
                            • {genre}
                        </div>
                    ))}
                </div>
            </div>
            <p className='movie__description'>{film.description_full}</p>
        </div>
    ) : <Loader />;
};

export default Movie;