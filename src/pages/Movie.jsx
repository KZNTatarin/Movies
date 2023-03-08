import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { MoviesService } from '../services/MoviesService';

const Movie = () => {
    const [film, setFilm] = useState();
    const {id} = useParams();

    useEffect(() => {
            const fetchMovieDetails = async (İd) => {
                const data = await MoviesService.getMovieDetails(İd);
                const movie = await data.json();
                setFilm(movie);
            };

            if (!film && id) {
                fetchMovieDetails(id);
            };

            // #TODO - сделать 404 если такой фильм по ID не найден из базы
            // https://www.makeuseof.com/react-router-404-page-create/ 
            // https://www.google.com/search?q=404+react+router+v6
    }, []);

    // #TODO - вывести фильм по красоте
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Movie;